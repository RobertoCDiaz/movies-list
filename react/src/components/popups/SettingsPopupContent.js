const SettingsPopupContent = () => {
    return (
        <div className="SettingsPopupContent">
            <h2>Tag options</h2>

            <div className="content options">
                <div className="option">
                    <input type="checkbox" name="public_tag" id="public_tag" />
                    <label htmlFor="public_tag">Make tag public</label>
                </div>
                <div className="option">
                    <input type="checkbox" name="allow_collaboration" id="allow_collaboration" />
                    <label htmlFor="allow_collaboration">Let others collaborate</label>
                </div>
            </div>

            <h2>Delete tag</h2>
            <p className="content">This option will delete only this tag. Movies tagged will remain in your pending.</p>

            <div className="button">Delete</div>
        </div>
    );
}
 
export default SettingsPopupContent;