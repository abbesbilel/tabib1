import RatingLeftSide from "./RatingLeftSide";
import ReviewBox from "./ReviewBox";
import Box from "./Box";
import { useState } from "react";
import select from "../assets/selection.png";

function Wrapper(props) {
  const [showReviews, setShowReviews] = useState(true);

  const handleViewAllClick = () => {
    setShowReviews(false);
    window.scrollTo(0, 0); 
  };

  return (
    <>
      {showReviews ? (
        <>
          <h1>Welcome, {props.title === "admin" ? "Administrator" : "Dr. House"}</h1>
          <div className="wrapper d-grid gap-20">
            {props.title === "admin" ? (
              <>
                <Box topic="doctors" />
                <Box topic="suspended-doctors" />
              </>
            ) : props.title === "patient" ? (
              <>
                <Box topic="patients" />
                <Box topic="suspended-patients" />
              </>
            ) : (
              <>
                <Box topic="request" />
                <Box topic="appointments" />
              </>
            )}
          </div>
          {props.deleteeed !== "true" && (
            <>
              <div className="rating-review m-20 mt-45">
                <div className="rating-titles between-flex">
                  <RatingLeftSide />
                  <button className="btn-view" onClick={handleViewAllClick}>
                    view All {">"}
                  </button>
                </div>
              </div>
              <div className="wrapper d-grid gap-20">
                <ReviewBox />
                <ReviewBox />
              </div>
            </>
          )}
        </>
      ) : (
        <>

        <nav className="filter-nav">
                <img src={select} alt=""  />
                <button className="filter-button outline">
                    Location
                </button>

                <button className="filter-button outline">
                    Specialty
                </button>

                <button className="filter-button outline">
                    Availability
                </button>

                <button className="filter-button outline">
                    Insurance
                </button>

                <button className="filter-button outline">
                    Languages
                </button>

                <button className="filter-button outline">
                    Ratings
                </button>

                <button className="filter-button outline">
                    Teleconsultation
                </button>
            </nav>
            <div className="wrapper d-grid gap-20">
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
            </div>
        </>
      )}
    </>
  );
}

export default Wrapper;