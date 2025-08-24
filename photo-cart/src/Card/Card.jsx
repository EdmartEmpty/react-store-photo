export default function Card({url,category,name}){
    return (
        <img src={url} alt="pic" id={category} className={name}/>
    )
}

