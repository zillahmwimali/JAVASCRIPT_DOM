// a variable scope is thea within the program where a variable can be accessed.We have Global variables which are var/const and local variables which is identified as let.Global variables are/can be accessed anywhere within your program and can be declared outside a function and still be accessed whenever it's needed while local variables in only accessible within a function (it's scope) 


//Creating objects in Javascript
// objects are things that have properties
var car={
    make:"BMW",
    model:"X5",
    origin:"Germany",
    capacity:5,
    description: function myCar(){//Objects have methods that create instances with the properties of the objects
        return `I bought this ${car.make} ${car.model} from ${car.origin} and it is a ${car.capacity} seater. `//Objects properties are accessed using the this keyword/object name.property
    }
}
console.log(car.description());

function one1()
{
  return {
      bar: "hello"
  };
}
console.log(one1);
function two2()
{
  return
  {
      bar: "hello"
  };
}
console.log(two2);
// The output of the above functions will be the same ;[Function: one1][Function: two2].