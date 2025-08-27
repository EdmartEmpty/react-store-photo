export default function CardList ({name,price,color,img,pic}){
     return (
    <div className="card__box__list">
    <img className={pic} src={img} alt="" />
        <h2>{name}</h2>
        <h3>{color}</h3>
        <div className="price__box">{price}</div> 
         <button className="button__list" type="button">{"Add to Card"}</button>
    </div>
    )
}