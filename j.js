
   
function create_object(id,name)
{
 const user=Object.create(create_object.prototype);
 user.Id=id;
 user.Name=name;
 return user;
}
create_object.prototype.about=function()
{
   console.log(`${this.Id},${this.Name}`)
}
const user=create_object(1,"viqra");
user.about();