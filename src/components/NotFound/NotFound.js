import React from 'react';
import notFoundPng from '../../assets/notfound.png';
import './NotFound.css'

function NotFound(){
    return(
        <div className="container not-found-outer-div">
            <div className="not-found-image-outer-div">
                <img className="not-found-image" src={notFoundPng} alt='Not Found Png'/>
            </div>
            <div>
                <h1 style={{marginTop: '30px',textAlign: 'center'}}>404 <br></br>Page Not Found</h1>
            </div>
        </div>
    )
}

export default NotFound;