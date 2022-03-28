import Catalog from "./Catalog";
import Popup from "./Popup";
import FilterPopupContent from "./popups/FilterPopupContent";
import SettingsPopupContent from "./popups/SettingsPopupContent";
import Searchbar from "./Searchbar";

const Main = () => {
    return (
        <div className="Main">
            <h1>@user's pending movies list</h1>

            <div className="tag-header">
                <div className="header">
                    <h2>all movies</h2>
                    <p>This is @robertodiaz's whole pending movies list</p>
                </div>

                <Popup
                    content={<span className="material-icons">
                                filter_list
                    </span>}
                    dialog={<FilterPopupContent/>}
                />
                
                <Popup 
                    content={<span className="material-icons">
                        settings
                    </span>}
                    dialog={<SettingsPopupContent />}/>

                

            </div>
            
            <Searchbar />

            <Catalog />
        </div>
    );
}
 
export default Main;