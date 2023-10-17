import React from 'react'

interface Props{
    onChange:any;
    user:any
}
const UserProfessionalData = (props:Props) => {
    const {onChange, user} = props;
    
    return (
        <form action="">
            <div className="middle-container">
                <div className="middle-container-box">
                    <div className="row-wrap-input-field">
                        <div className='wrap-input-field firstname'>
                            <label>Company service</label>
                            <input 
                                id={"service"}                                
                                type='text' 
                                name={"service"} 
                                defaultValue={user?.service}
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Enter a service for you organization'
                            />
                        </div>
                        <div className='wrap-input-field companyEmail'>
                            <label>Company's email </label>
                            <input 
                                type='email'
                                name='companyEmail'
                                defaultValue={user?.companyEmail} 
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Input your Brand Type'
                            />
                        </div>
                    </div>
                    <div className="wrap-description">
                        <div className="company-about">
                            <label>Company About</label>
                            <textarea 
                                name='companyAbout' 
                                defaultValue={user?.companyAbout}
                                onChange={(e:any)=>onChange(e)}
                            />
                        </div> 
                    </div>  
                </div>
            </div>
        </form>
    )
}

export default UserProfessionalData;