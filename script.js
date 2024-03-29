document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".dev", {
        strings: ["Programação", "Desenvolvimento web"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

    const imagens = document.querySelectorAll('.link_social a');

    imagens.forEach(function(imagem) {
        imagem.addEventListener('mouseover', function() {
            this.removeAttribute('title');
        });

        imagem.addEventListener('mouseout', function() {
            this.setAttribute('title', '');
        });
    });
});

function construirLinkWhatsApp(nome, areaEstudo, areaInteresse) {

    var mensagem = "Olá, sou " + nome + ". Estudante dedicado de " + areaEstudo + ", apaixonado por " + areaInteresse + ". Pronto para enfrentar novos desafios e contribuir de forma significativa onde for necessário.";

    var mensagemCodificada = encodeURIComponent(mensagem);

    var whatsappUrl = "https://wa.me/5541997268640/?text=" + mensagemCodificada;

    return whatsappUrl;
}

function definirLinkWhatsApp() {
    var nome = "Bryan Walace";
    var areaEstudo = "Análise e Desenvolvimento de sistemas";
    var areaInteresse = "Programação e Desenvolvimento web";

    var whatsappUrl = construirLinkWhatsApp(nome, areaEstudo, areaInteresse);

    document.getElementById("whatsappLink").setAttribute("href", whatsappUrl);
}

window.onload = definirLinkWhatsApp;