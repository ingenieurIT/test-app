import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const redirectToCreateUser = (path:string) =>{
        navigate(path)
    }

    return (
        <div id="home-page">
           <div className="main-container">
                <h1 className="home-test">Home page</h1>
                <div 
                    onClick={()=>redirectToCreateUser('/create-user/')}
                    className="button-get-started">
                    <label >Get started</label>
                </div>
                
            </div> 
        </div>
        
    )
}

export default HomePage;