import { useState } from "react";

const FilterPopupContent = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const platforms = {
        'netflix': {
            name: 'Netflix',
            iconSrc: 'https://www.justwatch.com/images/icon/207360008/s100/icon.webp',
        },
        'primevideo': {
            name: 'Amazon Prime Video',
            iconSrc: 'https://www.justwatch.com/images/icon/52449861/s100/icon.webp'
        },
        'disneyplus': {
            name: 'Disney+',
            iconSrc: 'https://www.justwatch.com/images/icon/147638351/s100/icon.webp'
        },
        'hbomax': {
            name: 'HBO Max',
            iconSrc: 'https://www.justwatch.com/images/icon/182948653/s100/icon.webp'
        },
        'starplus': {
            name: 'Star+',
            iconSrc: 'https://www.justwatch.com/images/icon/250272035/s100/icon.webp'
        },
    }

    const handlePlatformSelected = (p) => {
        
    }

    return (<div className="FilterPopupContent">
        <h3 className="title">Filter movies by platform</h3>
        <div className="platforms">
            {Object.keys(platforms).map(p => (
                <img 
                    key={p} 
                    src={platforms[p].iconSrc} 
                    onClick={() => handlePlatformSelected(p)}
                    alt={platforms[p].name} 
                    className="platform-icon" 
                    title={platforms[p].name}/>
            ))}
        </div>
    </div>);
}
 
export default FilterPopupContent;