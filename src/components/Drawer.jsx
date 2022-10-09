

function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">
        <div  className="drawer d-flex flex-column ">
          <h2 className="mb-20 d-flex justify-between ">Корзина<img className="removeBtn" src="/img/delete.svg" alt="Remove" /></h2>

          <div style={{ flex: 1 }} className="items">
            <div className="cartItem d-flex align-center p-20 mb-20">
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
            </div>
          </div>


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
            <div className="greenButton">
              <button>Оформить заказ<img src="/img/Group.svg" alt="Arrow" /></button>
            </div>
          </div>





        </div>
      </div>
    )
}

export  default Drawer;