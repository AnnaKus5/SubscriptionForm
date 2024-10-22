import FormSelectionAddOnsElement from "./FormSelectionAddOnsElement";

interface FormSelectionAddOnsProps {
    addOns: AddOnsChoice
    setAddOns: React.Dispatch<React.SetStateAction<AddOnsChoice>>
}

type AddOnsChoice = {
    onlineService: boolean
    largerStorage: boolean
    customProfile: boolean
}

const FormSelectionAddOns = ({addOns, setAddOns}: FormSelectionAddOnsProps) => {
    return ( 
        <div>
            <FormSelectionAddOnsElement title="Online service" description="Access to multiplayer games" type="onlineService" addOns={addOns} setAddOns={setAddOns} />
            <FormSelectionAddOnsElement title="Larger storage" description="Extra 1TB of cloud save" type="largerStorage" addOns={addOns} setAddOns={setAddOns} />
            <FormSelectionAddOnsElement title="Customizable profile" description="Custom theme on your profile" type="customProfile" addOns={addOns} setAddOns={setAddOns} />
        </div>
     );
}
 
export default FormSelectionAddOns;