import React from 'react'

interface Props{
    onChange:any;
    user:any
}
const UserDetails = (props:Props) => {
    const {onChange, user} = props;

    return (
        <form action="">
            <div className="middle-container">
                <div className="middle-container-box">
                    <div className="row-wrap-input-field">
                        <div className='wrap-input-field firstname'>
                            <label>Brand Name</label>
                            <input 
                                id={"brandName"}                                
                                type='text' 
                                name={"brandName"} 
                                defaultValue={user?.brandName}
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Input your First Name'
                            />
                        </div>
                        <div className='wrap-input-field brandType'>
                            <label htmlFor="brandName">Brand type</label>
                            {/* <select name="brandType" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select> */}
                            <input 

                                type='text'
                                name='brandType'
                                defaultValue={user?.brandType} 
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Input your Brand Type'
                            />
                        </div>
                    </div>

                    <div className="row-wrap-input-field">
                        <div className="wrap-input-field streetAdress">
                            <label>Street address</label>
                            <input 
                                type='text' 
                                name='streetAdress' 
                                defaultValue={user?.streetAdress}
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Input your streetAdress'
                            />
                        </div> 
                        <div className="wrap-input-field city">
                            <label>City</label>
                            <input
                                type='text' 
                                name='city'
                                defaultValue={user?.city}
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Input your Phone Number'
                            />
                        </div> 
                    </div>

                    <div className="row-wrap-input-field">
                        <div className="wrap-input-field password">
                            <label>Zip code *</label>
                            <input 
                                type='text' 
                                name='zipCode' 
                                defaultValue={user?.zipCode}
                                onChange={onChange}
                                placeholder='Create your zipCode'
                            />
                        </div>
                        <div className="wrap-input-field password">
                            <label>Tax ID number *</label>
                            <input 
                                type='text' 
                                name='taxIdNum'
                                defaultValue={user?.taxIdNum}
                                onChange={(e:any)=>onChange(e)}
                                placeholder='Confirm your taxIdNum'
                            />
                        </div> 
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserDetails