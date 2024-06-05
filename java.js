//                                       1st class
// console.log("hello world");
// console.log("Hello"+"world");
// console.log("Hello","world");
// console.log('hello','world');
// console.log("hello \t world");

//                                      2nd class
// let name="Iqra";
// let father="Ashfaq"
// let age=25;
// let education="Bscs";
// let output=`My name is ${name}\nFather Name is ${father}\nAge is ${age}`;
// console.log(output)
// ......................
// let name="Iqra";
// let name="ayesha";
// console.log(name);
// Error when we use let only one variable declare one type and can be modify.
// ......................

// var name="Iqra";
// var name="ayesha";
// console.log(name);
// correct

//                                        3rd class    
// Declaration Rule
// 1-Name Can't Start with number 
// 2-only 2 special Character use ($,_),can be between and center
// 3-cann't use space
// .............
// let a=1s3; wrong
// let Name="iqra";   correct
// let name="iqra";   correct
// let FirstName="Ayesha"; correct
// let $Name="Ayesha"; correct
// let _name="ayesha"; Correct
// Let Name first="Ayesha"; Worng.   

//                                     4th Class
// String Indexing(Space counted)
// let Name="Iqra Ashfaq";
// // i q r a   a s h f a q
// // 0 1 2 3 4 5 6 7 8 9 10   
// //index start with 0 and length start with 1
//  console.log(Name.length);
//  console.log(Name[3]);
//  console.log(Name[Name.length-1])
// ....................
 // trim()  remove white space from start and end
// toUpperCase()
// toLowerCase()
// slice()

// Name.trim();  
// console.log(Name); doesn't show White space removed string because we didn't assign trim string to variable 
// console.log(Name,Name.length)
// Name=Name.trim();
// console.log(Name.length);

// console.log(Name.toUpperCase());
// console.log(Name.toLocaleLowerCase());
// console.log(Name.slice(0,5))
// console.log(Name.slice(5))
// ........................................
// Number to String Converstion 
    // let age=25;
    // let str=age+"";
    // console.log(str,typeof str);
    // let str=String(age);
    // console.log(str,typeof str);
// String to Number  
    // let name="17";
    // let num=+name;
    // console.log(num, typeof num);
// ..........................

//  Comparison Operator
// ==,===,!=,!==
// let a=10;
// let b="10";
// (a==b)?console.log("true"):console.log("False");   true output 
// (a===b)?console.log("true"):console.log("False"); check data type also.
// (a!==b)?console.log("true"):console.log("False");

//                                         5Th class
// if-Else
/*
// Example#1
            let age=14;
            if(age>=15)
                {
                    console.log("you are mature");
                }
                else
                {
                    console.log("you are Immature");
                }
     //Example 2           
         let name="Iqra";
         let age="25";
         if(name[0]==="I" && age===25)
            {
                console.log("true");
            }
            else 
            {
                console.log("False");
            }
    */        
  /*  
    let day="Tuesday";
        switch(day)
        {
            case "Monday":
                console.log("monday");
                break;
                case "Tuesday":
                console.log("Tuesday");
                break;
                case "Wednesday":
                    console.log("Wednesday");
                    break;
                case "Thursday":
                    console.log("Thursday");
                    break; 
                case "Friday":
                    console.log("Friday");
                    break; 
                case "Saturday":
                    console.log("Saturday");
                    break;  
                    default:
                    console.log("");
        }
*/
// ....................................
// Loops
    //  for(let i=1;i<=9;i++)
    //     {
    //         console.log(i);

    //     }

//     let i=0;
//     for(i=0;i<=9;i++)
//         {
//             if(i==1)
//                 continue;
//             console.log(i);

//         }
//   console.log("value of i",i);


//                                       6th Class 
// non-Primitive (reference) data type
// 1-Array
// 2-object 

// let ar=['apple','mango','bannan'];
// console.log(typeof ar); by default typeof Array="object"
// console.log(Array.isArray(ar));  for checking array because datatype of arr and obj is obj. 
// let obj={};
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// Push() pop()....Ending
// unshift() shift()-----Strting 
        // ar.unshift("guava");
        // console.log(ar);
        // ar.push("guava");
        // console.log(ar);
//clone array 
        // let a1=['items1','items2'];
        // let a2=a1;
        // console.log(a1===a2) (Answer true and if we change a1 it will effect a2 same);
// cloning method that not effect other Array;
    // 1- Ar2=Ar1.slice(0);
    // 2-Ar2=[].concat[ar1];
    // 3-Ar2=[...Ar1];  //spread operator

    // Example
    // let Ar1=['items1','items2'];
    // // let Ar2=Ar1.slice(0);
    // // let Ar2=[].concat(Ar1);
    //    let Ar2=[...Ar1];
    // Ar2.push('item3')
    // console.log(Ar1,Ar2);
// ...................................................
//looping method
        // 1-normal Loop
        // 2-for of loop(access element in array directly);
        // 3-for in loop(access index of array);

// Example
        // let fruits=['apple','Bannana','Mangoes'];
        // 1st 
            // for(let i=0;i<fruits.length;i++)
            //     {
            //         console.log(fruits[i]);
            //     }
        //2nd
            //  for(let fruit of fruits)
            //     {
            //         console.log(fruit);
            //     }
         //3rd
            //   for(let index in fruits)
            //     {
            //         console.log(fruits[index]);
            //     }   
// ........................... 
//                                                  7th Class    
// Object 
        //   const person={
        //     name:"Iqra",
        //     age:25,
        //     hobbies:["playing","drawing","singing"]
        //   }
        //     //   console.log(person);
            //   console.log(person.name);
            // //   console.log(person[name]);   Error 
            // console.log(person['age']);
            
    // Iteration Methods
    // 1- For In
    // 2- Objects.Keys(object_Name);

            // for(let p in person)
            //     {
            //         // console.log(person.p); Error
            //         // console.log(person['p']); Error 
            //         console.log(person[p]);
            //     }

            // let a=Object.keys(person);
            // for(let i of a)
            //     {
            //         console.log(person[i]);
            //     }

        // Example
            // let a="name";
            // let b="age";
            // let value1="Iqra";
            // let value2="25";
                //1st 
                    // const ob={
                    //     [a]:value1,
                    //     [b]:value2
                    // }
                    // console.log(ob);
                //2nd
                    // const ob={};
                    // ob[a]=value1;
                    // ob[b]=value2;
                    // console.log(ob);
                    // ............................
//object destructing
        //    const obj={
        //     name:"iqra",
        //     age:10,
        //     hobbies:["aa",'ccc',2],
        //     class:18
        //    }
        //    const {name:Name,age,...restvar}=obj;
        //    console.log(Name,restvar);
// .................................................
// Nested Object inside array 
//  const ar=[{},{},{}];

        // const ar=[
        //     {
        //         Id:1,
        //         name:'iqra'
        //     },
        //     {
        //         Id:2,
        //         name:'Ayesha'
        //     }
        // ]
    // destructing
            // const [user1,user2,user3]=ar;
            // console.log(user1)
            // .........
            // const [{name},{name:Name}]=ar;
            // console.log(name,Name);
// .................................................................. 
// Function 