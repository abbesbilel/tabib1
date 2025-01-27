import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
function Stars() {

    return (
        <>      
                <div className="w-100 m-auto c-purple">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
        </>
    )
}

export default Stars