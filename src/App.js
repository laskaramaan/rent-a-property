import Card from "./components/Card";
import Filter from "./components/Filter";
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import flat1 from './assets/flat1.jpg';
import flat2 from './assets/flat2.jpg';
import flat3 from './assets/flat3.jpg';
import flat4 from './assets/flat4.jpg';
import flat5 from './assets/flat5.jpeg';
import { useEffect, useState } from "react";
const arr=[{
  img:img1,
  price:500,
  property:"houses",
  title:"Palm Harbor",
  address:"b-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-20"
},{
  img:img2,
  price:700,
  property:"houses",
  title:"Palm Village",
  address:"c-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-11"
},{
  img:img3,
  property:"houses",
  price:1000,
  title:"Barmonda",
  address:"c-16 block4 , California",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-08"
},{
  img:img4,
  price:1200,
  property:"houses",
  title:"Hunza Valley",
  address:"d-16 block4 , California",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-07-08"
},{
  img:img5,
  price:2000,
  property:"houses",
  title:"Palm Harbor",
  address:"z14 near pani ori , Dehli",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-07"
},{
  img:img6,
  price:2200,
  property:"houses",
  title:"Palm Harbor",
  address:"105F/B street 6 , Dehli",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-09"
},{
  img:flat1,
  price:900,
  property:"flats",
  title:"Palm Harbor",
  address:"b-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-12"
},{
  img:flat2,
  price:1200,
  property:"flats",
  title:"Palm Harbor",
  address:"b-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-18"
},{
  img:flat3,
  price:800,
  property:"flats",
  title:"Palm Harbor",
  address:"b-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-02"
},{
  img:flat4,
  price:1100,
  property:"flats",
  title:"Palm Harbor",
  address:"b-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-08"
},{
  img:flat5,
  price:2400,
  property:"flats",
  title:"Palm Harbor",
  address:"b-12 block2 , New York",
  bed:"2bed",
  bathroom:"2bathroom",
  fit:"5X10",
  date:"2022-08-08"
}]

const packages={
  property:"",
  price:"",
  title:"",
  date:"",
  address:""
}
function App() {
  const [data,setData]=useState(arr);
  const [check,setCheck]=useState(packages);
  // const[minValue,setMin]=useState()
  // const[maxValue,setMax]=useState()

  const submitHandler=()=>{
  let array=arr.slice();
    // let filter=arr.slice(); 
    if(check.price!=""){
     let priceSplit=check.price.split("-");
     let minValue=priceSplit[0]
     let maxValue=priceSplit[1]
     console.log(minValue,"min");
     // setMin(parseInt(priceSplit[0]));
     // setMax(parseInt(priceSplit[1]));
         array=array.filter((x)=>x.price>=minValue && x.price<=maxValue)
       }
      if(check.property!=""){
        array= array.filter((x)=>x.property==check.property)
      }
      if(check.address!=""){
        array= array.filter((x)=>x.address.toLowerCase().indexOf(check.address.toLowerCase())!==-1)
      }
      if(check.date!=""){
        array= array.filter((x)=>x.date>=check.date)
      }
        setData(array)
  }
  console.log(data,"data");

  
  return (
    <div className="w-full bg-gray-100 h-full py-6">
      <h2 className="text-center font-bold text-3xl">Property for rent</h2>
      <Filter check={check} setCheck={setCheck} submitHandler={submitHandler}/>
      <div className="w-10/12 mx-auto grid grid-cols-4 gap-5">
        {
          data.map((items,i)=>(
            <Card items={items}/>  
          ))
        }

      </div>
    </div>
  );
}

export default App;
