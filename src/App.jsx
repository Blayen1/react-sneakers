import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import axios from 'axios';




function App() {
  const [items , setItems] = React.useState([]);
  const [cartItems , setCartItems] = React.useState([]);
  const [searchValue , setSearchValue] = React.useState('');
  const [cartOpened , setCartOpened] = React.useState(false);

  React.useEffect(() =>{


  axios.get('https://6344788d242c1f347f870995.mockapi.io/items').then((res) =>{
    setItems(res.data)
  })
   

  axios.get('https://6344788d242c1f347f870995.mockapi.io/cart').then((res) =>{
    setCartItems(res.data)
  })

}, []); 
  const onAddToCart = (obj) => {
    axios.post('https://6344788d242c1f347f870995.mockapi.io/cart'  , obj);
    setCartItems( (prev) =>[...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6344788d242c1f347f870995.mockapi.io/cart/${id}`)
    setCartItems( (prev) => prev.filter(item => item.id !== id));
  }
  

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> }
      <Header onClickCart={() => setCartOpened(true)}   />
      <div className="content p-50 ml-20">
        <div className=" mb-40 d-flex align-center justify-between">
          <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"`:'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center ">
            <img height={14} width={14} src="/img/search.png" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap ">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
              <Card 
              key={index}
              title={item.title}
              price={item.price} 
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Понравилось')}
              onPlus={(obj) => onAddToCart(obj)}
               />
          ))}
     
    
        </div>
      </div>
    </div>
  );
}

export default App;
