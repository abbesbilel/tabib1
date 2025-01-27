import SideBar from "../../components/SideBar";
import Content from "./components/Content";

function Page() {

    return (
        <>
            <div className="page d-flex">
                <SideBar />
                <Content />

            </div>
        </>
    )
}

export default Page;