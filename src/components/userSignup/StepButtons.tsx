import React, { Fragment } from 'react'
import '../../screens/userCreateForm/user.signup.scss';
import { useNavigate } from 'react-router-dom';

interface Props{
    currentStepIndex: number,
    steps: any,
    setCurrentStep: any,
    setProgress?: any,
    progress?: number
    user:any
}

const StepButtons = (props:Props) => {

    const {
        currentStepIndex, 
        setCurrentStep,
        steps,
        user,
        setProgress,
        progress, 
    } = props;

    const navigate = useNavigate();
    const redirectToSuccessPage = (path:string) =>{
        navigate(path)
    }

    // aller au composant suivant
    const previous = () => {
        setCurrentStep(
            currentStepIndex <= 1 ? currentStepIndex : currentStepIndex - 1
        );
    };

    // revenir au composant precedent
    const next = () => {
        setCurrentStep(
            currentStepIndex >= steps.length ? currentStepIndex : currentStepIndex + 1
        );
        if (currentStepIndex === steps.length){
            // Print all user data on console
            console.log("USER DATA", user)
            redirectToSuccessPage("/success/");
        }
    };

    return (
        <div>
            <div className="btn-control">
                { currentStepIndex <=1 ? <div style={{width:'122px'}}></div> :  
                    <div onClick={()=>previous()} className="btn previous">
                        <label>Previous</label>
                    </div>
                }
                <div onClick={()=>next()} className={`${currentStepIndex === steps.length ? "btn-finish" : "btn"} `}>
                    <label>
                        {currentStepIndex === steps.length ? "Submit" : "Next"}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default StepButtons