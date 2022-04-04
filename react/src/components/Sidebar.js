import { Link } from "react-router-dom";
import SidebarSession from "./SidebarSession";
import SidebarTags from "./SidebarTags";

const Sidebar = () => {

    return (
        <div className="Sidebar">
            <div className="main-content">
                <h1>My tags</h1>
                <SidebarTags />
                <div className="button">
                    Create tag
                </div>
            </div>

            <SidebarSession />
        </div>
    );
}
 
export default Sidebar;