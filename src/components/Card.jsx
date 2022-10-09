

function Card() {
    return(
        <div className="card mb-40">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="heart-unliked" />
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

    )
}

export default Card;