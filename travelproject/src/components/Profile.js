import React from 'react';
import './Profile.css';

function Profile({ isVisible }) {
    if (!isVisible) {
        return null; // Do not render if not visible
    }

    return (
        <div className='todoListDiv'>
            <img src="path_to_profile_picture.jpg" alt="Profile" className="profile-photo" />
            <div className="profile-info">
                <strong>John Doe</strong>
                Travel Enthusiast
            </div>
            <div className="profile-info">
                Email: john.doe@example.com
            </div>
            <div className="profile-info">
                Location: New York, USA
            </div>
            <div className="profile-info">
                Member since: January 2020
            </div>
            <div className="profile-info">
                Interests: Beaches, Mountains, Historical Sites
            </div>
        </div>
    );
}

export default Profile;
