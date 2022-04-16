function param(name) {
	return ($('.buy-button.buy-button-ref').attr('href').split(name + '=')[1] || '').split('&')[0];
}

function insertProductOnCart(item){
	vtexjs.checkout.addToCart([item])
	.done(function (orderForm) {
		//alert('Item adicionado!');
		console.log("adicionando ao cart");
		const position = [orderForm.items.length - 1]
		let latest = orderForm.items[position]
			//UPDATE CART
			let miniNumber = 0
			for(let i = 0; i < orderForm.items.length; i++) {
				$($(".qtd-field")[i]).val(orderForm.items[i].quantity)
				miniNumber += orderForm.items[i].quantity
			}
			$(".mini-cart-qty-admake").text(`${miniNumber}`)

			$("#mini-cart-admake .mini-cart-itens").append(`
			
				
				<div class="mini-cart-item item-${position}">
					<span class="imagem">
			
						<a class="sku-imagem" href="${latest.detailUrl}">
							<img height="90" width="90" alt="${latest.name}" src="${latest.imageUrl}">
						</a> </span>
					<span class="detalhes">
						<p class="nome-produto">
							<a href="${latest.detailUrl}">${latest.name}</a>
						</p>
						
			
						<button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
					box-shadow: none;"><i class="fa fa-minus"></i></button>
					<input type="number" class="qtd-field" value="${latest.quantity}" style="width: 50px;
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
					<div class="prod-total"><span class="price" style="float: right;font-weight: bolder;color: #4f4f4f!important;">Valor ${latest.formattedPrice}</span></div>
			
				</div>
			`);
			$("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
				
			
			openNav();
			setTimeout(()=>{
				closeNav()
			},2500)
			


	});
}

; 

$(window).on("load",function () {

	if ($.fn.ADMAKEadvancedFilter) {
		$(document).ADMAKEadvancedFilter({
			tipoFiltros: {},
		});
	}
	if ($.fn.ADMAKEmenu) {
		$(document).ADMAKEmenu();
	}
	/*$('.col-mini-cart').ADMAKEminiCart({
		miniCartQtd: '.mini-cart-qty-admake',
	});*/

	var $btnComprar = $('.btn-add-buy-button-asynchronous');
	if ($btnComprar.length) {
		$btnComprar.html('Comprar <i class="fa fa-lock"></i>');
	}

	var $btnComprarProduto = $('.buy-button.buy-button-ref');
	if ($btnComprarProduto.length) {

		if ($('#comprar-flutuante').length) {
			var $comprarFlutuante = $('#comprar-flutuante');
			var btnComprarTop = $('.product-info .buy-button-box').offset().top;
			$(window).scroll(function () {
				if ($(window).width() > 768) {
					if ($(this).scrollTop() >= btnComprarTop && !$comprarFlutuante.is(':visible')) {
						$comprarFlutuante.fadeIn(function () {
							var urlImage = ($('#include #image-main').attr('src') != '') ? $('#include #image-main').attr('src') : '/arquivos/sem-foto.gif';
							$('#foto-comprar-flutuante').attr('src', urlImage);
							$('body').css('padding-bottom', $comprarFlutuante.height() + 30);
						});
					} else if ($(this).scrollTop() < btnComprarTop && $comprarFlutuante.is(':visible')) {
						$comprarFlutuante.fadeOut(function () {
							$('body').css('padding-bottom', 0);
						});
					}
				}
			});
		}

		var imageConfirm = ( $('#include #image-main').attr('src') != '' ) ? $('#include #image-main').attr('src') : '/arquivos/sem-foto.gif';
							$('#foto-confirmation').attr('src', imageConfirm);


		$btnComprarProduto.html('Comprar <i class="fa fa-lock"></i>');

		$btnComprarProduto.click(function (e) {
			e.preventDefault();

			var $this = $(this);
			var url = $this.attr('href');
			if (url.indexOf('qty=1') > 0) {
				$this.attr('href', url.replace('qty=1', 'qty=' + parseInt($('.buy-button-box .box-qtd .qtd').val())));
			}

			let item = {
				id: parseInt(param("sku")),
				quantity: parseInt($('.buy-button-box .box-qtd .qtd').val()),
				seller: param("seller")
			}
			console.log(item)
			if (!item.id) {
				alert("Selecione um atributo.")
			} else {
				insertProductOnCart(item);
			}


		});

		


		var $recebeQtyForm = $btnComprarProduto.parents('.buy-button-box');
		if ($recebeQtyForm.length) {
			$recebeQtyForm.prepend(
				'<div class="pull-left box-qtd">' +
				'	<div class="bts">' +
				'		<button class="btn btn-menos"><img src="/arquivos/mmenos.svg"/ style="margin-top: -2px;"></i></button>' +
				' 	</div>' +
				'	<input type="text" class="qtd" value="1" />' +
				'	<div class="bts">' +
				'		<button class="btn btn-mais"><img src="/arquivos/mmais.svg"/></i></button>' +
				' 	</div>' +
				'</div>'
			);
			$(document).on('keypress', '.buy-button-box .box-qtd .qtd', function (e) {
				var tecla = (window.event) ? event.keyCode : e.which;
				if ((tecla > 47 && tecla < 58)) {
					return true;
				} else {
					if (tecla == 8 || tecla == 0) {
						return true;
					} else {
						return false;
					}
				}
			});
			$(document).on('keyup', '.buy-button-box .box-qtd .qtd', function (e) {
				$('.buy-button-box .box-qtd .qtd').val($(this).val());
			});
			$(document).on('blur', '.buy-button-box .box-qtd .qtd', function (e) {
				var $this = $(this);
				if ($this.val() === '' || parseInt($this.val()) < 1) {
					$('.buy-button-box .box-qtd .qtd').val(1);
				} else {
					$('.buy-button-box .box-qtd .qtd').val($this.val());
				}
			});
			$(document).on('click', '.buy-button-box .box-qtd .btn', function () {
				var $this = $(this);
				var $qtd = $('.buy-button-box .box-qtd .qtd');
				var valor = parseInt($qtd.val());
				if ($this.hasClass('btn-mais')) {
					$qtd.val(valor + 1);
				} else if ($this.hasClass('btn-menos')) {
					if (valor > 1) {
						$qtd.val(valor - 1);
					}
				}
			});
		}
	}



});