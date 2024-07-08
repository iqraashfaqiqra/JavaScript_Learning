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