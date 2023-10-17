import { UserType } from '../../types/UserType'
import React from 'react'

interface Props{
    onChange?: any
    user?: any
    
}

const UserInfos = (props:Props) => {
    const {onChange, user} = props;

    return (
            <form action="">
                <div className="middle-container">
                    <div className="middle-container-box">
                        <div className="row-wrap-input-field">
                            <div className='wrap-input-field firstname'>
                                <label>First Name</label>
                                <input type='text' 
                                    id={"firstname"}
                                    name={"firstname"} 
                                    value={user?.firstname}
                                    onChange={onChange}
                                    placeholder='Input your First Name'
                                />
                            </div>
                            <div className='wrap-input-field lastname'>
                                <label>Last Name</label>
                                <input 
                                    type='text'
                                    id={"lastname"}
                                    name={"lastname"}
                                    value={user?.lastname} 
                                    onChange={onChange}
                                    placeholder='Input your Last Name'
                                />
                            </div>
                        </div>

                        <div className="row-wrap-input-field">
                            <div className="wrap-input-field email">
                                <label>Email</label>
                                <input 
                                    type='email' 
                                    id={"email"}
                                    name={"email"}
                                    value={user?.email}
                                    onChange={onChange}
                                    placeholder='Input your email'
                                />
                            </div> 
                            <div className="wrap-input-field phoneNumber">
                                <label>Phone number</label>
                                <input 
                                    type='text'
                                    id={"phoneNumber"} 
                                    name={"phoneNumber"}
                                    value={user?.phoneNumber}
                                    onChange={onChange}
                                    placeholder='Input your Phone Number'
                                />
                            </div> 
                        </div>

                        <div className="row-wrap-input-field">
                            <div className="wrap-input-field password">
                                <label>Password *</label>
                                <input 
                                    type='password' 
                                    id={"password"}
                                    name={"password"} 
                                    value={user?.password}
                                    onChange={onChange}
                                    placeholder='Create your password'
                                />
                            </div> 

                            {/* this attribute is not regisered on the User type but can be used for password confirmation. So i wont save the state for it */}
                            <div className="wrap-input-field password">
                                <label>Confirm Password *</label>
                                <input 
                                    type='password'
                                    id={"confirmPassword"} 
                                    name='confirmPassword'
                                    onChange={onChange}
                                    placeholder='Confirm your password'
                                />
                            </div> 
                        </div>
                    </div>
                </div>
            </form>
        )
    }

export default UserInfos