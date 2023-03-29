let student = '{ "name" : "Shiva","Gender" : "male","age"  : 25,"marks" :[95,85,76,94,90],"average" :"88.0","extraActivities" : null,"Address":"Tenkasi" }';             //JSON

let o=JSON.parse(student);       // JSON -- TEXT convert to OBJECT 

   // traverse item JSON- FOR OF (using keys)    
for(let keys of  Object.keys(o))
{
    console.log(`${keys} :  ${o[keys]}`);

}

// traverse item JSON - FOR OF (using values)
for(let values of  Object.values(o))
{
    console.log(`${values}`);
}

// traverse item and value in JSON - FOR OF(using entries)
for(let [keys, values] of Object.entries(o))
{
  console.log(`${keys} : ${values}`);
}

// traverse item and value in JSON = (Using in)
for(let key in o)
{
    console.log(`Student details ${key}  and the value is  ${o[key]}`)
}

// using ForEach
Object.entries(o).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
});

let student2= {
    "name" : "Ruthra",
    "Gender" : "Female",
    "age"  : 25,                              // JavaScript Object
     "marks" :[98,85,96,90,90],
     "average" :"93.0",
      "extraActivities" : null,
      "Address": {
        "street" : "Sri Murugan",
        "Pincode" : 627808
      }
};


// Traverse JavaScript Object
for(let key in student2)
{
    console.log(`Student details ${key}  and the value is  ${student2[key]}`)
}

// Traverse JavaScript Object
for(let keys of  Object.keys(student2)) 
{   
    console.log(`${keys} :  ${student2[keys]}`);
}

// forEach 
Object.entries(student2).forEach(([key , value]) =>
{
console.log(`The New Key and value is ${key} : ${value}`)
});

// FOrEach Example
var data = '{"employees":\n\
[{"ID" : 101 , "fName":"John", "lName":"Doe"},\n\
{  "ID"  :102 , "fName":"Anna", "lName":"Smith"},\n\
{ "ID" :103 , "fName":"Peter", "lName":"Jones"}]}';

let employerObject= JSON.parse(data);  // Json convert to Object

console.log(employerObject);
// first we need to destructure the data
employerObject.employees.forEach(element => {
    Object.entries(element).forEach(([key, value]) => {
console.log(`key is ${key} value is ${value}`);
    });   
});

// FOrEach Example
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

let jsonObject= JSON.parse(text)
console.log(jsonObject.employees[1].firstName);
jsonObject.employees.forEach(element => {
               console.log(`keys ${Object.keys(element)}`);
               console.log(`values ${Object.values(element)}`);
            });

