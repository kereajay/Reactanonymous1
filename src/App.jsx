import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import Footer from './Footer'
import { data, data2,data3 } from './Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <h1 className='text-3xl font-bold text-gray-400  uppercase text-center'>Categories</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2 gap-2'>
        {
          data.map((item) => {
            return <Card key={item.id} url={item.url} />
          })
        }
      </div>
      <br />
      <br />
      <h1 className='text-3xl font-bold text-gray-400  uppercase text-center'>FEATURED PRODUCTS</h1>
      <br />
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 w-[90%] m-auto'>
        {
          data2.map((item) => {
            return <Card2 key={item.id} url={item.url} />

          })
        }
        {/* <Card2/> */}
      </div>
      <br />
      <br />


      <div className='flex w-[90%] m-auto gap-8 '>
        <img className="hover:scale-105 transition-all duration-500 cursor-pointer" src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-1.jpg" alt="" width={"49%"} />
        <img className="hover:scale-105 transition-all duration-500 cursor-pointer" src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-2.jpg" alt="" width={"49%"} />
      </div>
      <br />
      <br />
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 w-[90%] m-auto'>
        {
          data2.map((item) => {
            return <Card2 key={item.id} url={item.url} />

          })
        }
        {/* <Card2/> */}
      </div>
      <br />
      <br />

      <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 w-[90%] m-auto'>
        {
           data3.map((item)=>{
             return <Card3 key={item.id} url={item.url}/>
           })
        }
      </div>
      <br />
      <br />

      <Footer />




    </>
  )
}

export default App
