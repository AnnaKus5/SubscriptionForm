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
        <div className="mb-4">
            <label htmlFor={title} className="block text-left text-gray-700 font-sans text-xs">{title}</label>
            <input 
                type="text" 
                // add value property
                name={title} 
                placeholder={placeholder} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    )
}

export default TextInput;
