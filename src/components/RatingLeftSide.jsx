import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRankingStar, faStar } from "@fortawesome/free-solid-svg-icons"
import Stars from "./Stars"
function RatingLeftSide() {

    return (
        <>
            <div className="center-flex">
                <FontAwesomeIcon icon={faRankingStar} className="fs-35 m-20 rank-color"/>
                <div>
                    <p className="fs-20 m-0 p-5">Rating & Reviews</p>
                    <Stars />
                    
                </div>
            </div>
        </>
    )
}

export default RatingLeftSide