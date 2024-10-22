interface StepsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const Steps = ({setStep}: StepsProps) => {
    return (
    <div>
        <span onClick={() => setStep(0)}>1</span>
        <span onClick={() => setStep(1)}>2</span>
        <span onClick={() => setStep(2)}>3</span>
        <span onClick={() => setStep(3)}>4</span>
    </div>
    );
}

export default Steps;