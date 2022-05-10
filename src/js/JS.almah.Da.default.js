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

						<div class="prod-total" style="width: 78px;"><span class="price" style="float: left;font-weight: bolder;color: #4f4f4f!important;">${latest.formattedPrice}</span></div>
						
			<div class="quantity-pill">
						<button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
					box-shadow: none;"><i class="fa fa-minus"></i></button>
					<input type="number" class="qtd-field" value="${latest.quantity}" style="width: 40px;
					background-color: #F2EEEA;
					border: none !important;
					text-align: center;
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
					</span>
					
			
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
				'		<button class="btn btn-menos"><img src="/arquivos/minus.svg"/ style="margin-top: -2px;"></i></button>' +
				' 	</div>' +
				'	<input type="text" class="qtd" value="1" />' +
				'	<div class="bts">' +
				'		<button class="btn btn-mais"><img src="/arquivos/plus.svg"/></i></button>' +
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