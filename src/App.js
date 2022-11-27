import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Buenas tardes, espero todo vaya de maravilla :D"}/>
    </div>
  );
}

export default App;
