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