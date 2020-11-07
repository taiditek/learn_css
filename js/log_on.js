const usr_name = document.querySelector('.usr_name');
const password = document.querySelector('.password');
const ul = document.querySelector('.items');
const myform = document.querySelector(".myform");

myform.addEventListener('submit',btn_click);
function btn_click(e){
    e.preventDefault();
    console.log(usr_name);
    if(usr_name.value==='' || password.value ===''){
        alert('请填写用户名和密码');
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${usr_name.value}.${password.value}`));
        li.className = "item";
        ul.appendChild(li);
        usr_name.value='';
        password.value='';
    }
}

function myFunction(e) {
//    e.preventDefault();
    document.querySelector(".password").style.backgroundColor = "red";
    var password = document.querySelector(".password");
    console.log("-----------");
    console.log(password);
}
// var str = '正确！'
// console.log("hello!");
// console.log(str);
// console.log(ul)

// var x = document.querySelector(".my_button");
// console.log(x);
// console.log(btn);

// x.array.forEach(element => {
//     console.log(element);    
// });