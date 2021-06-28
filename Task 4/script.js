var count = 0;
var btn1 = document.getElementById('btn1');
var disp = document.getElementById('display');

btn1.onclick = function() {
    count--;
   
    disp.innerHTML = count;
     if (count <0){
disp.style.color = 'red';
     }
     else{
        disp.style.color = 'green';
    }
};
var count = 0;
var btn2 = document.getElementById('btn2');
var disp = document.getElementById('display');

btn2.onclick = function() {
    count++;
   
    disp.innerHTML = count;
     if (count >0){
         disp.style.color = 'green';
     }
     else{
         disp.style.color = 'red';
     }
    };

var count = 0;
var btn3 = document.getElementById('btn3');
var disp = document.getElementById('display');

btn3.onclick = function() {
    count;
    disp.innerHTML = '0'
    if (count =0){
        disp.style.color = 'black';
    }
    else{
        disp.style.color = 'black';
    }
}