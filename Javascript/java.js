//How js work
/*
sb sy phli line execute hony sy phly code compile hota hy 
1->compile  
        //compile 2 reason ki waja sy hota hy 
            1->Early Error Checking 
            2->Determing early variable scope checking (D.A.S.V)
    Three compilation phase
        1->Tokening/Lexing(hmra code choty choty part mayn divide hojata hy).
        2->parsing(part koh use kr kay Abstract syntax tree bnaty(A.S.T)).
        3->code Generation(A.S.T sy asa code generate krty jo agy Execute ho sky).
2->Code Execuation Phase.
    In J.s code execute inside execution context.
    ->create global execution context 
    . creatin phase
    .code execution phase.
*/
// .....................................
/*Selector 
1-getElementById
2-getElementByClassName(HTML Collection)
3-querySelector
4-queryselectorAll(NodeList)
*/
// const a=document.getElementById("main-heading")
// console.log(a);
// const b=document.querySelector('header')
// console.log(b.getAttribute('class'));
const lis=document.querySelectorAll('.nav-item')
console.log(lis);
console.log(lis.dir)
for(let i=0; i<lis.length;i++)
{
    lis[i].style.background="red";
    //  lis[i].children.style.color="black"
}
// const li=document.getElementsByClassName('nav-item')
// console.log(li)