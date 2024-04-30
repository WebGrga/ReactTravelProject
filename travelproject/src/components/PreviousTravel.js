import React from 'react';
import './PreviousTravel.css';
import Montgenevre from '../images/montgenevre.jpg';
import Paris from '../images/Paris.jpg';
import Maldives from '../images/Maldives.jpg';

function PreviousTravel({ isVisible }) {
    if (!isVisible) {
        return null; // Do not render if not visible
    }

    const locations = [
        { name: "Paris", image: Paris },
        { name: "Montgenevre", image: Montgenevre },
        { name: "Maldives", image: Maldives }
    ];

    return (
        <div className='todoListDiv'>
            {locations.map((location, index) => (
                <div className="card-container" key={index}>
                    <div className="card-flip">
                        <div className="card-front">
                            <img src={location.image} alt={location.name} />
                        </div>
                        <div className="card-back">
                            {location.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PreviousTravel;
