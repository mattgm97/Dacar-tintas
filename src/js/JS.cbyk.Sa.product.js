
$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");


accentsTidy = function(s){
    var r=s.toLowerCase();
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    return r;
};


function createinstallments() {
    let price = skuJson.skus[0].bestPriceFormated;
    price = price.replace(/,/g, '.').replace(/[\sR$]+/g, '');
    price = Number(price);
    let installments = skuJson.skus[0].installments;

    for (let i = installments; i > 0; i--) {
        let installment = (price / i).toFixed(2);
        //console.log(installment)

        $(".installmentslist ul").append(`
        <li>${i}x de R$ ${installment}</li>
        `)
    }


}




/*  let dados = {
      "items":[
          {
              id: `${skuJson.skus[0].sku}`,
              quantity: 1,
              seller: "1"
          }
      ],
      "country": "BRA"
      
  }

  fetch("/api/checkout/pub/orderforms/simulation",{
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
  })
  .then(response =>{return response.json()})
  .then(data =>{
      console.log(data)
  })
*/

$(".parcelamentoProd").click(function () {

    $(".installmentslist").toggle();
})


setTimeout(() => {

    if (skuJson.name.includes("Cesta")) {
        $(".cesta-modal").fadeIn();
        let conteudo = $(".value-field.itens").text();
        let conteudoArray = conteudo.split(", ");

        conteudoArray.forEach(item => {
            console.log(item);
            let itemImage = item
            itemImage.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            itemImage = itemImage.toLowerCase();
            itemImage = itemImage.replace(/ /g,'');
            itemImage = accentsTidy(itemImage);
            $(".thelist ul").append(`<li><img src="/arquivos/new-icon-${itemImage}.svg" alt="${item}" title="${item}"/><span style="display:block">${item}</span></li>`)
        })

    }

    if($(".bread-crumb").html().includes("Hortifruti")){
        let amount = $(".value-field.Contem").text()
        $(".skuBestPrice").append(`<span style="font-size: 25px!important;margin-left: 11px;"> (${amount})</span>`)

    }


    $('.product-details .price-box .descricao-preco .valor-por').html( $('.product-details .price-box .descricao-preco .valor-por').html().replace('Por:', '') ); 
    $(".product-details .price-box .descricao-preco .valor-por").css({"visibility": "visible"})

    const mq = window.matchMedia("(max-width: 800px)");

    if (mq.matches) {

        let aa = $(".product-image .apresentacao .thumbs").contents()

        const imgsLength = $(".product-image .apresentacao .thumbs a img").length;

        for (let i = 0; i < imgsLength; i++) {
            let imgProduct = $($(".product-image .apresentacao .thumbs a img")[i]).attr("src");
            imgProduct = imgProduct.replace(/-55-55/g, '-500-500');
            $($(".product-image .apresentacao .thumbs a img")[i]).attr("src", imgProduct);
        }


        $(".product-image .apresentacao .thumbs").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


        $(".product-info .seletor-sku .select .sku-selector").click(() => {
            setTimeout(() => { $(".product-image .apresentacao .thumbs").html(aa) }, 800)


            setTimeout(() => {
                let aab = $(".product-image .apresentacao .thumbs").html();

                $("#show").html(aab);
                $(".product-image .apresentacao #show").slick({

                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true

                });

            }, 1000)



        })


        $(".product-info .shipping-box label").click(() => {
            $(".product-info .shipping-box label .fitext").css({ "display": "block" });
            $(".product-info .shipping-box .freight-btn").css({ "display": "inline-block" });
        })


    }


    createinstallments();

    const imgsLength = $("#divCompreJunto td a img").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($("#divCompreJunto td a img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-90-90/g, '-182-182');
        $($("#divCompreJunto td a img")[i]).attr("src", imgProduct);
    }


}, 1000)





const mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {

    $("#btn-description").click(function () {
        document.getElementById("description").style.right = "0px";

    })

    $("#description .prod-infos").click(function () {
        document.getElementById("description").style.right = "-880px";

    })

    $("#btn-specification").click(function () {
        document.getElementById("specification").style.right = "0px";

    })

    $("#specification .prod-infos").click(function () {
        document.getElementById("specification").style.right = "-880px";

    })



} else {
    $("#description").show();
    $("#btn-description").click(() => {
        $("#description").show();
        $("#btn-description").addClass("active-tab")
        $("#btn-specification").removeClass("active-tab")
        $("#specification").hide();

    })
    $("#btn-specification").click(() => {
        $("#specification").show();
        $("#btn-specification").addClass("active-tab")
        $("#btn-description").removeClass("active-tab")
        $("#description").hide();

    })
}



setInterval(() => {
    $("#btnFreteSimulacao").val("CALCULAR");
    for (let i = 0; i < $(".product-details .seletor-sku .topic").length; i++) {
        let myName = $($(".product-details .seletor-sku .topic .specification")[i]).text();
        $($(".product-details .seletor-sku .topic .select select option:first-of-type")[i]).text(myName)
    }

}, 1000);













/*
$(".product-description-box #description").fadeIn()
$(".desk-info-nav a").click((e) => {
    $(".desk-info-nav a").css({ "color": "#BEBEBE" });
    $(e.target).css({ "color": "#000" });
    if ($(e.target).attr("id") == "first") {
        $(".product-description-box #specification").fadeOut()
        $(".product-description-box #description").fadeIn()
    } else if ($(e.target).attr("id") == "last") {
        $(".product-description-box #description").fadeOut()
        $(".product-description-box #specification").fadeIn()
    }

})


$(".dropdown-container").hide();
$(".dropdown-btn#descricao").toggle(() => {

    $(".dropdown-btn#descricao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#descricao").slideDown()
}, () => {
    $(".dropdown-container#descricao").slideUp()
    $(".dropdown-btn#descricao i").attr('class', 'fa fa-plus');
})


$(".dropdown-btn#especificacao").toggle(() => {
    $(".dropdown-btn#especificacao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#especificacao").slideDown()
}, () => {
    $(".dropdown-container#especificacao").slideUp()
    $(".dropdown-btn#especificacao i").attr('class', 'fa fa-plus');
})

$(".dropdown-btn#avaliacao").toggle(() => {
    $(".dropdown-btn#avaliacao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#avaliacao").slideDown()
}, () => {
    $(".dropdown-container#avaliacao").slideUp()
    $(".dropdown-btn#avaliacao i").attr('class', 'fa fa-plus');
})

*/





