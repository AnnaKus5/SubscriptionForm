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
        <div>
            <div onClick={() => setSelectedPlan("arcade")}>
                <img src="src\assets\images\icon-arcade.svg" alt="" />
                <div>
                    <p>Arcade</p>
                    {
                        planDuration === "month" ?
                            <p>${planCosts.arcade.month}/mo</p> :
                            <p>${planCosts.arcade.year}/yo</p>
                    }
                </div>
            </div>
            <div onClick={() => setSelectedPlan("advanced")}>
                <img src="src\assets\images\icon-advanced.svg" alt="" />
                <div>
                    <p>Advanced</p>
                    {
                        planDuration === "month" ?
                            <p>${planCosts.advanced.month}/mo</p> :
                            <p>${planCosts.advanced.year}/yo</p>
                    }
                </div>
            </div>
            <div onClick={() => setSelectedPlan("pro")}>
                <img src="src\assets\images\icon-pro.svg" alt="" />
                <div>
                    <p>Pro</p>
                    {
                        planDuration === "month" ?
                            <p>${planCosts.pro.month}/mo</p> :
                            <p>${planCosts.pro.year}/yo</p>
                    }
                </div>
            </div>
            <div>
                <span onClick={() => setPlanDuration("month")}>Monthly</span>
                {
                    planDuration === "month" ?
                        <span>&gt;</span> :
                        <span>&lt;</span>
                }
                <span onClick={() => setPlanDuration("year")}>Yearly</span>
            </div>
        </div>
    );
}

export default FormSelectionPlan;