import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [{title:'Мужские Кроссовки Nike Blazer Mid Suede' , price: 12999 ,imageUrl: "/img/sneakers/sneaker3.jpg"} ,
            {title:'Мужские Кроссовки Nike Air Max 270' , price: 12999,imageUrl: "/img/sneakers/sneaker1.jpg"},
            {title:'Мужские Кроссовки Nike Blazer Mid Suede' , price: 8499,imageUrl: "/img/sneakers/sneaker2.jpg"},
            {title:'Кроссовки Puma X Aka Boku Future Rider' , price: 8999,imageUrl: "/img/sneakers/sneaker4.jpg"},
          ]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-50 ml-20">
        <div className=" mb-40 d-flex align-center justify-between">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex align-center ">
            <img height={14} width={14} src="/img/search.png" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap ">
          {arr.map((obj) => (
              <Card 
              title={obj.title}
              price={obj.price} 
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)} />
          ))}
     
    
        </div>
      </div>
    </div>
  );
}

export default App;
