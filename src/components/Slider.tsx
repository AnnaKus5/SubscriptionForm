import Steps from "./Steps";

interface SliderProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const Slider = ({setStep}: SliderProps) => {
    return ( 
        <div>
            <Steps setStep={setStep} />
        </div>
     );
}
 
export default Slider;