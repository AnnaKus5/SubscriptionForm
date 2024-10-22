import { ChangeEvent } from "react";

interface TextInputProps {
    title: string;
    placeholder: string;
    personalInfo: {
        name: string
        email: string
        phone: string
    }
    setPersonalInfo: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        phone: string;
    }>>
}


const TextInput = ({ title, placeholder, personalInfo, setPersonalInfo }: TextInputProps) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPersonalInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        })
        )
    }

    return (
        <div>
            <label htmlFor={title}>{title}</label>
            <input type="text" name={title} placeholder={placeholder} onChange={handleInputChange} />
        </div>
    )
}

export default TextInput;
