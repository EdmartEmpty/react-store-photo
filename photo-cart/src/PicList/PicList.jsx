import Card from "../Card/Card.jsx";
import picArr from "./PicArr.jsx";

export default function PicList({ filter }) {
    
const filterPic = filter === 'All' ? picArr : picArr.filter((el) => el.category === filter);

    return (
        <div className="pic__box">
            {filterPic.map((el) => (
                <div className="pic"  key={el.id} >
                    <Card
                        url={el.img}
                        category={el.category}
                        name={el.name} 
                    />
                </div>
            ))}
        </div>
    );
}