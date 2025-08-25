function showoperation(num)
{
    let prev = document.getElementById("opeparent").innerHTML;
    let newnum = Number(prev);
    if(newnum == 0)
    {
        document.getElementById("opeparent").innerHTML = num;
    }
    else{
        document.getElementById("opeparent").innerHTML = prev+num;
    }
}
function btn0clicked()
{
    let num = '0';
    showoperation(num);
    console.log(num);
}
function btn1clicked()
{
    let num = 1;
    showoperation(num);
    console.log(num);
}
function btn2clicked()
{
    let num = 2;
    showoperation(num);
    console.log(num);
}
function btn3clicked()
{
    let num = 3;
    showoperation(num);
    console.log(num);
}
function btn4clicked()
{   
    let num = 4;
    showoperation(num);
    console.log(num);
}
function btn5clicked()
{
    let num = 5;
    showoperation(num);
    console.log(num);
}
function btn6clicked()
{
    let num = 6;
    showoperation(num);
    console.log(num);
}
function btn7clicked()
{
    let num = 7;
    showoperation(num);
    console.log(num);
}
function btn8clicked()
{
    let num = 8;
    showoperation(num);
    console.log(num);
}
function btn9clicked()
{
    let num = 9;
    showoperation(num);
    console.log(num);
}
function ACbtnclicked()
{
    document.getElementById("opeparent").innerHTML = "0";
    document.getElementById("resultscreenparent").innerHTML = "0000";
}
function remove(prev)
{
    let newStr = prev.substring(0, prev.length - 1); 
    
    document.getElementById("opeparent").innerHTML = newStr;
}
function backbtnclicked()
{
    let prev = document.getElementById("opeparent").innerHTML;
    remove(prev);
}
function devidebtnclicked()
{
    let num = '/';
    showoperation(num);
}
function multibtnclicked()
{
    let num = '*';
    showoperation(num);
}
function percentbtnclicked()
{
    let num = '%';
    showoperation(num);
}
function minusbtnclicked()
{
    let num = '-';
    showoperation(num);
}
function plusbtnclicked()
{
    let num = '+';
    showoperation(num);
}
function dotbtnclicked()
{
    let num = '.';
    showoperation(num);
}
function equalbtnclicked(){
    let prev = document.getElementById("opeparent").innerHTML;
    console.log(prev);
    let ans = eval(prev);
    document.getElementById("resultscreenparent").innerHTML = ans;
}
document.addEventListener("DOMContentLoaded", function() {
    let now = new Date();
    console.log(now.getDate());
    console.log(now.getDay());
    console.log(now.getFullYear());
    console.log(now.getMonth());
    console.log(now.getTime());
    document.getElementById("time").innerHTML = now.toLocaleString();
    document.getElementById("date").innerHTML = now.getDate();
    let arr = ["January" , "February", "March" , "April" , "May" , "June" ,"July" ,"August" , "September" , "October" , "November" , "December"];
    if(now.getMonth() == 0)
    {
        document.getElementById("month").innerHTML = arr[0];
    }
    else if(now.getMonth() ==1)
    {
        document.getElementById("month").innerHTML = arr[1];
    }
    else if(now.getMonth() ==2)
    {
        document.getElementById("month").innerHTML = arr[2];
    }
    else if(now.getMonth() ==3)
    {
        document.getElementById("month").innerHTML = arr[3];
    }
    else if(now.getMonth() ==4)
    {
        document.getElementById("month").innerHTML = arr[4];
    }
    else if(now.getMonth() ==5)
    {
        document.getElementById("month").innerHTML = arr[5];
    }
    else if(now.getMonth() ==6)
    {
        document.getElementById("month").innerHTML = arr[6];
    }
    else if(now.getMonth() ==7)
    {
        document.getElementById("month").innerHTML = arr[7];
    }
    else if(now.getMonth() ==8)
    {
        document.getElementById("month").innerHTML = arr[8];
    }
    else if(now.getMonth() ==9)
    {
        document.getElementById("month").innerHTML = arr[9];
    }
    else if(now.getMonth() ==10)
    {
        document.getElementById("month").innerHTML = arr[10];
    }
    else if(now.getMonth() ==11)
    {
        document.getElementById("month").innerHTML = arr[11];
    }
    let arr1 = ["Sunday" , "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" ,"Saturday"];
    if(now.getDay() == 0)
    {
        document.getElementById("day").innerHTML = arr1[0];
    }
    else if(now.getDay() ==1)
    {
        document.getElementById("day").innerHTML = arr1[1];
    }
    else if(now.getDay() ==2)
    {
        document.getElementById("day").innerHTML = arr1[2];
    }
    else if(now.getDay() ==3)
    {
        document.getElementById("day").innerHTML = arr1[3];
    }
    else if(now.getDay() ==4)
    {
        document.getElementById("day").innerHTML = arr1[4];
    }
    else if(now.getDay() ==5)
    {
        document.getElementById("day").innerHTML = arr1[5];
    }
    else if(now.getDay() ==6)
    {
        document.getElementById("day").innerHTML = arr1[6];
    }
});