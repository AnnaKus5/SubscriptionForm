import FormSelectionAddOnsElement from "./FormSelectionAddOnsElement";

interface FormSelectionAddOnsProps {
    addOns: AddOnsChoice
    setAddOns: React.Dispatch<React.SetStateAction<AddOnsChoice>>
    planCosts: PlanCostStructure
    planDuration: "month" | "year"

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

const FormSelectionAddOns = ({addOns, setAddOns, planCosts, planDuration}: FormSelectionAddOnsProps) => {
    return ( 
        <div className="font-sans">
            <FormSelectionAddOnsElement title="Online service" description="Access to multiplayer games" type="onlineService" addOns={addOns} setAddOns={setAddOns} planCosts={planCosts} planDuration={planDuration} />
            <FormSelectionAddOnsElement title="Larger storage" description="Extra 1TB of cloud save" type="largerStorage" addOns={addOns} setAddOns={setAddOns} planCosts={planCosts} planDuration={planDuration} />
            <FormSelectionAddOnsElement title="Customizable profile" description="Custom theme on your profile" type="customProfile" addOns={addOns} setAddOns={setAddOns} planCosts={planCosts} planDuration={planDuration} />
        </div>
     );
}
 
export default FormSelectionAddOns;