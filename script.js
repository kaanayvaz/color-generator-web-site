function myFunction() {

    function getRandomNumber(max) {
        return Math.random()*max;
    }

    r = getRandomNumber(256)
    g = getRandomNumber(256)
    b = getRandomNumber(256)

    var myElement = document.getElementById("color-change-area");
    myElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}