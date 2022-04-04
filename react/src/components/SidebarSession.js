import { useEffect, useState } from "react";
import Popup from './Popup'
import LoginPopupContent from "./popups/LoginPopupContent";

const SidebarSession = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3333/session-info').then(res => res.json()).then(response => {
            setIsLogged(response.isLogged);
        });
    });

    return (
        <div className="SidebarSession">
            {
                isLogged ?
                (<div className="logged-in">
                    <p>Logged in as @robertodiaz</p>
                    <p className="logout">
                        <span className="material-icons">logout</span>
                        Logout
                    </p>
                </div>) :
                (<div className="not-logged-in">
                    <Popup 
                        content={<p className="logout">
                            <span className="material-icons">login</span>
                            Login
                        </p>}
                        dialog={<LoginPopupContent />}
                        global={true}
                    />
                </div>)
            }
            
        </div>
    );
}
 
export default SidebarSession;