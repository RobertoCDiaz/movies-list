import SidebarTags from "./SidebarTags";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <h1>My tags</h1>
            <SidebarTags />
            <div className="button">
                Create tag
            </div>
        </div>
    );
}
 
export default Sidebar;