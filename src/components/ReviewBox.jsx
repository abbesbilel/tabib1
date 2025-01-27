import myImage from "../assets/avatar_1.png.png";
import Stars from "./Stars";

function ReviewBox() {
  return (
    <>
      <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
        <div className="news-row d-flex align-center">
          <img src={myImage} alt="" />
          <div className="info">
            <h3>PAULO HUBERT</h3>
            <p className="m-0 fs-14 c-grey">
              <span className="fw-bold">Rated:</span> Dr. Lisa Chen, MD
            </p>
          </div>
          <Stars />
        </div>

        <p className="grey-p">The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive. I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received.</p>
      </div>
    </>
  );
}

export default ReviewBox;
