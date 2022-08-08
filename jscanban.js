const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
// const permap = persons.map((value)=>{
//     return {firstname : value.firstname};

// })


// const per_fiter = persons.filter((value)=>{
//     return value.firstname == "Malcom";
// })

const per_find = persons.find((value)=>{
    return value.firstname == "Malcom";
})

// const per_reduce = persons.reduce((acc,cur)=>{
//     return [...acc,c];
// },[])
// console.log(per_reduce);

const a = new Array(10).fill(1);
console.log(a);