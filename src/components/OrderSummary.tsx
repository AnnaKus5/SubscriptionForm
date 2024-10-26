interface OrderSummaryProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
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

const OrderSummary = ({setStep, selectedPlan, planDuration, addOns, planCosts} : OrderSummaryProps) => {

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

    const total = Object.entries(addOns)
    .filter(([_, value]) => value)
    .reduce((sum, [key]) => {
      return sum + planCosts.additional[key as keyof AdditionalCosts][planDuration];
    }, planCosts[selectedPlan][planDuration]);

    return (
        <div className="rounded-lg">
          {/* Main summary section with gray background */}
          <div className="bg-magnolia rounded-lg p-4">
            {/* Plan Section with bottom border */}
            <div className="border-b border-lightgray pb-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-marineblue font-bold">
                    {planName} ({planDuration === "month" ? "Monthly" : "Yearly"})
                  </p>
                  <p 
                    onClick={() => setStep(1)}
                    className="text-coolGray underline decoration-1 text-sm text-left hover:text-purplishblue hover:cursor-pointer"
                  >
                    Change
                  </p>
                </div>
                <p className="text-marineblue font-bold">
                  ${planCosts[selectedPlan][planDuration]}/{planDuration === "month" ? "mo" : "yr"}
                </p>
              </div>
            </div>
    
            {/* Add-ons Section */}
            <div className="space-y-4 mt-4">
              {addOnsElements.map((element) => (
                <div key={element.key} className="flex justify-between items-center">
                  <span className="text-coolGray text-sm">{element.props.children[0]}</span>
                  <span className="text-marineblue text-sm">{element.props.children[1]}</span>
                </div>
              ))}
            </div>
          </div>
    
          {/* Total Section on white background */}
          <div className="flex justify-between items-center p-4 bg-white">
            <p className="text-coolGray text-sm">
              Total (per {planDuration === "month" ? "month" : "year"})
            </p>
            <p className="text-purplishblue font-bold text-xl">
              +${total}/{planDuration === "month" ? "mo" : "yr"}
            </p>
          </div>
        </div>
      );
}

export default OrderSummary;