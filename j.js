function create_object(id,name)
{
 const user={};
 user.Id=id;
 user.Name=name; 
 user.about=function()
 {
    return `Id:${this.Id},Name:${this.Name}`;
 }
 return user;
}
const user=create_object(1,"iqra");
console.log(user.about())