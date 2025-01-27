import myImage from '../assets/avatar_2.png.png'; 
import ButtonRequest from './ButtonRequest';
function RequestInfo(props) {
    return (
        <>
            <div className="news-row d-flex align-center">
                <img src={myImage} alt="" />
                <div className="info">
                    <h3>LAURENCE VENDETTA</h3>
                    {props.topic === "appointments" ? (
                    <p className="m-0 fs-14 c-grey">Clinic Consulting</p>
                        ) : (
                            props.topic === "suspend" || props.topic === "request" || props.topic === "not-answered" ||
                            props.topic === "booked" || props.topic === "declined" || props.topic === "canceled" ||
                             props.topic === "Clinic-Consultation" || props.topic === "Done"   ? (
                            <p className="m-0 fs-14 c-grey">5 February 10:30 AM</p> 
                        ) : (
                            // Handle other cases (optional)
                            <p className="m-0 fs-14 c-grey">Cardiologist</p> 
                        )
                    )}

                </div>
                {props.state==="declined" ? <ButtonRequest state="declined" /> : null}
                {props.state==="confirmed" ? <ButtonRequest state="confirmed" /> : null}
                {props.state==="cancel" ? <ButtonRequest state="cancel" /> : null}
                {props.state==="doctor" ? <ButtonRequest state="doctor" /> : null}
                {props.state==="patient" ? <ButtonRequest state="patient" /> : null}
                {props.state==="onHold" ? <ButtonRequest state="onHold" /> : null}
                {props.state==="date" ? <p className='m-0 fs-14 c-grey'>10:25 AM</p> : null}
                {props.state==="suspend" ? <ButtonRequest state="suspend" /> : null}
                {props.state==="suspended-doctors" ? <ButtonRequest state="activate" /> : null}

            </div>
        </>
    )
}

export default RequestInfo