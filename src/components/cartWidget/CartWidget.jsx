import "./CartWidget.css";
import { RiShoppingCartFill } from "react-icons/ri";
export const CartWidget = () => {
  return (
      <div className="container-cart"> 
            <RiShoppingCartFill size={50} color={"lightgreen"}/> 
    </div>
  );
};

