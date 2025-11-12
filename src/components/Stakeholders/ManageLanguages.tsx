import React from "react";
import SelectHeader from "../../pages/Components/SelectHeader";
import ToggleSwitch from "../../CustomComponents/ToggleSwitch";
import { useTranslation } from "react-i18next";

interface LanguageToggleProps {
    language: string;
    checked: boolean;
    onChange: () => void;
}



const LanguageToggle: React.FC<LanguageToggleProps> = ({
    language,
    checked,
    onChange,
}) => (
    <div className="flex items-center  gap-3">
        <span className="font-medium w-28">{language}</span>
        <span>:</span>
        <ToggleSwitch
            size="sm"
            checked={checked}
            onChange={onChange}
            
        />

    </div>
);

const ManageLanguages = () => {
    const {t} = useTranslation();
    const [languages, setLanguages] = React.useState([
        { language: "Assamese", checked: true },
        { language: "Bengali", checked: true },
        { language: "Bodo", checked: true },
        { language: "Dogri", checked: true },
        { language: "English", checked: true },
        { language: "Gujarati", checked: true },
        { language: "Hindi", checked: true },
        { language: "Kannada", checked: true },
        { language: "Kashmiri", checked: true },
        { language: "Konkani", checked: true },
        { language: "Maithili", checked: true },
        { language: "Malayalam", checked: true },
        { language: "Manipuri", checked: true },
        { language: "Marathi", checked: true },
        { language: "Nepali", checked: true },
        { language: "Odia", checked: true },
        { language: "Punjabi", checked: true },
        { language: "Sanskrit", checked: true },
        { language: "Santali", checked: true },
        { language: "Sindhi", checked: true },
        { language: "Tamil", checked: true },
        { language: "Telugu", checked: true },
        { language: "Urdu", checked: true },
    ]);


    const handleToggle = (index: number) => {
        setLanguages((prev) =>
            prev.map((lang, i) =>
                i === index ? { ...lang, checked: !lang.checked } : lang
            )
        );
    };

    return (
        <>
            <SelectHeader title={t("manageLanguages")} showRiskLevel={false} />
            <div className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-3 gap-x-8 gap-y-4">



                {languages?.map((lang, index) => (
                    <LanguageToggle
                        key={index}
                        language={lang.language}
                        checked={lang.checked}
                        onChange={() => handleToggle(index)}
                    />
                ))}
            </div>
        </>


    );
};

export default ManageLanguages;
