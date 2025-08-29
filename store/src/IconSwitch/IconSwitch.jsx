export default function IconSwitch({ icon, switcher }) {
    return (
     <>
        <div className="switcher__box">
            <span className="material-icons" onClick={switcher}>
                {icon}
            </span>
        </div>
    </>
    )
} 