import RequestInfo from "./RequestInfo"

function Box(props) {
    return (
        <>
                <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
                {props.topic === "request" && (
                    <>
                        <div className="between-flex mb-20">
                            <h2 className="p-relative">Appointment Request</h2>
                            {/* <button className="btn-view">view All {'>'}</button> */}
                        </div>
                        <RequestInfo state={"confirmed"} topic={props.topic}/>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                        <RequestInfo state={"onHold"}  topic={props.topic}/>
                        <RequestInfo state={"confirmed"}  topic={props.topic}/>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                    </>
                )}
                {(props.topic === "doctors" || props.topic === "patients") && (
                    <>
                        <div className="between-flex mb-20">
                            <h2 className="p-relative">{props.topic}</h2>
                            {/* <button className="btn-view">view All {'>'}</button> */}
                        </div>
                        <RequestInfo state={"suspend"} topic={props.topic}/>
                        <RequestInfo state={"suspend"}  topic={props.topic}/>
                        <RequestInfo state={"suspend"}  topic={props.topic}/>
                        <RequestInfo state={"suspend"}  topic={props.topic}/>
                        <RequestInfo state={"suspend"}  topic={props.topic}/>
                    </>
                )}
                {(props.topic === "suspended-doctors" || props.topic === "suspended-patients") && (
                    <>
                        <div className="between-flex mb-20">
                            <h2 className="p-relative">{props.topic}</h2>
                            {/* <button className="btn-view">view All {'>'}</button> */}
                        </div>
                        <RequestInfo state={"suspended-doctors"} topic={props.topic}/>
                        <RequestInfo state={"suspended-doctors"}  topic={props.topic}/>
                        <RequestInfo state={"suspended-doctors"}  topic={props.topic}/>
                        <RequestInfo state={"suspended-doctors"}  topic={props.topic}/>
                        <RequestInfo state={"suspended-doctors"}  topic={props.topic}/>
                    </>
                )}

                {props.topic === "appointments" && (
                    <>
                        <div className="between-flex mb-20">
                            <h2 className="p-relative">Today Appointments</h2>
                            {/* <button className="btn-view">view All {'>'}</button> */}
                        </div>
                        <RequestInfo state={"date"}  topic={props.topic}/>
                        <RequestInfo state={"date"}  topic={props.topic}/>
                        <RequestInfo state={"date"}  topic={props.topic}/>
                        <RequestInfo state={"date"}  topic={props.topic}/>
                        <RequestInfo state={"date"}  topic={props.topic}/>
                    </>
                )}
                    
                {props.topic === "not-answered" && (
                    <>
                        <div className="mb-20">
                            <h2 className="p-relative">Not Answered</h2>
                        </div>
                        <RequestInfo state={"onHold"}  topic={props.topic}/>
                        <RequestInfo state={"onHold"}  topic={props.topic}/>
                        <RequestInfo state={"onHold"}  topic={props.topic}/>
                        <RequestInfo state={"onHold"}  topic={props.topic}/>
                        <RequestInfo state={"onHold"}  topic={props.topic}/>
                    </>
                )}
                    
                {props.topic === "booked" && (
                    <>
                        <div className="mb-20">
                            <h2 className="p-relative">Booked</h2>
                        </div>
                        <RequestInfo state={"cancel"}  topic={props.topic}/>
                        <RequestInfo state={"cancel"}  topic={props.topic}/>
                        <RequestInfo state={"cancel"}  topic={props.topic}/>
                        <RequestInfo state={"cancel"}  topic={props.topic}/>
                        <RequestInfo state={"cancel"}  topic={props.topic}/>
                    </>
                )}
                    
                    
                {props.topic === "declined" && (
                    <>
                        <div className="mb-20">
                            <h2 className="p-relative">Declined</h2>
                        </div>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                        <RequestInfo state={"declined"}  topic={props.topic}/>
                    </>
                )}
                
                    
                {props.topic === "canceled" && (
                    <>
                        <div className="mb-20">
                            <h2 className="p-relative">Canceled</h2>
                        </div>
                        <RequestInfo state={"doctor"}  topic={props.topic}/>
                        <RequestInfo state={"doctor"}  topic={props.topic}/>
                        <RequestInfo state={"patient"}  topic={props.topic}/>
                        <RequestInfo state={"doctor"}  topic={props.topic}/>
                        <RequestInfo state={"patient"}  topic={props.topic}/>
                    </>
                )}

                {props.topic === "Clinic-Consultation" && (
                    <>
                        <div className="mb-20">
                            <h2 className="p-relative">Clinic Consultation</h2>
                        </div>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                    </>
                )}
                
                {props.topic === "Done" && (
                    <>
                        <div className="mb-20">
                            <h2 className="p-relative">Done</h2>
                        </div>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                        <RequestInfo   topic={props.topic}/>
                    </>
                )}
                
                    
                </div>
        </>
    )
}

export default Box