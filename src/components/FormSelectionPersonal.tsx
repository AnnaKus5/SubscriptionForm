import { ChangeEvent } from "react";
import TextInput from "./TextInput";

interface FormSelectionPersonalProps {
    setPersonalInfo: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        phone: string;
    }>>
    personalInfo: {
        name: string
        email: string
        phone: string
    }
}

const FormSelectionPersonal = ({ setPersonalInfo, personalInfo }: FormSelectionPersonalProps) => {

    // onChange function to update state with user input
    return (
        <div className="font-sans">
            <TextInput title="Name" placeholder="e.g. Stephen King" personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <TextInput title="E-mail" placeholder="e.g. stephenking@lorem.com" personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <TextInput title="Phone" placeholder="e.g. +1 234 567 890" personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        </div>
    );
}

export default FormSelectionPersonal;

