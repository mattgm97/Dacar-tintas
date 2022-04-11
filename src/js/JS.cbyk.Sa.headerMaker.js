
docReady(function () {


    fetch("/api/catalog_system/pub/category/tree/2/")
        .then(res => res.json())
        .then(response => {
            console.log(response);



            response.forEach(element => {
                let divtext = element.name;
                element.name = element.name.replace(/[\s/,&]+/g, '-');
                $(".deptos ul").append(`<li class="depto-${element.name}"><a href="${element.url}?PS=12&O=OrderByNameASC">${divtext}</a></li>`);
                console.log("adding main")
                if (element.hasChildren) {
               

                    $("#deptos-list").append(`
                    
                    <div class="col-sm-4 offset-md-2 secondLayer secondLayer-${element.name} " id="${element.name}">
                    <ul class="">
                     </ul>
                </div>
                `);
                    //Desktop
                    $(`.depto-${element.name}`).on('mouseenter',function () {
                        $(".secondLayer").hide();
                        $(`.secondLayer-${element.name}#${element.name}`).show()
                    });

                    $(`.secondLayer-${element.name}#${element.name}`).on('mouseleave',function () {
                        $(".secondLayer").hide();
                       
                    });



                    //mobile
                    $(".sidenav").append(`<div class="depto-box" style="display:block;border-top: solid 1px #333;"><span class="depto-${element.name}"><a href="${element.url}?PS=12&O=OrderByNameASC">${divtext}</a></span><button class="dropdown-btn" id="${element.name}"><i class="fa fa-angle-down"></i></button></div>
             <div class="dropdown-container" id="${element.name}"></div>`);


                
                  /*  $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function () {
                        $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
                        $(`#deptos-list .deptonav .row .secondLayer`).hide();
                        $(`#deptos-list .deptonav .row .thirdLayer`).hide();
                    });*/


                    //Mobile
                    $(`.dropdown-btn#${element.name}`).toggle(() => {
                        // $(".dropdown-container").slideUp();
                        $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
                        $(`.dropdown-container#${element.name}`).slideDown()
                    }, () => {
                        $(`.dropdown-container#${element.name}`).slideUp()
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
                    })

                    element.children.sort((a, b) => a.name.localeCompare(b.name, 'pt', { ignorePunctuation: true }));
                    element.children.forEach((subs, index) => {
                        //  console.log("adding children");
                        //  console.log(subs)
                        let divtextsub = subs.name;
                        subs.name = subs.name.replace(/[\s/,&]+/g, '-');
                        //desktop
                        $(`.secondLayer-${element.name}  ul`).append(`<li  class="item-${subs.name}"><a href="${subs.url}?PS=12&O=OrderByNameASC">${divtextsub}</a></li>`);
                        if (!subs.hasChildren) {
                            $(`.dropdown-container#${element.name}`).append(`<div style="display:block;border-top: solid 1px #333;"><span class="depto-${element.name}"><a href="${subs.url}?PS=12&O=OrderByNameASC">${divtextsub}</a></span></div>`);
                            $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul .item-${subs.name}`).mouseenter(function () {
                                // $(`.depto-${element.name} .row .col-sm-4.secondLayer`).hide()
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer`).hide();
                            });
                        }


                       



                        //mobile


                    })

                    //Desktop











                } else {
                    $(".sidenav").append(`<span class="depto-${element.name}"><a style="border-top: solid 1px #333;" href="${element.url}">${divtext}</a></span>`)
                }
            });








        })

    setTimeout(() => {





        let toggle = true;
        const mq = window.matchMedia("(max-width: 600px)");
        if (mq.matches) {
          
    
              $("#btn-search-mob").click(function(e){
                  e.preventDefault();
                if(toggle) {
                    $("#search-mobile").show();
                    $("#btn-search-mob img").attr("src","/arquivos/exit.svg");
                    toggle = false
                } else {
                    toggle = true;
                    $("#search-mobile").hide();
                    $("#btn-search-mob img").attr("src","/arquivos/icon-busca.svg");
    
                }
          
              })}


        //$(".sidenav").append(`<span><a href="/busca?fq=H:137">OFERTAS</a></span>`)
    }, 1200)


    $(".vtexIdUI .modal-header .close").click(function () {
        window.location.href = '/';
    })

    //MUDAR TAMANHO DAS IMAGENS NA BARRA DE BUSCA




    $(".btn-open-menu-xs").click(() => {
        $("body").addClass("menu-ativo");
        $("#menu-mobile").attr('class', 'show-menu');
        $("#menu-mobile").show();

    })

    $("#menu-mobile .close-menu").click(() => {

        $("#menu-mobile").attr('class', 'hide-menu');
        setTimeout(() => { $("#menu-mobile").hide(); }, 480)

        $("body").removeClass("menu-ativo");

    })



     
    $(".dropdown-container").hide();


    $(".dropdown-btn#atendimento").toggle(() => {
        $(".dropdown-container#politicas").hide();
        $(".dropdown-btn#politicas i").attr('class', 'fa fa-angle-down');
        $(".dropdown-btn#atendimento i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#atendimento").slideDown()
    }, () => {
        $(".dropdown-container#atendimento").slideUp()
        $(".dropdown-btn#atendimento i").attr('class', 'fa fa-angle-down');
    })


    $(".dropdown-btn#politicas").toggle(() => {
        $(".dropdown-container#atendimento").hide();
        $(".dropdown-btn#atendimento i").attr('class', 'fa fa-angle-down');
        $(".dropdown-btn#politicas i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#politicas").slideDown()
    }, () => {
        $(".dropdown-container#politicas").slideUp()
        $(".dropdown-btn#politicas i").attr('class', 'fa fa-angle-down');
    })


    $(".deptonav").mouseleave(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })
    $("header").mouseleave(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })
    $(".header-container .header").mouseenter(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })

    





});



setInterval(() => {

    const imgsLength = $(".ui-autocomplete .ui-menu-item").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-25-25/g, '-50-50');
        $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src", imgProduct);
    }


}, 1000)



setInterval(() => {

    const imgsLength = $("#mini-cart-admake .mini-cart-item .imagem").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($("#mini-cart-admake .mini-cart-item .imagem img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-55-55/g, '-90-90');
        $($("#mini-cart-admake .mini-cart-item .imagem img")[i]).attr("src", imgProduct);
    }



    
//colocar icone de sacola nos cards

$(".prateleira .buy-btn-icon .btn-add-buy-button-asynchronous").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="19.461" height="27.559" viewBox="0 0 19.461 27.559">
  <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M9.73034668 0c-2.9317627 0-5.26879883 2.37794495-5.26879883 5.26544952v2.29302216H.76489258C.33996582 7.60092926 0 7.98310089 0 8.40773773v18.30168915c0 .4670868.38244629.84925842.84985352.84925842h17.7611084c.46740722 0 .84985351-.38217163.84985351-.84925842V8.40773773c0-.46710205-.38244629-.84926605-.84985352-.84926605h-3.56921386V5.26544952C15.04174805 2.33547974 12.66223145 0 9.73034668 0zm0 1.6985321c1.99707031 0 3.56921387 1.5711441 3.56921387 3.56691742v2.29302216H6.1611328V5.26544952c0-1.99577331 1.57214356-3.56691742 3.56921387-3.56691742zM4.46142578 9.299469H1.7845459v16.5606842h16.01904297V9.299469h-2.71948242v1.8259201c0 .46710205-.38232422.84926605-.84973145.84926605-.46740723 0-.89233398-.382164-.89233398-.84926605V9.299469H6.20361328v1.8683853c0 .46709443-.42492676.84926606-.89233398.84926606-.46740723 0-.84985352-.42462921-.84985352-.89173126V9.299469z"/>
</svg>

`)
}, 1000)



