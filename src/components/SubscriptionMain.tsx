import { useState } from "react"
import Slider from "./Slider"
import FormContainer from "./FormContainer"
import Button from "./Button"
import ThankYouScreen from "./ThankYouScreen"

function SubscriptionMain() {

    const [step, setStep] = useState(1)

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

    const { title, description } = isValid ? stepContent[step] : { title: "", description: "" }


    return (
        <div>
            <div className="bg-magnolia text-marineblue">
                <Slider setStep={setStep} step={step} />
                {step === stepContent.length ?
                    <ThankYouScreen /> :
                    <FormContainer step={step} setStep={setStep} title={title} description={description} />
                }
            </div>
            {
                step < 4 &&            
            <div className="flex justify-between">
                <Button step={step} setStep={setStep} direction="back" />
                <Button step={step} setStep={setStep} direction="next" />
            </div>
            }
        </div>
    )
}

export default SubscriptionMain;