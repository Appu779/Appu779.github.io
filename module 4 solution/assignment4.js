var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0;i<names.length;i++)
{
    var a = names[i].charAt(0)
    if(a==="j" || a==="J")
    {
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("hello " + names[i]);
    }
}