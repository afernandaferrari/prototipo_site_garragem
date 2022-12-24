$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000' 
    });

//A validação jQuery está anulando o caroulsel de imagens iniciais -> cópia do código para o wesy

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato'); 
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})