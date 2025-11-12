import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const hexToRgb = (hex: string): string => {
  
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return "255 255 255"; // default white
  return `${parseInt(match[1], 16)} ${parseInt(match[2], 16)} ${parseInt(
    match[3],
    16
  )}`;
};

const updatePrimaryColors = (hex: string) => {

  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty("--color-primary", rgb);
};

const updateSecondaryColors = (hex: string) => {
  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty("--color-secondary", rgb);
  const [r, g, b] = rgb.split(" ");
  document.documentElement.style.setProperty(
    "--color-secondary-dark-light",
    `rgba(${r},${g},${b},0.15)`
  );
};

const updateFontColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty("--color-font", rgb);
};

const updateChartColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty("--color-chart", rgb);
};

const ThemeColorPicker: React.FC = () => {
    const { t } = useTranslation();
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [secondaryColor, setSecondaryColor] = useState("#10B981");
  const [fontColor, setFontColor] = useState("#0F172A");
  const [chartColor, setChartColor] = useState("#3B82F6");
  const [appSurfaceColor, setAppSurfaceColor] = useState("#ffffff"); // default white
  const [buttonColor, setButtonColor] = useState("#3B82F6"); // default button color

const updateButtonColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty("--color-button", rgb);
};


const updateAppSurfaceColor = (hex: string) => {
  console.log( " Updating Hex value received for app surface color:", hex);
  const rgb = hexToRgb(hex);
  console.log("Updating app surface color to:", rgb);
  document.documentElement.style.setProperty("--app-surface-color", rgb);
};


  // 🔹 Apply theme colors whenever any changes
  useEffect(() => {
    updatePrimaryColors(primaryColor);
    updateSecondaryColors(secondaryColor);
    updateFontColor(fontColor);
    updateChartColor(chartColor);
      updateButtonColor(buttonColor); 
      updateAppSurfaceColor(appSurfaceColor); // ← apply app surface color
  }, [primaryColor, secondaryColor, fontColor, chartColor,appSurfaceColor,buttonColor]);

  // 🔹 Unified handle function
  const handleColorChange = (type: string, value: string) => {
    switch (type) {
      case "Primary Color":
        setPrimaryColor(value);
        updatePrimaryColors(value);
        break;
      case "Secondary Color":
        setSecondaryColor(value);
        updateSecondaryColors(value);
        break;
      case "Font Color":
        setFontColor(value);
        updateFontColor(value);
        break;
      case "Chart Color":
        setChartColor(value);
        updateChartColor(value);
         break;
            case "Sidebar & Header":
              
      setAppSurfaceColor(value);
      updateAppSurfaceColor(value);
      
        break;
           case "Button Color":
      setButtonColor(value);
      updateButtonColor(value);
      break;
      default:
        break;
    }
  };

  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6">
      <h3 className="text-lg font-semibold">{t("ThemeColors")}</h3>
      <p className="text-sm text-gray-500">
        {t("Defineyour")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: t("PrimaryColor"), color: primaryColor },
          { label: t("SecondaryColor"), color: secondaryColor },
          { label: t("FontColor"), color: fontColor },
          { label: t("ChartColor"), color: chartColor },
          { label: t("SidebarHeader"), color: appSurfaceColor },
          { label: t("ButtonColor"), color: buttonColor },
        ].map(({ label, color }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <label className="text-sm font-medium">{label}</label>
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(label, e.target.value)}
              className="w-12 h-12  rounded-full color-input cursor-pointer transition-shadow hover:shadow-md"
             
            />
            <span
              className="text-xs"
              style={{ color: color }}
            >
              {color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeColorPicker;
