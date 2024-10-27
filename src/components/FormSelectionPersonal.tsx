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

    return (
        <div className="font-sans">
            <TextInput title="name"  placeholder="e.g. Stephen King" personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <TextInput title="email" placeholder="e.g. stephenking@lorem.com" personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <TextInput title="phone" placeholder="e.g. +1 234 567 890" personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        </div>
    );
}

export default FormSelectionPersonal;

