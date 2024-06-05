document.addEventListener('DOMContentLoaded', function() {
    const hoverDivs = document.querySelectorAll('.hoverDiv');
    hoverDivs.forEach(div => {
        const hiddenBtn = div.querySelector('.hiddenBtn');
        div.addEventListener('mouseenter', function() {
            hiddenBtn.style.display = 'block';
        });
        div.addEventListener('mouseleave', function() {
            hiddenBtn.style.display = 'none';
        });
    });
});
    

