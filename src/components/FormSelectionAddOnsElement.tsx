interface AddOnsElementProps {
    title: string
    description: string
    type: keyof AddOnsChoice
    addOns: AddOnsChoice
    setAddOns: React.Dispatch<React.SetStateAction<AddOnsChoice>>
}

type AddOnsChoice = {
    onlineService: boolean
    largerStorage: boolean
    customProfile: boolean
}


const FormSelectionAddOnsElement = ({ title, description, type, addOns, setAddOns }: AddOnsElementProps) => {
    
    const handleChange = () => {
        setAddOns(prev => ({
            ...prev,
            [type]: !prev[type]
        }))
    }

    return (
        <div>
            <input type="checkbox" checked={addOns[type]} onChange={handleChange}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FormSelectionAddOnsElement;