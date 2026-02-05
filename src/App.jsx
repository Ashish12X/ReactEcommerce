import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Category from './category'
import axios from 'axios'
import './App.css'

function App() {
  const [fCategory, setCategory] = useState([]);
  const [prod, setprod] = useState([]);
  const [cl,setCl]=useState('');

  const categories=async()=>{
    const responce=await axios.get('https://dummyjson.com/products/categories');
    const d=responce.data;
    setCategory(d);
  }

  const product=async()=>{
    const responce=await axios.get('https://dummyjson.com/products');
    const d1=responce.data;
    setprod(d1.products);
  }

  const pr=prod.map((v,i)=>(
                  <div>
                    <Products key={i} t={v.title} i={v.images[0]} p={v.price}/>
                  </div>
                  ))

  useEffect(()=>{
    categories();
    product();
  },[]);

  useEffect(()=>{
    if(cl!==''){
    const fn=async()=>{
    const responce=await axios.get(`https://dummyjson.com/products/category/${cl}`);
    const d2=responce.data;
    setprod(d2.products);
  };
  fn();
    }
  },[cl])

  return (
    <>
      <div>
        <div className='w-[100vw] h-[100vh] '>
          <h1 className='text-center text-[5vh] text-bold mt-[5vh] '>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[10vh] '>
            <div className='mx-auto'>
              <Category fCategory={fCategory} setCl={setCl}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-14 mr-[5vw]'>
                {pr}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
function Products({t,i,p}){
  
  return(
  <div className='shadow-lg text-center mt-[5vh] rounded-[2vh] pb-[2vh]'>
    <img src={i}/>
    <h4>{t}</h4>
    <h4>₹{p}</h4>
  </div>
  )
}

