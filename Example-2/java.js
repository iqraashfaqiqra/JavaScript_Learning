const btn=document.querySelector('.submit');
const ul=document.querySelector('ul')
btn.addEventListener('click',(e)=>
{
    e.preventDefault();
    const text=btn.previousElementSibling.value;
    const li=document.createElement('li');
    li.innerHTML=`  <span>${text}</span>
             <div class="btn">
                <button class="cancel" type="button">Cancel</button>
                <button class="remove" type="button">Remove</button>
            </div>`
   ul.append(li);
   btn.previousElementSibling.value="";
   console.log(ul.children)
})
ul.addEventListener("click",(e)=>
{
    console.log(ul.children);
    if(e.target.classList.contains('cancel'))
    {
        console.log('call')
        console.log(e.target.previousElementSibling);
        e.target.parentNode.previousElementSibling.style.textDecoration="line-through";
    }
    else
    {
        console.log("Remove")
        e.target.parentNode.parentNode.remove();
    }
})