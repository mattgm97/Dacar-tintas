

   function openNav() {

    const mq = window.matchMedia("(max-width: 600px)");
    $("body").addClass("menu-ativo");
    if (mq.matches) {
     // document.getElementById("mySidenav").style.width = `${document.documentElement.clientWidth}px`;
     document.getElementById("mySidenav").style.right = "0px";
    } else{
      //document.getElementById("mySidenav").style.width = "485px";
      document.getElementById("mySidenav").style.right = "0px";
    }
    }
    

function closeNav() {
  $("body").removeClass("menu-ativo");
    document.getElementById("mySidenav").style.right = "-880px";
}



function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}

setTimeout(()=>{
    $("#mini-cart-admake .mini-cart-item .detalhes").append(`
    <button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
        box-shadow: none;"><i class="fa fa-minus"></i></button>
            <input type = "number" class="qtd-field" value = "1" style = "width: 50px;
            margin: 11px;
            padding-left: 11px;
            font-size: 18px !important;
            color: #000 !important;"/>
            <button class="btn btn-mais-check" style = "background-color: transparent;outline-style: none;
        box-shadow: none;"><i class="fa fa-plus"></i></button>

        <span class="product-remover">
									
									
									
									<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 130.9 134.6" style="enable-background:new 0 0 130.9 134.6;float: right;    width: 24px;
   margin-top: 14px;" xml:space="preserve">
<title>trash, delete, remove</title>
<g style="
fill: #025EB9;
">
	<path d="M52.6,57.4c-2.7,0.2-4.7,2.6-4.5,5.3l2.6,29.7C50.8,95,53,97,55.6,97H56c2.7-0.2,4.7-2.6,4.5-5.4c0,0,0,0,0,0l-2.6-29.7
		C57.7,59.2,55.3,57.2,52.6,57.4z"/>
	<path d="M73,62l-2.6,29.7c-0.2,2.7,1.8,5,4.5,5.2h0.4c2.6,0,4.7-1.9,4.9-4.5l2.6-29.7c0.2-2.7-1.8-5.1-4.5-5.4
		C75.6,57.2,73.2,59.2,73,62L73,62z"/>
	<path d="M119.9,22.8H85.2v-4.9C85.2,9.6,78.6,3,70.4,3h-9.9c-8.2,0-14.8,6.6-14.8,14.8v4.9H11.1c-2.7,0-4.9,2.2-4.9,4.9
		s2.2,4.9,4.9,4.9h5.4l7.7,76.7c1.3,12.7,12,22.3,24.7,22.3h33.4c12.7,0.1,23.5-9.6,24.7-22.3l7.5-76.7h5.4c2.7,0,4.9-2.2,4.9-4.9
		S122.6,22.8,119.9,22.8z M55.6,17.8c0-2.7,2.2-4.9,4.9-4.9h9.9c2.7,0,4.9,2.2,4.9,4.9v4.9H55.6V17.8z M97,108.3
		c-0.8,7.6-7.2,13.4-14.8,13.4H48.7c-7.6,0-14.1-5.7-14.8-13.4l-7.5-75.7h78.1L97,108.3z"/>
</g>
</svg>
									</span>

        <div class="prod-total"><span style="float: left;
        font-weight: 500;
    ">Valor</span><span class="price" style="float: right;font-weight: bolder;"></span></div>
        
    `);

    $(".qtd-field").prop("disabled", true);
    $("#mini-cart-admake .mini-cart-itens").html("")
 vtexjs.checkout.getOrderForm()
.then(function(orderForm) {


  let miniNumber = 0
    for(let i = 0; i < orderForm.items.length; i++) {
        $($(".qtd-field")[i]).val(orderForm.items[i].quantity)
        miniNumber += orderForm.items[i].quantity
    }
    $(".mini-cart-qty-admake").text(`${miniNumber}`)

    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));

  orderForm.items.forEach((element, index) => {
    $("#mini-cart-admake .mini-cart-itens").append(`
							
								
    <div class="mini-cart-item item-${index}">
      <span class="imagem">
  
        <a class="sku-imagem" href="${element.detailUrl}">
          <img height="90" width="90" alt="${element.name}" src="${element.imageUrl}">
        </a> </span>
      <span class="detalhes">
        <p class="nome-produto">
          <a href="${element.detailUrl}">${element.name}</a>
        </p>
        
  
        <button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
      box-shadow: none;"><i class="fa fa-minus"></i></button>
      <input type="number" class="qtd-field" value="${element.quantity}" style="width: 50px;
      margin: 11px;
      padding-left: 11px;
      font-size: 18px !important;
      color: #000 !important;" disabled="">
      <button class="btn btn-mais-check" style="background-color: transparent;outline-style: none;
      box-shadow: none;"><i class="fa fa-plus"></i></button>
      <span class="product-remover">
      
      
      
      <?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 130.9 134.6" style="enable-background:new 0 0 130.9 134.6;float: right;    width: 24px;
  margin-top: 14px;" xml:space="preserve">
  <title>trash, delete, remove</title>
  <g>
  <path d="M52.6,57.4c-2.7,0.2-4.7,2.6-4.5,5.3l2.6,29.7C50.8,95,53,97,55.6,97H56c2.7-0.2,4.7-2.6,4.5-5.4c0,0,0,0,0,0l-2.6-29.7
  C57.7,59.2,55.3,57.2,52.6,57.4z"/>
  <path d="M73,62l-2.6,29.7c-0.2,2.7,1.8,5,4.5,5.2h0.4c2.6,0,4.7-1.9,4.9-4.5l2.6-29.7c0.2-2.7-1.8-5.1-4.5-5.4
  C75.6,57.2,73.2,59.2,73,62L73,62z"/>
  <path d="M119.9,22.8H85.2v-4.9C85.2,9.6,78.6,3,70.4,3h-9.9c-8.2,0-14.8,6.6-14.8,14.8v4.9H11.1c-2.7,0-4.9,2.2-4.9,4.9
  s2.2,4.9,4.9,4.9h5.4l7.7,76.7c1.3,12.7,12,22.3,24.7,22.3h33.4c12.7,0.1,23.5-9.6,24.7-22.3l7.5-76.7h5.4c2.7,0,4.9-2.2,4.9-4.9
  S122.6,22.8,119.9,22.8z M55.6,17.8c0-2.7,2.2-4.9,4.9-4.9h9.9c2.7,0,4.9,2.2,4.9,4.9v4.9H55.6V17.8z M97,108.3
  c-0.8,7.6-7.2,13.4-14.8,13.4H48.7c-7.6,0-14.1-5.7-14.8-13.4l-7.5-75.7h78.1L97,108.3z"/>
  </g>
  </svg>
  
      
      
      
      
      
      </span>
      </span>
      <div class="prod-total"><span class="price" style="float: right;font-weight: bolder;color: #4f4f4f!important;">Valor ${element.formattedPrice}</span></div>
  
    </div>
  `);
  });




$("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));










 //formatReal(orderForm.value)
});


},1500);




$(document).on('click', ".btn-mais-check",  function(event) {
  var rowindex = $(this).closest('.mini-cart-item').index();
  console.log('rowindex', rowindex);
  let me =  $(".qtd-field")[rowindex];
 let value = parseInt($($(".qtd-field")[rowindex]).val())
 console.log(me, value);


     value +=  1;
     console.log(value)
     $($("#mini-cart-admake .mini-cart-item .qtd-valor .qtd")[rowindex]).text( `${value} X`)
 // $(me).val(value)
  $($(".qtd-field")[rowindex]).val(value)

  vtexjs.checkout.getOrderForm()
.then(function(orderForm) {
  var itemIndex = 0;
  var item = orderForm.items[rowindex];
  var updateItem = {
    index: rowindex,
    quantity:  value
  };
  return vtexjs.checkout.updateItems([updateItem], null, false);
})
.done(function(orderForm) {
  //alert('Items atualizados!');
  console.log(orderForm);
  $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
  let miniNumber = 0
			for(let i = 0; i < orderForm.items.length; i++) {
				$($(".qtd-field")[i]).val(orderForm.items[i].quantity)
				miniNumber += orderForm.items[i].quantity
			}
			$(".mini-cart-qty-admake").text(`${miniNumber}`)
});

});

$(document).on('click',".btn-menos-check",  function(event) {
  var rowindex = $(this).closest('.mini-cart-item').index();
  console.log('rowindex', rowindex);
  let me =  $(".qtd-field")[rowindex];
 let value = parseInt($($(".qtd-field")[rowindex]).val())
 console.log(me, value);

 if (value > 1) {
     console.log("entrei")
     value -=  1;
     console.log(value)
     $($("#mini-cart-admake .mini-cart-item .qtd-valor .qtd")[rowindex]).text(`${value} X`)
  
 // $(me).val(value)
  $($(".qtd-field")[rowindex]).val(value)

  vtexjs.checkout.getOrderForm()
.then(function(orderForm) {
  var itemIndex = 0;
  var item = orderForm.items[rowindex];
  var updateItem = {
    index: rowindex,
    quantity:  value
  };
  return vtexjs.checkout.updateItems([updateItem], null, false);
})
.done(function(orderForm) {
  //alert('Items atualizados!');
  console.log(orderForm);
  $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
  let miniNumber = 0
			for(let i = 0; i < orderForm.items.length; i++) {
				$($(".qtd-field")[i]).val(orderForm.items[i].quantity)
				miniNumber += orderForm.items[i].quantity
			}
			$(".mini-cart-qty-admake").text(`${miniNumber}`)
});
}
});


$(document).on('click', ".product-remover", function(event){
  var rowindex = $(this).closest('.mini-cart-item').index();
  let itemsToRemove = [{"index": rowindex,
  "quantity": 0}]
  vtexjs.checkout.removeItems(itemsToRemove).then(res=>{
    console.log("removido");
    $($(".mini-cart-item")[rowindex]).remove();
    $("#mini-cart-admake-total").text("R$ " + formatReal(res.value));
    let miniNumber = 0
    for(let i = 0; i < res.items.length; i++) {
        $($(".qtd-field")[i]).val(res.items[i].quantity)
        miniNumber += res.items[i].quantity
    }
    $(".mini-cart-qty-admake").text(`${miniNumber}`)
  });
})

