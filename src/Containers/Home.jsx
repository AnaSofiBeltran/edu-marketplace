import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Header from '../Components/Header'
import Content from '../Components/Content'
import Footer from '../Components/Footer'


const Home = () => {
const [data,setData] = useState("");

useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
.then((response)=>{
    setData(response)
})
},[])
if(data==""){
    return (
    <>
        <Header />
        <Footer />
    </>)
    
}else{
    return (
    <>
        <Header />
        <Content data={data}></Content>
        <Footer />
    </>)
    
}

}
export {Home}