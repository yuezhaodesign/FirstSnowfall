document.addEventListener('DOMContentLoaded', function() {
    const pics = document.querySelectorAll('#pic1, #pic2, #pic3, #pic4');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 500); // Adjust the delay as needed
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    pics.forEach(pic => {
        observer.observe(pic);
    });

    const checkbox = document.getElementById('checkbox');
    const redirectUrl = 'https://ifttt.com/applets/wsSemthv-if-it-snows-send-a-confession-email-to-your-crush'; 
    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 3000);
        }
    });
});