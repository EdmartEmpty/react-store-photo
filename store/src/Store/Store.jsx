import { useState } from 'react'
import IconSwitch from "../IconSwitch/IconSwitch.jsx"
import List from "../List/List.jsx";
import Model from "../Model/Model.jsx";
import "./Store.css";

export default function Store() {
    const [state, setState] = useState("view_list");
    const [icon, setIcon] = useState("list");


    function switcher() {
        if (state === "view_list") {
            setIcon("dashboard")
            setState("view_module");
        } else {
            setIcon("list");
            setState("view_list");
        }
    }

    return (
        <>
            <IconSwitch icon={icon} switcher={switcher} />
            {state === "view_list" ? <Model /> : <List />}
        </>
    )

}