import CardList from "../CardList/CardList"
import products from "../products/products.js";
import "./List.css";


export default function List(){
    return(
        <div className="card_list_box">{products.map((el) => (<div className="list" key={el.img}>
            <CardList pic={"pic_list"} name={el.name} price={el.price} color={el.color} img={el.img}/>
        </div>)

        )}</div>
    )
}