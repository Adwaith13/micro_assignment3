const data = require('./food.json');

const categoryfoodname=()=>{
  console.log("Food Items:-\n")
  for(let i=0;i<data.length;i++)
  {
    console.log(data[i].foodname)
  }
  console.log("\n")
}


const vegetable=()=>{
  console.log("Category Vegetables:-\n")
  for(let i=0;i<data.length;i++)
    {
      if(data[i].category==="Vegetable")
        console.log(data[i].category +":"+"- "+ data[i].foodname )
    }
  console.log("\n")
}


const fruit=()=>{
  console.log("Category Fruits:-\n")
  for(let i=0;i<data.length;i++)
    {
      if(data[i].category==="Fruit")
        console.log(data[i].category +":"+"- "+data[i].foodname)
    }
  console.log("\n")
}


const protein=()=>{
  console.log("Category Protein:-\n")
  for(let i=0;i<data.length;i++){
    if(data[i].category==="Protein")
      console.log(data[i].category+":"+"- "+data[i].foodname)
  }
  console.log("\n")
}


const nuts=()=>{
  console.log("Category Nuts:-\n")
  for(let i=0;i<data.length;i++)
    {
      if(data[i].category==="Nuts")
       console.log(data[i].category+":"+"- "+data[i].foodname)
    }
  console.log("\n")
}


const grains=()=>{
  console.log("Category Grains:-\n")
  for(let i=0;i<data.length;i++)
    {
      if(data[i].category==="Grain")
       console.log(data[i].category+":"+"- "+data[i].foodname)
    }
  console.log("\n")
}


const dairy=()=>{
  console.log("Category Dairy:-\n")
  for(let i=0;i<data.length;i++)
    {
      if(data[i].category==="Dairy")
       console.log(data[i].category+":"+"- "+data[i].foodname)
    }
  console.log("\n")
}



const calabove100=()=>{
  console.log("Food items calories above 100:-\n")
  for(let i=0;i<data.length;i++)
    {
        if(data[i].calorie>100)
       console.log(data[i].foodname+":"+"- "+data[i].calorie+" "+"Total Calories")
    }
  console.log("\n")
}


const calbelow100=()=>{
  console.log("Food items calories below 100:-\n")
  for(let i=0;i<data.length;i++)
    {
        if(data[i].calorie<100)
       console.log(data[i].foodname+":"+"- "+data[i].calorie+" "+"Total Calories")
    }
  console.log("\n")
}


function proteinhightolow() {
  console.log("Food items protein highest to lowest:-\n")
  data.sort((a, b) => b.protiens - a.protiens);
  for (let i = 0; i<data.length; i++) 
  {
    console.log(data[i].foodname + " - Protein: " + data[i].protiens);
  }
  console.log("\n")
}



function carblowtohigh() {
  console.log("Food items carbs lowest to highest:-\n")
  data.sort((a,b) => a.cab - b.cab);
  for (let i = 0; i<data.length; i++) 
  {
    console.log(data[i].foodname + " - Carbs: " + data[i].cab);
  }
  console.log("\n")
}


categoryfoodname(data) //function for foodnames
vegetable(data)//function for vegetables category
fruit(data)//function for fruits category
protein(data)//function for protein category
nuts(data)//function for nuts category
grains(data)//func for grains category
dairy(data)//func for dairy category
calabove100(data)//function for calories above 100
calbelow100(data)//function for calories below 100
proteinhightolow(data);//function for protein high to low
carblowtohigh(data);//function for carbs low to high