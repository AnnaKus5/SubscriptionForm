import PlanElement from "./PlanElement"

interface SelectionPlanProps {
    selectedPlan: "arcade" | "advanced" | "pro"
    setSelectedPlan: React.Dispatch<React.SetStateAction<"arcade" | "advanced" | "pro">>
    planDuration: "month" | "year"
    setPlanDuration: React.Dispatch<React.SetStateAction<"month" | "year">>
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

const FormSelectionPlan = ({ selectedPlan, setSelectedPlan, planDuration, setPlanDuration, planCosts }: SelectionPlanProps) => {
    return (
        <div className="font-sans">
            <PlanElement
                planName="arcade"
                imgUrl="src\assets\images\icon-arcade.svg"
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                planDuration={planDuration}
                planCosts={planCosts} />
            <PlanElement
                planName="advanced"
                imgUrl="src\assets\images\icon-advanced.svg"
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                planDuration={planDuration}
                planCosts={planCosts} />
            <PlanElement
                planName="pro"
                imgUrl="src\assets\images\icon-pro.svg"
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                planDuration={planDuration}
                planCosts={planCosts} />
        <div className="flex items-center justify-center mt-4">
            <span 
                onClick={() => setPlanDuration("month")}
                className={`text-sm font-bold mr-2 cursor-pointer 
                ${planDuration === "month" ? "text-marineblue" : "text-coolGray"}`}>
                Monthly
            </span>
            
            <div 
                onClick={() => setPlanDuration(planDuration === "month" ? "year" : "month")} 
                className="relative w-14 h-6 my-2 rounded-full cursor-pointer bg-marineblue">
                <div 
                    className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform duration-300 
                    ${planDuration === "year" ? "transform translate-x-8" : "transform translate-x-1"}`}>
                </div>
            </div>

            <span 
                onClick={() => setPlanDuration("year")}
                className={`text-sm font-bold ml-2 cursor-pointer 
                ${planDuration === "year" ? "text-marineblue" : "text-coolGray"}`}>
                Yearly
            </span>
        </div>
        </div>
    );
}

export default FormSelectionPlan;