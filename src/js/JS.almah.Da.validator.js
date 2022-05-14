setTimeout(()=>{
    vtexjs.session.getSession().done(e => {
       
        let userInfo = e.namespaces.profile;
        let amIApproved = false
        fetch(`/api/dataentities/CL/search?_fields=email,approved&email=*${userInfo?.email?.value}*`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json', "Accept": "application/vnd.vtex.ds.v10+json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(res => {
                res[0]?.approved ? amIApproved = res[0].approved : amIApproved = false
    
                console.log(amIApproved)
                if (userInfo.isAuthenticated.value == 'true' && amIApproved) {
                    $(".prateleira .price").fadeIn();
                    $(".plugin-preco").fadeIn()
    
                } else {
                    if ($(".product-details .price-box").length > 0) {
                        $(".product-details .price-box").append(`<p id='priceBlocker' data-bs-toggle="modal" data-bs-target="#notLoggedIn">Clique para ver o preço</p>`)
                    }
                }
            });
    
    })
}, 1500)




