interface PlanElementProps {
    planName: "arcade" | "advanced" | "pro"
    imgUrl: string
    selectedPlan: string
    setSelectedPlan: React.Dispatch<React.SetStateAction<"arcade" | "advanced" | "pro">>
    planDuration: "month" | "year"
    planCosts: PlanCostStructure
}

type PlanCosts = {
    month: number
    year: number
}

type AdditionalCosts = {
    onlineService: {
        month: number
        year: number
    }
    largerStorage: {
        month: number
        year: number
    }
    customProfile: {
        month: number
        year: number
    }
}

interface PlanCostStructure {
    arcade: PlanCosts
    advanced: PlanCosts
    pro: PlanCosts
    additional: AdditionalCosts
}

const PlanElement = ({planName, imgUrl, selectedPlan, setSelectedPlan, planDuration, planCosts} : PlanElementProps) => {
    
    const planNameUi = planName.charAt(0).toUpperCase() + planName.slice(1)
    
    return (
        <div onClick={() => setSelectedPlan(planName)}
            className={`flex w-full py-2 m-auto my-3 border-2 rounded-lg hover:cursor-pointernpn ${selectedPlan === planName ? 'border-purplishblue bg-alabaster' : 'border-lightgray hover:border-purplishblue'} transition-colors`}>
            <img
                src={imgUrl}
                alt=""
                className="m-3" />
            <div className="flex flex-col justify-center text-left">
                <p className="font-bold">{planNameUi}</p>
                <p className="text-coolGray text-sm">
                    {planDuration === "month" 
                        ? `$${planCosts[planName].month}/mo` 
                        : `$${planCosts[planName].year}/yr`}
                </p>
                {planDuration === "year" && <p className="text-xs text-marineblue">2 months free</p>}
            </div>
        </div>
    );
}
 
export default PlanElement;