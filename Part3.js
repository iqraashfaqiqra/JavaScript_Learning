// *************Set Time Out**********
//set Time out run krta hy WebApI. 
//WebAPI 1 second kay bad callback function return kry ga.
//1 sec kay bad webApi Return kry ga call back func lkn wo callback queue mayn lga rhy ga 
//Event loop check kry ga kia baki event run ho gy jo GEC myn hy (callstack)
//phr Call back function call back queue sy nikal kr callstack myn jaya ga.Chachy time 0 hi ku na ho.

        // console.log("script Start");
        // function hello()
        // {
        //     console.log("Set Time Out Call");
        // }
        //     setTimeout(hello,1000);
        //     console.log("script End");
/*    
output=  Script Start 
         Script End
         Set Time Out.
*/
// ....................................... 
            // console.log("script Start");
            // setTimeout(()=>{
            //     console.log("Set time Out");
            // },0);
            // for(let i=0;i<20;i++)
            // {
            //     console.log(i);
            // }
            // console.log("script ENd");
//..........Clear Time Out.................
                // console.log("script Start");
                // const id=setTimeout(()=>{
                //     console.log("Set time Out");
                // },0);
                // for(let i=0;i<20;i++)
                // {
                //     console.log(i);
                // }
                // console.log("set Time iD",id);
                // clearTimeout(id);
                // console.log("script ENd");
                
//**********Set Interval********************** */
//same above settimeout but set interval (bar bar run hota).
//Example in Part3_Example.html;

// .....................................................

// **************Call Back*********************
                /*
                function number(a,b,callback,multi)
                {
                        console.log(a,b)
                        callback(a,b);
                        multi(a,b);
                }
        number(1,2,(a,b)=>console.log(a+b),(a,b)=>console.log(a*b));

*/
//Call Back hell/Pyramid of Dom
// :: using CallbackHell.html
// const h1=document.querySelector(".headeing-1");
// const h2=document.querySelector('.headeing-2');
// const h3=document.querySelector('.headeing-3');
// const h4=document.querySelector('.headeing-4');
// const h5=document.querySelector('.headeing-5');
       /*
        setTimeout(()=>
                {
                 h1.style.color="red";       
                },1000)
          setTimeout(()=>
                {
                h2.style.color="green";       
                },2000)
        setTimeout(()=>
                {
                        h3.style.color="blue";       
                },3000)
        setTimeout(()=>
                {
                        h3.style.color="yellow";       
                },3000)
        setTimeout(()=>
                {
                        h4.style.color="pink";       
                },4000)
        setTimeout(()=>
                {
                        h5.style.color="red";       
                },5000)
        /*
//****************Call Back Hell*********** */
/*
    
        setTimeout(()=>
                {
                h1.style.color="red";       
                setTimeout(()=>
                {
                h2.style.color="green";       
                        setTimeout(()=>
                        {
                                h3.style.color="blue";       
                                        setTimeout(()=>
                                {
                                h3.style.color="yellow";       
                                        setTimeout(()=>
                                        {
                                        h4.style.color="pink";       
                                                setTimeout(()=>
                                                {
                                                h5.style.color="red";       
                                                },5000)
                                        },1000)
                                },1000)
                        },1000)
                },1000)
                },1000)
        */
        //......Above Example using Function
        /*
        function Color(element,clr,time,onsuccess,onfailure)
        {
                setTimeout(()=>
                        {
                        if(element)
                        {
                        element.style.color=clr;
                        if(onsuccess)
                                {
                                        onsuccess();
                                }
                        }
                        else
                        {
                                if(onfailure)
                                        {
                                                onfailure();
                                        }
                        }
                        },time)
                
                
        }
        Color(h1,"red",1000,()=>{
                Color(h2,"red",1000,()=>{
                        Color(h3,"red",1000,()=>{
                                Color(h4,"red",1000,()=>{
                                        Color(h5,"red",1000,()=>{},()=>{console.log("doesn't Exist")});
                                },()=>{console.log("doesn't Exist")});
                        },()=>{console.log("doesn't Exist")});
                },()=>{console.log("doesn't Exist")});
        },()=>{console.log("doesn't Exist")});
*/
                // ...........................................

//**************Promises******************* */
/*
const bucket=["vegetable","rice"];
const promise=new Promise((resolve,reject)=>{
        if(bucket.includes("vegetable"),bucket.includes('salt'))
        {
                resolve("Fried Rice");
        }
        else
        {
                reject("You Don't Have all ingredients");
        }
})
//produce
//consume

                // promise.then((myfried)=>
                // {
                //         console.log("You",myfried,"Are ready");
                // },(error)=>
                // {
                //         console.log(error);
                // })


//instead of using two callback in then use on call in then where then end use ,catch()
        promise.then((myfried)=>
                {
                        console.log("You",myfried,"Are ready");
                }).catch((error)=>{
                        console.log(error)
                })
*/
// ................................................... 
// function Returning promise
/*
                function friedrice()
                { 
                        const bucket=["salt",'vegetables','onion'];
                        return new Promise((resolve,reject)=>
                        {
                                if(bucket.includes('vegetables'),bucket.includes('salt'))
                                {
                                        resolve({value:"Fried Rice"});
                                }
                                else
                                {
                                        reject("Don't have sufficient Ingredients");
                                }
                        })
                }
                friedrice().then((obj)=>
                {
                        console.log(obj);
                }).catch((error)=>
                {
                        console.log(error);
                })
*/

// ......................................
// I want to resolve/reject promise after 2 second

/*
                        function friedrice()
                        {
                                const bucket=['vegetable','salt']
                                return new Promise((resolve,reject)=>
                                {
                                        const value=true;
                                        setTimeout(()=>{
                                                if(value)
                                                        {
                                                                resolve();
                                                        }
                                                        else
                                                        {
                                                                reject();
                                                        }
                                        },2000)
                                
                                })
                        }
                        friedrice().then(()=>console.log("Accept"))
                                .catch(()=>console.log("reject"));
*/
// ...........................................................
// Problem Resolve 
/*
// 1st method 
        const resolvefunc=Promise.resolve(5);
        resolvefunc.then(val=>console.log(val));
//2nd method
 Promise.resolve(5).then(val=>console.log(val));
 */

// .............................................................
//Promise Chaining
//.then() function always return promise
/*
                function friedrice()
                {
                        return new Promise((resolve,reject)=>
                        {
                                resolve("Iqra");
                        })
                }
                friedrice()
                        .then((value)=>
                        {
                                console.log(value);
                                value+=" Ashfaq";
                                return Promise.resolve(value);   //return value;
                        })
                        .then((value)=>
                        {
                                console.log(value);
                                value+=" Anza";
                                return value;
                        })
                        .then((value)=>
                        {
                                console.log(value);
                        })
*/
// .................
//Above callBack hell/prymaid Dom
//using callbackhell.html
const h1=document.querySelector(".headeing-1");
const h2=document.querySelector('.headeing-2');
const h3=document.querySelector('.headeing-3');
const h4=document.querySelector('.headeing-4');
const h5=document.querySelector('.headeing-5');

function changing(headeing,color,time)
{
    return new Promise((resolve,reject)=>
{
        if(resolve)
        {
                setTimeout(()=>{
                        headeing.style.color=color;
                        resolve();
                },time)
        }
        else
        {
                reject();
        }
})
}
changing(h1,"red",1000).then(()=>{
        changing(h2,"green",1000).then(()=>{
                changing(h3,"pink",1000).then(()=>{
                        changing(h4,"yellow",1000).then(()=>{
                                changing(h5,"blue",1000).then(()=>{
                                
                                })
                        })
                })
        })
})

//    if(headeing)
//    {
//         if(onsuccess)
//         {
//         setTimeout(()=>{
//         headeing.style.color=color;
//         onsuccess();
//         },time)
//         }
//    }
//    else
//    {
//      if(reject)
//      {
//         reject();
//      }
   

changing(h1,"red",1000,()=>{
        changing(h2,"pink",1000,()=>{
                changing(h3,"yellow",1000,()=>{
                        changing(h4,"green",1000,()=>{
                                changing(h5,"blue",1000,()=>{},()=>console.log("h5 Doesn't Exist"))
                        },()=>console.log("h4 doesn't exist"))
                },()=>console.log("h3 Doesn't Exist"))
        },()=>console.log("h2 Doesn't exist"))
},()=>console.log("h1 doesn't Exist"));