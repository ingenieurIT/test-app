import React, { Fragment } from 'react'

interface StepContentProps{
    steps: Array<any>;
    currentStepIndex: number
}

interface IndexProps{
    steps:any;
    currentStepIndex?: number;
}

const IndexCircle = (props:IndexProps) => {
    const data = [
        {
            id: 1,
            name: "Your profile"
        },
        {
            id: 2,
            name: "Business Information"
        },
        {
            id: 3,
            name: "Mores informations"
        },
    ]
    const { currentStepIndex = 0, steps = [] } = props;
    return (
        <Fragment>
            {data.map((item:any, index:number)=>(
                    <div
                        key={index}
                        className={`index-item-box 
                        ${currentStepIndex >= item.id ?  "item-center-radius" : "simple-item"}  
                        ${currentStepIndex <= item.id ? "item-right-radius" : "item-simple-radius" }
                        ${currentStepIndex === 3 ? "item-simple-radius" : "" }
                        `}
                    >
                        <div className={`${currentStepIndex >= item.id ? "index-circle" : "index-circle-black"}`}>
                            <label className=" number">{item.id}</label>
                        </div>
                        <label className={`${currentStepIndex >= item.id ? "index-circle-label" : ""}`}>{item.name}</label>
                    </div>
                ))
            }
        </Fragment>
    )
}

const StepContent = (props:StepContentProps) => {
    
    const { currentStepIndex, steps} = props;
    
    return (
        <div className="content-form">
            <div className="step1-form">
                <div className="top-bar">
                        <IndexCircle steps={steps} currentStepIndex={currentStepIndex}/>
                </div>
                <div className="header-section">
                    <div className="your-profile">
                        <label className="profile-step">{steps[currentStepIndex -1]?.step}</label>
                        <label className="profile-text">{steps[currentStepIndex -1]?.title}</label>
                        <label className="profile-description">{steps[currentStepIndex -1]?.description}</label>
                    </div>
                </div>

                {steps.length > 0 ?
                    (steps[currentStepIndex - 1] ? steps[currentStepIndex -1].component() :<></>) : <></>
                }
            </div>
            
        </div>
    )
}

export default StepContent