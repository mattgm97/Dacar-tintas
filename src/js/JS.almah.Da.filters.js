

const mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {

    $(".resultado-busca-filtro").append(`
    <div onclick="openNavfiltro()" id="filters-btn"><span style="margin-right: 11px;">Filtros</span><img src="/arquivos/filters-menu.svg"/></div>
    `)

    $( "<img src='/arquivos/grey-x-close.svg' style='float: left;margin-top: -2em;' onclick='closeNavfiltro()'/>" ).insertBefore( "#departament-navegador" );

}

setTimeout(function(){

$(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");

    $(".refino h5").append(`<svg style="width: 26px;
    max-width: 26px;
    float: right;
    margin-top: -9px;" xmlns="http://www.w3.org/2000/svg" width="50.523" height="39.523" viewBox="0 0 50.523 39.523">
    <path fill="none" stroke="#828282" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.76158875 11.76155253L25.7615618 27.76157612l13.00002696-15.9999781"/>
  </svg>
  `);

 // $("#admake-advanced-filter .opcoes").hide();
  
  /*$(".refino h5").toggle(function() {
      let me = $(this).next();
    
          $(me).slideDown();
      
      
  }, function() {
      let me = $(this).next();
      $(me).slideUp();
  })*/




// tirar parenteses de quantidade de filtro
// sombra nos menus ao abrir
// trocar a frase do botao de busca

// link produto card todo
// incendio tem duas imagens

$("fieldset.refino h5").on("click",function(){
    $(this).parent().toggleClass( "active")
})
  



  $("fieldset.refino div label").prepend(`<i class="fa fa-square-o"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <rect x="1" y="1" width="16" height="16" rx="1" fill="white" stroke="#ED1B34" stroke-width="2"/>
  </svg></i>`);

  $("fieldset.refino div label").on("click", function(){
if($("input", this).is(":checked")){
    $("i", this).html(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="16" height="16" rx="1" fill="#ED1B34" stroke="#ED1B34" stroke-width="2"/>
    <path d="M14 6.68044L12.1579 5L8 9.38147L5.84211 7.10311L4 8.78348L8 13L14 6.68044Z" fill="white"/>
    </svg>
    `)
} else {
    $("i", this).html(`
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<rect x="1" y="1" width="16" height="16" rx="1" fill="white" stroke="#ED1B34" stroke-width="2"/>
</svg>
    `)
}
 
 })

 $( "a.ver-filtros" ).siblings("label").children("i").html(`
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<rect x="1" y="1" width="16" height="16" rx="1" fill="white" stroke="#ED1B34" stroke-width="2"/>
</svg>
 `)

}, 1000)

setInterval(() => {
    $(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");
}, 1000);





let subcats = $(".search-single-navigator h4 a").length;

for(let i=0; i < subcats; i++ ){
let oldText = $($(".search-single-navigator h4 a")[i]).text();
$($(".search-single-navigator h4 a")[i]).text(oldText.replace(/\([^()]*\)/g, ''))

}
