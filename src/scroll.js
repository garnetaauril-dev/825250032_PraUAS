document.addEventListener('DOMContentLoaded', function() {
    const tombolAtas = document.getElementById('tombolAtas');
    const tombolBawah = document.getElementById('tombolBawah');

    if (tombolAtas) {
        tombolAtas.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }

});