import React, { useState } from "react";
import { UploadCloud, PencilIcon } from "lucide-react";
import SelectHeader from "../../pages/Components/SelectHeader";
import ThemeColorPicker from "../Layouts/PrimaryColorPicker";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import { toggleSemidark } from "../../store/themeConfigSlice";
import { useTranslation } from "react-i18next";

export default function ThemeSettings() {
  const { t } = useTranslation();
  const [logo, setLogo] = useState<string>("");
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [secondaryColor, setSecondaryColor] = useState("#10B981");
  const [fontColor, setFontColor] = useState("#0F172A");
  const [chartColor, setChartColor] = useState("#3B82F6");
  const [dashboardType, setDashboardType] = useState("gradient");
    const location = useLocation();
    const dispatch = useDispatch();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
   

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setLogo(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      logo,
      primaryColor,
      secondaryColor,
      fontColor,
      chartColor,
      dashboardType,
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title={t("ThemeSettings")}
        subtitle={t("Customizethe")}
        showRiskLevel={false}
        Selecttitle=""
      />

      <form onSubmit={handleSave} className="space-y-8">
        {/* Company Logo Section */}
        <div className="border rounded-xl p-6 bg-white ">
          <h3 className="text-lg font-semibold mb-1">{t("CompanyLogo")}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {t("Uploadyour")}
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Upload area */}
            <label className="flex-1 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition">
              <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-blue-600 font-medium">{t("Clicktoupload")}</span>
              <p className="text-xs text-gray-400 mt-1">
                or drag and drop<br />SVG, PNG, JPG or GIF (MAX. 800×400px)
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
            </label>

            {/* Logo Preview */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg border p-4">
              {logo ? (
                <img src={logo} alt="Logo Preview" className="max-h-40 object-contain" />
              ) : (
                <div className="text-gray-400 text-sm">{t("Nologouploaded")}</div>
              )}
            </div>
          </div>
        </div>

        {/* Theme Colors Section */}

        <ThemeColorPicker />
          <div className="mt-5 text-primary">
                                    <label className="inline-flex mb-0">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={themeConfig.semidark === true || themeConfig.semidark === 'true'}
                                            onChange={(e) => dispatch(toggleSemidark(e.target.checked))}
                                        />
                                        <span>{t("SemiDark")}</span>
                                    </label>
                                </div>
        {/* Dashboard Screen Type Section */}
        <div className="border rounded-xl p-6 bg-white ">
          <h3 className="text-lg font-semibold mb-1">{t("SelectDashboardScreenType")}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {t("ChooseBackgroundStyle")}
          </p>

          <div className="flex gap-6">
            {[t("Gradient"), t("Image")].map((type) => (
              <label
                key={type}
                className={`flex items-center gap-2 text-sm cursor-pointer ${dashboardType === type ? "text-blue-600 font-medium" : "text-gray-700"
                  }`}
              >
                <input
                  type="radio"
                  name="dashboardType"
                  value={type}
                  checked={dashboardType === type}
                  onChange={(e) => setDashboardType(e.target.value)}
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            type="button"

            className="px-6 py-2 rounded-lg border text-gray-700 hover:bg-gray-50"
          >
            {t("DiscardChanges")}
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg btn text-white hover:bg-blue-700"
          >
            {t("SaveChanges")}
          </button>
        </div>
      </form>
    </div>
  );
}
