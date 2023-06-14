$('.card').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPauser:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        500:{
            items:2,
            nav:false
        },
        1440:{
            items:3,
            nav:false
        }
    }
})

$('.btn').click(function(){
$('.menu-mobile').slideToggle('show')
})
function ins() {
    var email = document.getElementById("email").value;

    // Aqui você pode realizar a validação do usuário e senha
    // Por exemplo, comparando com valores pré-definidos ou fazendo uma requisição para um servidor

    if (email === "joao@unicap.br") {
      alert("Sua inscrição foi concluida com sucesso!");
      // Aqui você pode redirecionar para uma página interna ou executar outras ações necessárias
    } else {
      alert("Ocorreu um erro. Por favor, tente novamente mais tarde.");
    }
  }