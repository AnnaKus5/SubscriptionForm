import { useState } from "react"
import Slider from "./Slider"
import FormContainer from "./FormContainer"
import Button from "./Button"
import ThankYouScreen from "./ThankYouScreen"

function SubscriptionMain() {

    const [step, setStep] = useState(0)

    const stepContent = [
        {
            title: "Personal Info",
            description: "Please provide your name, email address, and phone number.",
        },
        {
            title: "Select your plan",
            description: "You have the option of monthly or yearly billing.",
        },
        {
            title: "Pick add-ons",
            description: "Add-ons help enhance your gaming experience.",
        },
        {
            title: "Finishing up",
            description: "Double-check everything looks OK before confirming.",
        },
    ]

    const isValid = step >= 0 && step < stepContent.length

    const { title, description } = isValid ? stepContent[step] : { title: "", description: ""}


    return (
        <div>
            <Slider setStep={setStep}/>
            {step === stepContent.length ?
                <ThankYouScreen /> :
                <FormContainer step={step} title={title} description={description} />
            }
            {(step > 0 && step < stepContent.length) && <Button step={step} setStep={setStep} direction="back"/>}
            {step < stepContent.length && <Button step={step} setStep={setStep} direction="next"/>}
        </div>
    )
}

export default SubscriptionMain;