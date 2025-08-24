export default function Card({name,price,color,img,pic}){
    return (
    <div className="card__box"><h2>{name}</h2>
        <h3>{color}</h3>
        <img className={pic} src={img} alt="" />
        <div className="footer_card">
            <p>{price}</p>
            <button type="button">{"Add to Card"}</button>
        </div>
    </div>
    )
}

