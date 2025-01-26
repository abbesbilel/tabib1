import RatingLeftSide from "./RatingLeftSide"
import ReviewBox from "./ReviewBox"
import Box from "./Box"
function Wrapper() {
    return (

        <>
        
            <h1 className="p-relative">Welcome, Dr. House</h1>
            <div className="wrapper d-grid gap-20">
                <Box topic="request"/>
                <Box topic="appointments"/>
            </div>
            <div className="rating-review m-20 mt-45">
                <div className="rating-titles between-flex">
                    <RatingLeftSide />
                    <button className="btn-view">view All {'>'}</button>
                </div>
            </div>
            <div className="wrapper d-grid gap-20">
                <ReviewBox/>
                <ReviewBox/>
            </div>
        </>
    )
}

export default Wrapper