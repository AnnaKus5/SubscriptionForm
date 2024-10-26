interface AddOnsElementProps {
    title: string
    description: string
    type: keyof AddOnsChoice
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

const FormSelectionAddOnsElement = ({ title, description, type, addOns, setAddOns, planCosts, planDuration }: AddOnsElementProps) => {

    const handleChange = () => {
        setAddOns(prev => ({
            ...prev,
            [type]: !prev[type]
        }))
    }

    return (
        <label className="block w-full cursor-pointer">
            <div className={`
            flex items-center p-4 mb-3 rounded-lg border-2
            ${addOns[type] ? 'border-purplishblue bg-magnolia' : 'border-lightgray bg-white'}
            hover:border-purplishblue transition-colors duration-200
          `}>
                <input
                    type="checkbox"
                    checked={addOns[type]}
                    onChange={handleChange}
                    className="
                w-5 h-5 rounded-md border-lightgray
                text-purplishblue focus:ring-purplishblue
                cursor-pointer mr-4
              "
                />

                <div className="flex-grow text-left">
                    <p className="text-marineblue font-bold">{title}</p>
                    <p className="text-coolGray text-sm">{description}</p>
                </div>

                { planDuration === "month" ?
                    <span className="text-purplishblue text-sm">
                        +${planCosts.additional[type].month}/mo
                    </span> :
                    <span className="text-purplishblue text-sm">
                        +${planCosts.additional[type].year}/yo

                    </span>
                }
            </div>
        </label>
    );
}

export default FormSelectionAddOnsElement;