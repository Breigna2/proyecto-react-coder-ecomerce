import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import CustomButton from "./components/customButton/CustomButton";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div>
      <NavBar/>

      <Counter/>

      <ItemListContainer greeting={"Buenas tardes, espero todo vaya de maravilla :D"}/>
      
      <CustomButton texto={"login"}/>
    </div>
  );
}

export default App;
