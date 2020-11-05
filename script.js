const str1 = "天气预报:";
const str2 = "最高 气温";
const num1 = 25;
const num2 = 10;

var arr= [1,2,5,6,"abc",true,99,78];
arr.push("OOO");
arr.pop();
arr.unshift("xyz");
document.write(typeof(arr));
const person = {
    name:"nick",
    age:28,
    hobby:["dangce","swimming","fly"],
    family:{
        persons:3,
        color:"red",
    }
}

document.write("开始<br>");
document.write(arr.indexOf("abc"));
document.write(arr);
document.write("<br>");
document.write(arr[2]);
document.write("${str1}");
document.write("<br>");
document.write(person.hobby[0]);
document.write("<br>");
document.write(person.family.persons);
for(let i=0;i<100;i++){
    document.write(i);
    //document.write("<br>");
}
document.write(`测试一下${str1}这个函数`);
i=0;

// while(i<10){
//     i++;
//     document.write(i);
// }
document.write("<br>");
for(a in arr){
    document.write(`这个是 ${arr[a]}`);
}
arr.forEach(function(x,y,z){
    document.write(`[${x}]${y}<${z}>`);
});