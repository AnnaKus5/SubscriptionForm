import { useState } from "react";
import FormSelectionPersonal from "./FormSelectionPersonal";
import FormSelectionPlan from "./FormSelectionPlan";
import FormSelectionAddOns from "./FormSelectionAddOns";
import OrderSummary from "./OrderSummary";

// interface czy type

// type FormContainerProps
interface FormContainerProps {
    title: string
    description: string
    step: number
}

type SelectedPlan = "arcade" | "advanced" | "pro"

type PlanDuration = "month" | "year"

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

const FormContainer = ({ title, description, step }: FormContainerProps) => {

    // state from user answers 

    const [personalInfo, setPersonalInfo] = useState(
        {
            name: "",
            email: "",
            phone: ""
        }
    )
    // add unions types in selectedPlan and planDuration
    const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>("arcade")
    const [planDuration, setPlanDuration] = useState<PlanDuration>("month")
    const [addOns, setAddOns] = useState<AddOnsChoice>(
        {
            onlineService: false,
            largerStorage: false,
            customProfile: false
        }
    )

    const planCosts: PlanCostStructure = {
        arcade: {
            month: 9,
            year: 90
        },
        advanced: {
            month: 12,
            year: 120
        },
        pro: {
            month: 15,
            year: 150
        },
        additional: {
            onlineService: {
                month: 1,
                year: 10
            },
            largerStorage: {
                month: 1,
                year: 10
            },
            customProfile: {
                month: 1,
                year: 10
            }
        },
    }


    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {
                step === 0 && 
            <FormSelectionPersonal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            }
            {
                step === 1 &&
            <FormSelectionPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planDuration={planDuration} setPlanDuration={setPlanDuration} planCosts={planCosts} />
            }
            {
                step === 2 &&
            <FormSelectionAddOns addOns={addOns} setAddOns={setAddOns}/>
            }
            {
                step === 3 &&
            <OrderSummary selectedPlan={selectedPlan} planDuration={planDuration} addOns={addOns} planCosts={planCosts} />
            }
        </div>
    );
}

export default FormContainer;

// FormSelectionPersonal
// FormSelectionPlan
// FormSelectionAddOns
// OrderSummary 

// TO DO:
// AddOns elements