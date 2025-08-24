import Button from "../Button/Button.jsx";
import PicList from "../PicList/PicList.jsx";
import { useState } from 'react';
import "./ToolBar.css";

export  default function ToolBar(){
    const [filter,setFilter] = useState("all");
    
 function getButtonName(event){
    setFilter(event.name);
    
}

return (
    <>
        <div className="button__box"><Button name={"All"} getButtonName={getButtonName}/>
        <Button name={"Websites"} getButtonName={getButtonName}/>
        <Button name={"Flayers"} getButtonName={getButtonName}/>
        <Button name={"Business Cards"} getButtonName={getButtonName}/>
        </div>
        <PicList filter={filter}/>
    </>
   
)


}