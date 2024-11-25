document.addEventListener('DOMContentLoaded', function() {

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