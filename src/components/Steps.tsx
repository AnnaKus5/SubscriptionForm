interface StepsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
    step: number
}

const Steps = ({setStep, step}: StepsProps) => {
    return (
        <div className="flex justify-center space-x-4 mb-6 pt-8">
          {/* Step 1 */}
          <span 
            onClick={() => setStep(0)} 
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
              ${step === 0 ? 'bg-lightBlue text-marineblue' : 'bg-transparent border-2 border-lightBlue text-lightBlue'}`}
          >
            1
          </span>
    
          {/* Step 2 */}
          <span 
            onClick={() => setStep(1)} 
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
              ${step === 1 ? 'bg-lightBlue text-marineblue' : 'bg-transparent border-2 border-lightBlue text-lightBlue'}`}
          >
            2
          </span>
    
          {/* Step 3 */}
          <span 
            onClick={() => setStep(2)} 
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
              ${step === 2 ? 'bg-lightBlue text-marineblue' : 'bg-transparent border-2 border-lightBlue text-lightBlue'}`}
          >
            3
          </span>
    
          {/* Step 4 */}
          <span 
            onClick={() => setStep(3)} 
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
              ${step === 3 ? 'bg-lightBlue text-marineblue' : 'bg-transparent border-2 border-lightBlue text-lightBlue'}`}
          >
            4
          </span>
        </div>
      );
}

export default Steps;