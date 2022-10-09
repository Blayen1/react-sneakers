import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
