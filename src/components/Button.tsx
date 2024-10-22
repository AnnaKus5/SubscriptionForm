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
      <button onClick={handleClick}>{getButtonLabel()}</button>
    )
}

export default Button;