import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return (
        <div className="one-book">
           <img src={props.myimage} alt="" />
          <h2 className="main-heading">{props.mytitle}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis incidunt quas esse fugit accusantium mollitia doloribus. Dicta aperiam tempore, id cupiditate facere ea! Natus magnam voluptatum eaque eos nihil!</p>
          <OrderButton />
        </div>
    )
}


export default Book
//komponenta je obyčejná funkce
//komponenta má stejný název jako je název souboru
//komponenta obsahuje return
//na konci souboru musí být řádek s exportem
//v return musí něco být
//return dokáže vrátit jen jeden tag


