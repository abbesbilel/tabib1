import React, { useState } from 'react';
import ForgotPassword from './components/ForgotPassword';
import VerifyCode from './components/VerifyCode';
import ResetPassword from './components/ResetPassword';
import Success from './components/Success';
import './ForgotPass.css'

function ForgotPass() {
    const [step, setStep] = useState(1);

    const goToNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className="app">
            {step === 1 && <ForgotPassword onNext={goToNextStep} />}
            {step === 2 && <VerifyCode onNext={goToNextStep} />}
            {step === 3 && <ResetPassword onNext={goToNextStep}/>}
            {step === 4 && <Success/>}
        </div>
    );
}

export default ForgotPass;
