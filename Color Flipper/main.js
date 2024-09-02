const colors = ["green","red","blue","gray","teal","pink","lightpink"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener('click',function(){


    // random number b/w 0-3 colors[3]

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    


});


function getRandomNumber(color){

    return Math.floor( Math.random() * colors.length);
}