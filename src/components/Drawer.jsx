

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column ">
        <h2 className="mb-20 d-flex justify-between ">Корзина<img onClick={onClose} className="removeBtn" src="/img/delete.svg" alt="Remove" /></h2>

        {items.length > 0 ? (
          <div>
            <div style={{ flex: 1 }} className="items">
              {items.map((obj) => (
                <div>
                  <div className="cartItem d-flex align-center p-20 mb-20">
                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="carItemImg"></div>
                    <div className="mr-20 fle">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/delete.svg" alt="Remove" />
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

              ))}
            </div>
          </div>
        ) : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img src="/img/cart.png" alt="Cart" />
          <h2>Корзина пустая</h2>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <div className="greenButton">
            <button onClick={onClose}><img src="/img/Group.svg" alt="Arrow" />Вернуться назад</button>
          </div>
        </div>
        )}

{items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))} <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
   
  );

        
       
      </div>
    </div>
  );






   
}

export default Drawer;