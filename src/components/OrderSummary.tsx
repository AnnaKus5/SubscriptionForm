interface OrderSummaryProps {
    selectedPlan: "arcade" | "advanced" | "pro"
    planDuration: "month" | "year"
    addOns: AddOnsChoice
    planCosts: PlanCostStructure
}

type AddOnsChoice = {
    onlineService: boolean
    largerStorage: boolean
    customProfile: boolean
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

const OrderSummary = ({selectedPlan, planDuration, addOns, planCosts} : OrderSummaryProps) => {

    const planName = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)

    const addOnsLabels: { [key in keyof AddOnsChoice]: string } = {
        onlineService: "Online service",
        largerStorage: "Larger storage",
        customProfile: "Custom profile"
    }

    const addOnsElements = []
    for (const [key, value] of Object.entries(addOns)) {
        if (value) {
            addOnsElements.push(
                <div key={key}>
                    <span>{addOnsLabels[key as keyof AddOnsChoice]}</span>
                    <span>${planCosts.additional[key as keyof AdditionalCosts][planDuration]}/{planDuration === "month" ? "mo" : "yr"}</span>
                </div>
            )
        }
    }

    return (
        <>
        <div>
            <div>
            <p>{planName} ({planDuration === "month" ? "Monthly": "Yearly"})</p>
            {/* not link, p element with onClick event? */}
            <p><a href="">Change</a></p>
            </div>
            <p>${planCosts[selectedPlan][planDuration]}/{planDuration === "month" ? "mo" : "yr"}</p>
        </div>
        <div>
            {addOnsElements}
        </div>
        </>
    );
}

export default OrderSummary;