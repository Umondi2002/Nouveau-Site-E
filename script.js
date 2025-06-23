// Scripts pour le panier, les interactions utilisateur, etc.
document.addEventListener('DOMContentLoaded', function() {
    // Système de notation
    const stars = document.querySelectorAll('.rating i');
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
    }
    
    // Quantité dans le panier
    const quantityInputs = document.querySelectorAll('.input-group input');
    quantityInputs.forEach(input => {
        const minusBtn = input.previousElementSibling;
        const plusBtn = input.nextElementSibling;
        
        minusBtn.addEventListener('click', function() {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });
    
    // Galerie de produits
    const thumbnails = document.querySelectorAll('.img-thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const mainImg = this.closest('.row').querySelector('.img-fluid');
            mainImg.src = this.src;
        });
    });
});