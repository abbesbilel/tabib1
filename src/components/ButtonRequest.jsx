import HoldButtons from "./HoldButtons"

function ButtonRequest(props) {
    return (
        <>
            {props.state==="declined" ? <button className="btn-request declined fs-13 c-pointer label">Declined</button> : null}
            {props.state==="confirmed" ? <button className="btn-request confirmed fs-13 c-pointer label">Confirmed</button> : null}
            {props.state==="cancel" || props.state==="doctor" || props.state==="patient" ? <button className="btn-request cancel fs-13 c-pointer label">{props.state}</button> : null}
            {props.state==="onHold" ? <HoldButtons /> : null}

        </>
    )
}

export default ButtonRequest