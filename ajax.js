// BASIC THEORY 

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)
// ...................................
// Practical

    // const URL="https://jsonplaceholder.typicode.com/posts";
    // const xhr=new XMLHttpRequest();

    //console.log(xhr);  //ready state=0;

//Hmy object create kr ky HTTP request krni server pr.
//Server hm khud bna skty yeah bani bnai API Call kr skty .API Backend Developer provide kry ga .
//now we use json typicode API.
/*
        xhr.open('GET',URL) //ready State=1;
        xhr.onreadystatechange=function()
        {
            // console.log(xhr.readyState);
            // console.log(xhr.response);
            // console.log(typeof xhr.response);  //String: convert into object.
            const res=JSON.parse(xhr.response);
            console.log(typeof res); 
        }
        //    console.log(xhr.readyState)
        xhr.send();
*/
        
// onload (tab chaly ga jb ready state 4 ho gi)
 
/*
        xhr.open("GET",URL);
        xhr.onload=function()
        {
            // console.log(xhr.readyState);
            // const data=JSON.parse(xhr.response);
            // console.log(data);

            if(xhr.status>=200 && xhr.status<300)
            {
                // console.log(xhr.readyState);
                const data=JSON.parse(xhr.response);
                // console.log(data);   
                
                //hmy 4 user ki id chahya
                const user4=data[3].id;
                console.log(user4); 
            }
            else
            {
                console.log("something went Wrong")
            }
        }
        xhr.send()
    */
// ...............xhr...........
 //ab hmy user4 kah data chahya


 const URL="https://jsonplaceholder.typicode.com/posts";
 const xhr=new XMLHttpRequest();
 xhr.open("GET",URL)
 xhr.onload=()=>
 {
    if(xhr.status>=200 && xhr.status<300)
    {
        const data=JSON.parse(xhr.response);
        const user_4=data[3].id;
        // console.log(user_4);
        // const URL2=URL+"/"+user_4;
        const URL2=`${URL}/${user_4}`;
        const xhr2=new XMLHttpRequest();

    }
 }
 xhr.send();