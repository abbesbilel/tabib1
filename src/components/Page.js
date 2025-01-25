import SideBar from "./SideBar";
import Content from "./Content";

function Page() {

    return(
        <>
        <div className="page d-flex">
            <SideBar />
            <Content />

        </div>
        </> 
    )
}

export default Page;