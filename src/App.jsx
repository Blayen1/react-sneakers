


function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-20">Корзина</h2>

          <div className="items"><div className="cartItem d-flex align-center p-20 mb-20">
            <div style={{ backgroundImage: 'url(/img/sneakers/sneaker3.jpg' }} className="carItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="Remove" />
          </div>
            <div className="cartItem d-flex align-center p-20 mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/sneaker2.jpg' }} className="carItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/delete.svg" alt="Remove" />
            </div></div>
          <div className="cartTotalBlock">
            <ul >
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>Оформить заказ</button>
          </div>





        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/icon1.svg" />

            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/icon3.svg" />

          </li>
        </ul>
      </header>
      <div className="content p-50 ml-20">
        <div className=" mb-40 d-flex align-center justify-between">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex align-center ">
            <img height={14} width={14} src="/img/search.png" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>


        <div className="d-flex ">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-liked.svg" alt="heart-unliked" />
            </div>

            <img width={133} height={112} src="/img/sneakers/sneaker3.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sneaker1.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>



          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sneaker2.jpg" alt="Sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>


          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sneaker4.jpg" alt="Sneaker" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
