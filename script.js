function clickMenu() {
    var itens = document.getElementById('itens');
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

function fecharModal() {
    document.getElementById('produtoModal').style.display = 'none';
}
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // tempo em milissegundos (3 segundos)
            disableOnInteraction: false,
        },
    });


document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("produtoModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".produto").forEach(function(produto) {
        produto.addEventListener("click", function() {
            var title = produto.querySelector("h3").textContent;
            var description = produto.getAttribute("data-descricao");

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

// Timer de contagem regressiva
const countdown = () => {
    const countDate = new Date("July 15, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay;
    document.getElementById('ho').innerText = textHour;
    document.getElementById('min').innerText = textMinute;
    document.getElementById('seg').innerText = textSecond;
};

