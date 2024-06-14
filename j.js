class dog
{
  constructor(name,age)
  {
    this.name=name;
    this.age=age;
  }
  eat()
  {
    console.log("Cat Eat")
  }
}
class cat extends dog{
  constructor(name,age,gender)
  {
    super(name,age);
    this.gender=gender;
  }
}
const dog1=new cat('Dogi',25,"female");
console.log(dog1);
dog1.eat();





