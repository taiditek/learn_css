const usr_name = document.querySelector('.box_title');
const password = document.querySelector('.password');
const ul = document.querySelector('.items');
const btn = document.querySelector('.my_button')

btn.addEventListener('onclick',btn_click);
function btn_click(e){
    e.preventDefault();


if(usr_name.value==='' || password.value ===''){
    alert('请填写用户名和密码');
}else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${usr_name.value}.${password.val}`));
    ul.appendChild(li);
    usr_name.value='';
    password.value='';
}
}