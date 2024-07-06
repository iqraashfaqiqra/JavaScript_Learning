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
// ...................
/*
iterating Loop
1-loop
2- for-of
3-forEach(use with nodelist only)(can't used with HTML Collection)
    if we want to apply foreach on HTML COllection
                    let ary=document.getElementsByClassName('nav-item')
                    console.log(ary);
                    ary=Array.from(ary)
                    ary.forEach(nav=>console.log(nav)
            )
*/
// .......................
/* innerHTML
        const a=document.querySelector('h2');
        a.innerHTML="<h1>Iqra Ashfaq</h2>"
*/
// ............................
/*
1-ChildNode----> will show new line also [head,text,body], head=> [text,title,text], body=>[text,h1,text,p,text]
2-children-----> will show only element [head,body],head=>[title],body=>[h1,p]
3-parentElement,parentNode---->same parent 
4-NextSibling---->will show text node also
5-nextElementSibling------>not show text node.
*/
            // const rootnode=document.getRootNode();
            // console.log(rootnode.children)   //output:HTML Collection
            // console.log(rootnode.childNodes) //output:Nodelist
            // const htmlElementNode=rootnode.childNodes[1];
            // console.log(htmlElementNode.childNodes)  //[head,text,body]
            // // const headElementNode=htmlElementNode.childNodes[0] //0=head,1=text,2=body
            // // console.log(headElementNode);
            // const bodyElementNode=htmlElementNode.childNodes[2] //0=head,1=text,2=body
            // console.log(bodyElementNode.childNodes);
            // const navs=document.querySelector('.nav-items').childNodes[1];
            // console.log(navs.nextElementSibling)
// .............................. 
// ClassList(add,remove,containe,toggle)
            // const todo=document.querySelector('section.section-todo')
            // console.log(todo.classList); 
            // todo.classList.add('bg-dark');
            // console.log(todo.classList)
            // todo.classList.remove('bg-dark');
            // console.log(todo);
            // todo.classList.contains("container")  //answer true/false.
            // todo.classList.toggle('bg-dark')   //if classlist contain it will remove ..if classlist doesn't exist it will add class.
// .............................. 
// document.createElement()
// append
// prepend 
// remove
            //   const todo=document.querySelector(".todo-list")
            //   const newli=document.createElement('li')
            //   newli.innerHTML="<span class=\"text\">Iqra Ashfaq</span> <div class=\"todo-buttons\"> <button class=\"todo-btn done\">Done</button><button class=\"todo-btn remove\">Remove</button>"
            //   todo.append(newli);
            //   console.log(todo)
            //   const li=todo.children[0];
            //   li.remove()
// ..............................................
 // Before  ,after
            // jis Element koh access kiya us sy phly add krna to Before, agr bd mayn tp after.
            // In append , Data add hota tha us element kay andar jis koh access kia ho GainNode.
                        // const headline=document.querySelector('.headline')
                        // console.log(headline)
                        // const h1=document.createElement("h1")
                        // h1.textContent="Iqra Ashfaq";
                        // headline.after(h1);
                        // console.log(headline)
// ....................... 
// Some Old method 
//insertBefore,replaceChild,removeChild
                //  const ul=document.querySelector('.todo-list');
                //  const li=document.createElement("li");
                //  li.textContent="Iqra Ashfaq";
                //  const li_target=ul.children[0];
                // //  ul.insertBefore(li,li_target)
                // //  ul.replaceChild(li,li_target) 
                // // ul.removeChild(li_target)
// ........................ 
// Static List Vs Live List
    // 1-querySelectorAll---->static List
    // 2-getElementByselct--->live list 
            // const lis=document.querySelectorAll('.todo-list li')
            // const ul=document.querySelector('.todo-list');
            // const newli=document.createElement("li");
            // newli.textContent="item-6";
            // ul.append(newli);
            // console.log(lis)     //will show 5 list newli not add in lis.
        // ..............
            //   const ul=document.querySelector('.todo-list');
            //   const lis=ul.getElementsByTagName('li')
            //// console.log(lis);
            //   const newli=document.createElement("li");
            //   newli.textContent="item-6";
            //   ul.append(newli);
            //   console.log(lis)    //Will add newli
// ........................... 
// How to Get dimension of Element
//width,height,left ,right
                    // const header=document.querySelector('header');
                    // const info=header.getBoundingClientRect();
                    // const height=header.getBoundingClientRect().height;
                    // console.log(height);
// .................. 
// Event 
