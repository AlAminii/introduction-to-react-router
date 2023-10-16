import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <div className="flex display-flex gap-10">
            <Header></Header>
            </div>
            <h1>this is home component</h1>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;