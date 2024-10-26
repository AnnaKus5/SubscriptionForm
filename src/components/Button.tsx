interface ButtonProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
    step: number
    direction: string
}


const Button: React.FC<ButtonProps> = ({ step, setStep, direction }) => {

    const getButtonLabel = () => {
        if (direction === "back") {
            return "Go back"
        }
        else {
            return step < 3 ? "Next step" : "Confirm"
        }
    }

    const handleClick = () => {
        if (direction === "next") {
            setStep(prevStep => prevStep + 1)
        }
        else if (direction === "back") {
            setStep(prevStep => prevStep - 1)
        }
    }


    return (
        <div className="flex justify-start font-sans font-bold">
            <button
                onClick={handleClick}
                className={`p-2 m-2 font-sans py-2 rounded-lg hover:cursor-pointer
                    ${direction === "back" && step === 0 ? "hidden" : ""}
                    ${direction === "back" ? "bg-white text-coolGray hover:text-marineblue" : "bg-marineblue text-white hover:bg-purplishblue"}`}>
                {getButtonLabel()}
            </button>
        </div>
    )
}

export default Button;