import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../userCreateForm/user.signup.scss';

const Success = () => {

    const [countdown, setCountdown] = React.useState(2);
    const navigate = useNavigate();
    
    // countdown from 3 to 0 and redirect to home page
    useEffect(() => {
            const interval = setInterval(() => {
                setCountdown((countdown) => countdown - 1);
                }, 2000);
                if (countdown === 0) {
                clearInterval(interval);
                navigate("/");
            }
        return () => clearInterval(interval);
    }, [countdown, navigate]);

    return (
        <div>
            <div className="main-success">
                <div className="main-second">
                    <div className="success-img">
                        <img 
                            alt="success-check"
                            width={200}
                            height={200}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7Srh4lZuDfc5boO1t78GD27IZHBuB25jgg&usqp=CAU"}
                        />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                        <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                        >
                        Account creation successfully completed...
                        </h3>
                        {/* Display redirecting message to the user */}
                        <div className="">
                        <p className="text-sm text-gray-500 w-96">
                            You will be redirected to the subscriptions page in{" "}
                            <span className="font-bold">{countdown}</span> seconds.
                        </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Success