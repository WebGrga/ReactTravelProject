import React, { useState } from 'react';
import './HomeSec.css';
import avatar from '../images/Profile1.png';
import save from '../images/Bookmark.png';
function HomeSec() {


    return (
        <div className='userDiv'>
            <button><img src={avatar} alt='avatar'></img></button>
            <h3>Welcome</h3>
            <button><img src={save} alt='save'></img></button>
        </div>
    );
}


export default HomeSec;