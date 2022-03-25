import { useState } from "react";

const Popup = ({ content, dialog }) => {
    const [dialogHidden, setDialogHidden] = useState(true);

    const handleOnClick = () => {
        setDialogHidden(!dialogHidden);
    }

    return (
        <div className="Popup">
            <div onClick={handleOnClick}>
                {content}
            </div>
            <div className={`PopupContent ${dialogHidden ? 'hidden' : ''}`}>
                {dialog}
            </div>
        </div>
    );
}
 
export default Popup;