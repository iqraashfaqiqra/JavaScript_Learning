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
// HTMl Same As object in Browser........document
//console.log(document)
// console.dir(document)   show javascript directory.
// .......................
/*Selector 
    1-getElementById
    2-getElementByClassName(HTML Collection)
    3-querySelector
    4-queryselectorAll(NodeList)
*/
// ...............................
/* 
TextContent
innertext
*/
        // const a=document.querySelector('#main-heading');
        // console.log(a.textContent)    //output=Manage your Task Hello
        // console.log(a.innerText) //will not show inner tag in Main Heading   //output=Manage Your Task.
//Change Text Content of h2
         //  a.textContent="Iqra Ashfaq";
        //  a.style.color="red";
        //  a.style.fontSize="10px"
        // console.log(a.style);
// ....................
//Get and Set Attribute.
 /*        
        const ids=document.querySelector(".headline h2")
         console.log(ids.getAttribute('id'))
         ids.setAttribute('id','Heading');
         console.log(ids.getAttribute('id'))
*/
