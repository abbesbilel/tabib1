import Navigation from "./Navigation";


function SideBar(props) {

    return(
        <>
        <div className="sidebar bg-white p-20 p-relative">

          <h3 className="p-relative txt-c">DZ<span>TABIB</span></h3>
          {props.title === "admin" ? <Navigation title="admin" /> : <Navigation />}

        </div>
        </> 
    )
}

export default SideBar;