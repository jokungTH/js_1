
document.getElementById("calculator+").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum1 = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum1.toFixed(2);
});
document.getElementById("calculator-").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum2 = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลลบ :" +sum2;
});
document.getElementById("calculator*").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum3 = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลคูณ :" +sum3;
});
document.getElementById("calculator/").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum4 = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลหาร :" +sum4;
});


// function myalert(){
//     alert("Hello Prayut")
// }

const img = document.createElement("img")

img.src = "img/j.jpg";
img.style.width="200px";

document.getElementById("mydiv").appendChild(img);