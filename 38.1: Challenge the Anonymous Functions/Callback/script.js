document.getElementById("start-butn").addEventListener("click", function(){
    console.log("test");
   
    document.getElementById("start-butn").style.backgroundColor = generateRandomRgb();

    setInterval(function(){
        document.getElementById("color-random").style.backgroundColor = generateRandomRgb();
    }, 2000);
});

function generateRandomNumber(){
    return Math.random() * 255;
}

function generateRandomRgb(){
    var randomR = generateRandomNumber();
    var randomG = generateRandomNumber();
    var randomB = generateRandomNumber();

    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}
