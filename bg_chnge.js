const body=document.body;
console.log(body);
const con=document.querySelector('.container');
const text=con.children[0];
const btn=con.children[1];
btn.addEventListener('click',(e)=>
{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    text.textContent=`rgb(${red},${green},${blue})`;
   body.style.backgroundColor=`rgb(${red},${green},${blue})`;
})