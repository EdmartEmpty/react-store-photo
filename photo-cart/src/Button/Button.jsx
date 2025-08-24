export default function Button({name,getButtonName}) {

    return (
    <>
   <button  className ="button" name={name} onClick={()=> getButtonName({name})}>
          {name}
        </button>
    </>   
    )
}
