import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck, faSquareXmark } from "@fortawesome/free-solid-svg-icons"
function HoldButtons() {

    return (
        <>  

        <div className="d-flex gap-2 mb-2">
            <FontAwesomeIcon icon={faSquareCheck} className="mr-10 fs-35 confirmed c-pointer"/>
            <FontAwesomeIcon icon={faSquareXmark} className="fs-35 declined c-pointer"/>
        </div>

        </>
    )
}

export default HoldButtons