export function vanishingSpell() {
    console.log('hi');
    var startDate = new Date();
    var endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);
    var totalDuration = endDate - startDate;
    var opacityDecrement = 1 / totalDuration; 
    function updateOpacity() {
        var currentOpacity = 1 - (new Date() - startDate) / totalDuration;
        currentOpacity = Math.max(0, currentOpacity);
        var allElements = document.querySelectorAll("*");
        allElements.forEach(function(element) {
            element.style.opacity = currentOpacity;
        });
        localStorage.setItem("vanishingOpacity", currentOpacity);
        var remainingDays = Math.ceil((endDate - new Date()) / (24 * 60 * 60 * 1000));
        console.log(remainingDays + " days until self-destruct💥");

        if (currentOpacity > 0) {
            setTimeout(updateOpacity, 24 * 60 * 60 * 1000);
        }
    }

    var savedOpacity = localStorage.getItem("vanishingOpacity");
    if (savedOpacity !== null) {
        updateOpacity();
    } else {
        updateOpacity();
    }
}
