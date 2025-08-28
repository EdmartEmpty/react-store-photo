import Button from "../Button/Button.jsx";
import PicList from "../PicList/PicList.jsx";
import { useState } from 'react';
import "./ToolBar.css";

export default function ToolBar() {
    const [filter, setFilter] = useState("All");

    function getButtonName(event) {
        setFilter(event.name);

    }

    const filterArr = ["All", "Websites", "Flayers", "Business Cards"];

    const buttonArr = filterArr.map((el, index) => <Button key={index} name={el} getButtonName={getButtonName} />);

    return (
        <>
            <div className="button__box">
                {buttonArr};
            </div>
            <PicList filter={filter} />
        </>

    )


}