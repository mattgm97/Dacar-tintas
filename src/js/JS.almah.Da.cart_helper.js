

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
    	<div class="quantity-pill">
						<button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
					box-shadow: none;"><i class="fa fa-minus"></i></button>
					<input type="number" class="qtd-field" value="1" style="width: 50px;
					margin: 11px;
					padding-left: 11px;
					font-size: 18px !important;
					color: #4F4F4F !important;
    font-family: 'Arial';
    font-weight: bold;" disabled="">
					<button class="btn btn-mais-check" style="background-color: transparent;outline-style: none;
					box-shadow: none;"><i class="fa fa-plus"></i></button>

			</div>

        <span class="product-remover">
									
									
									
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1476 2.64H19.2918C20.1363 2.64 20.8273 3.26526 20.8018 4.00632V4.9558C20.8018 5.72 20.1107 6.34526 19.2661 6.34526H19.0359L17.9354 19.9621C17.8586 21.0968 16.7836 22 15.5296 22H6.03476C4.78073 22 3.73142 21.0968 3.62913 19.9621L2.52861 6.36842H2.29821C1.45376 6.36842 0.762695 5.74316 0.762695 4.97894V4.02948C0.762695 3.26526 1.45376 2.64 2.29821 2.64H7.41676L7.80067 1.11157C7.97986 0.463165 8.61958 0 9.36186 0L12.2282 0.0231628C12.9704 0.0231628 13.6358 0.509476 13.7893 1.1579L14.1476 2.64ZM9.36173 1.13474C9.20808 1.13474 9.05457 1.22737 9.02903 1.36632L8.72187 2.64H12.8934L12.5864 1.38947C12.5352 1.25052 12.4072 1.1579 12.2537 1.1579L9.36173 1.13474ZM19.2917 5.21053C19.4197 5.21053 19.5476 5.1179 19.5476 4.97894V4.02948C19.5476 3.91368 19.4452 3.7979 19.2917 3.7979H2.29821C2.17024 3.7979 2.04227 3.89053 2.04227 4.02948V4.97894C2.04227 5.09474 2.1447 5.21053 2.29821 5.21053H19.2917ZM16.7069 19.8926C16.6556 20.4484 16.1438 20.8653 15.5553 20.8653H6.0603C5.44612 20.8653 4.95992 20.4484 4.9087 19.8926L3.80818 6.36842H17.7817L16.7069 19.8926Z" fill="#ED1C24"/>
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
        <div class="prod-total"><span class="price" style="float: right;font-weight: bolder;color: #4f4f4f!important;">${element.formattedPrice}</span></div>
  
      


      <div class="quantity-pill">
      <button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
    box-shadow: none;"><i class="fa fa-minus"></i></button>
    <input type="number" class="qtd-field" value="${element.quantity}" style="width: 50px;
    margin: 11px;
    padding-left: 11px;
    font-size: 18px !important;
    color: #000 !important;" disabled="">
    <button class="btn btn-mais-check" style="background-color: transparent;outline-style: none;
    box-shadow: none;"><i class="fa fa-plus"></i></button>

</div>

      <span class="product-remover">
      
      
      
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1476 2.64H19.2918C20.1363 2.64 20.8273 3.26526 20.8018 4.00632V4.9558C20.8018 5.72 20.1107 6.34526 19.2661 6.34526H19.0359L17.9354 19.9621C17.8586 21.0968 16.7836 22 15.5296 22H6.03476C4.78073 22 3.73142 21.0968 3.62913 19.9621L2.52861 6.36842H2.29821C1.45376 6.36842 0.762695 5.74316 0.762695 4.97894V4.02948C0.762695 3.26526 1.45376 2.64 2.29821 2.64H7.41676L7.80067 1.11157C7.97986 0.463165 8.61958 0 9.36186 0L12.2282 0.0231628C12.9704 0.0231628 13.6358 0.509476 13.7893 1.1579L14.1476 2.64ZM9.36173 1.13474C9.20808 1.13474 9.05457 1.22737 9.02903 1.36632L8.72187 2.64H12.8934L12.5864 1.38947C12.5352 1.25052 12.4072 1.1579 12.2537 1.1579L9.36173 1.13474ZM19.2917 5.21053C19.4197 5.21053 19.5476 5.1179 19.5476 4.97894V4.02948C19.5476 3.91368 19.4452 3.7979 19.2917 3.7979H2.29821C2.17024 3.7979 2.04227 3.89053 2.04227 4.02948V4.97894C2.04227 5.09474 2.1447 5.21053 2.29821 5.21053H19.2917ZM16.7069 19.8926C16.6556 20.4484 16.1438 20.8653 15.5553 20.8653H6.0603C5.44612 20.8653 4.95992 20.4484 4.9087 19.8926L3.80818 6.36842H17.7817L16.7069 19.8926Z" fill="#ED1C24"/>
      </svg>
  
      
      
      
      
      
      </span>
      </span>
      
  
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

