const jsonData = {
    "people": [
        { "name": "User1", "age": 11 },
        { "name": "User2", "age": 22 },
        { "name": "User3", "age": 33 },
        { "name": "User4", "age": 32 },
    ]
};


console.log("For Loop")
{
    for(var i=0; i< jsonData.people.length; i++)
    {
        var data= jsonData.people[i];
        console.log(`Name; ${data.name}, Age: ${data.age}`);
    }
}

console.log("ForEach")
{
    jsonData.people.forEach(data)
    {
        console.log(`Name: ${data.name} Age: ${data.age}`);
    }
}


console.log("For...of");
{
    for(var data of jsonData.people)
    {
        console.log(`Name: ${data.name}, Age: ${data.age}`);
    }
}