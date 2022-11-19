const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myaudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyanswer1 = Math.floor(Math.random() * 13);
    var dummyanswer2 = Math.floor(Math.random() * 13);
    var allanswers = [];
    var switchanswers = [];

    answer = num1 - num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allanswers = [answer,dummyanswer1,dummyanswer2];

    for(i = allanswers.length;i--;){
        switchanswers.push(allanswers.splice(Math.floor(Math.random() * (i+1)),1)[0]);
    }

    option1.innerHTML = switchanswers[0];
    option2.innerHTML = switchanswers[1];
    option3.innerHTML = switchanswers[2];
}

option1.addEventListener('click', function(){
    if(option1.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener('click', function(){
    if(option2.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option3.addEventListener('click', function(){
    if(option3.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

generate_equation();