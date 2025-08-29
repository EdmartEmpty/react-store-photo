import Card from "../Card/Card"
import products from "../products/products.js";


export default function Model(){
  
    return(
        <div className="card_model_box">{products.map((el) => (<div className="model" key={el.img}>
            <Card  pic={"model_list"} name={el.name} price={el.price} color={el.color} img={el.img}/>
        </div>)
    
        )}</div>
    )
}