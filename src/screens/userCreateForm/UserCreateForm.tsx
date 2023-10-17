import React, { FunctionComponent, useEffect, useState } from 'react';
import './user.signup.scss';
import { StepType } from '@global/src/types/StepType';
import { UserType, User } from '../../../src/types/UserType';
import StepButtons from '../../components/userSignup/StepButtons';
import UserInfos from '../../components/userSignup//UserInfos';
import UserDetails from '../../components/userSignup//UserDetails';
import UserProfessionalData from '../../components/userSignup/UserProfessionalData';
import StepContent from '../../components/userSignup/StepContent';

interface Props{

}

const UserCreateForm:FunctionComponent = (props:Props) => {

    const [currentStep, setCurrentstep] = useState<number>(1);
    const [steps, setSteps] = useState<Array<StepType>>([]);
    const [user, SetUser] = useState<Array<UserType>>([]);
    
    useEffect(() => {

        // methode used to get the data entered by the User
        const handleInputChange = (e:any) =>{
            e.preventDefault();
            const { name, value }  = e.target;
            SetUser({
                ...user,
                [name]: value
            });
        }   
    
        setSteps([
            {
                title: 'Your profile',
                step: 'Step 1',
                description:'Enter the login information for your account. You will be able to create additional users after registering',
                component: () => <UserInfos 
                                    user={user}
                                    onChange={(e:any)=>handleInputChange(e)} 
                                />,
            },
            {
                title: 'Business Information',
                step: 'Step 2',
                description:'Enter Your Business and professional informations',
                component: () => <UserDetails 
                                    user={user} 
                                    onChange={(e:any)=>handleInputChange(e)}/>,
            },
            {
                title: 'Additional Informations',
                step: 'Step 3',
                description:'Give more informations about your company',
                component: () => <UserProfessionalData 
                                    user={user} 
                                    onChange={(e:any)=>handleInputChange(e)} />,
            },]
        )
        
    }, [user])
    
    return (
        <div id="create-form-steps">
            <div>
                <StepContent 
                    currentStepIndex={currentStep}
                    steps={steps}
                />
            </div>
            <StepButtons 
                user={user}
                currentStepIndex={currentStep} 
                setCurrentStep={setCurrentstep} 
                steps={steps}
            />
        </div>
    )
}

export default UserCreateForm