import Steps from "./Steps";

interface SliderProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
    step: number
}

const Slider = ({setStep, step}: SliderProps) => {
    return ( 
        <div className="h-44 bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
            <Steps setStep={setStep} step={step} />
        </div>
     );
}
 
export default Slider;