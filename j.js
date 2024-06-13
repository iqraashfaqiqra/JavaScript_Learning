// function user_detail()
// {
//     console.log(`${this.id},${this.name},${this.age}`)
// }
// const user={
//     id:1,
//     name:"iqra",
//     age:25,
//     about:user_detail
// }
// const user1={
//     id:2,
//     name:"Ayesha",
//     age:28,
//     about:user_detail
// }
// const user3={
//     id:3,
//     name:"Faiza",
//     age:30,
//     about:user_detail
// }
// user1.about();
// console.log(user1);
function about()
{
  console.log(`${this.id},${this.name}`)
}
const user1=
{
    id:1,
    name:"iqra",
}
const user2=
{
    id:2,
    name:"Ayesha"
}
about.call(user1)