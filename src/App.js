import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/Home/Home';
import Secondcontent from './components/Home/content/Secondcontent';
import Notfound from './components/notfound/Notfound';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import ProductsContainer from './components/products/productsContainer/ProductsContainer';
import Singleproduct from './components/products/productsContainer/singleproduct/Singleproduct';
import Cart from './components/products/cart/Cart';
import { useContext } from 'react';
import productsContext from './contexts/productContext';

function App() {

  const dataa = 
    [{
      img : 'https://wallpapers.com/images/high/zara-blue-paper-bag-8igmjwor62hfbbhg.webp',
      txt : 'Find Your Greatness',
      desc : 'Nike had managed to construct a powerful and aspirational creative message around the persona of one of its iconic athletes' 
    },
     {
       img : 'https://wallpapers.com/images/high/calvin-klein-logo-wmmwskuz6yg3sp4p.webp',
      txt : 'Greateast of All TIME',
      desc : 'Nike had managed to construct a powerful and aspirational creative message around the persona of one of its iconic athletes'
     },
     {
       img : 'https://m.media-amazon.com/images/I/A1yUwrA5hFL._AC_UF894,1000_QL80_.jpg',
      txt : 'The Future is COMING',
      desc : 'Nike had managed to construct a powerful and aspirational creative message around the persona of one of its iconic athletes'
     }
    ]

    const {data} = useContext(productsContext)

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<Secondcontent data={dataa[0]} />} />
          <Route path='/2' element={<Secondcontent data={dataa[1]} />}/>
          <Route path='/3' element={<Secondcontent  data={dataa[2]}/>}/>
        </Route>

        <Route path='/products' element={<Products/>}>
          <Route path='/products' element={<ProductsContainer data={data} />} />
          <Route path='beauty' element={<ProductsContainer data={data?.filter((f)=>{if(f.category === 'beauty'){
            return f
          }})}  />} />
          <Route path='food' element={<ProductsContainer data={data?.filter((f)=>{if(f.category === 'groceries'){
            return f
          }})} />}/>
          <Route path='furniture' element={<ProductsContainer data={data?.filter((f)=>{if(f.category === 'furniture'){
            return f
          }})} />}/>
        </Route>

          <Route path='/products/:id' element={<Singleproduct/>}/>

          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<Notfound/>}/>
      </Routes>
  
      <Footer />
    </div>
  );
}

export default App;
