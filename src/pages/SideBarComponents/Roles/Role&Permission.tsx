import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Module {
  name: string;
  features: Feature[];
}

interface Feature {
  name: string;
  actions: string[];
}

interface Permissions {
  [module: string]: {
    [feature: string]: string[];
  };
}

const modules: Module[] = [
  {
    name: 'Data Protection Consent Manager',
    features: [
      { name: 'Consent', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Template', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Breach', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Privacy', actions: ['view', 'edit', 'delete', 'approve'] },
    ],
  },
  {
    name: 'Data Protection Grievance Redressal',
    features: [
      { name: 'Consent', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Template', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Breach', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Privacy', actions: ['view', 'edit', 'delete', 'approve'] },
    ],
  },
  {
    name: 'Data Principal Impact Assessment',
    features: [
      { name: 'Consent', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Template', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Breach', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Privacy', actions: ['view', 'edit', 'delete', 'approve'] },
    ],
  },
  {
    name: 'Data Principal Third Party Assessment',
    features: [
      { name: 'Consent', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Template', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Breach', actions: ['view', 'edit', 'delete', 'approve'] },
      { name: 'Privacy', actions: ['view', 'edit', 'delete', 'approve'] },
    ],
  },
];


const RightsDetail: React.FC = () => {
  const {t} = useTranslation();
  const [openModules, setOpenModules] = useState<{ [key: string]: boolean }>({});
  const [permissions, setPermissions] = useState<Permissions>({});
  const [permissionError, setPermissionError] = useState(false);
  const formik = useFormik({
    initialValues: {
      roleName: '',
    },
    validationSchema: Yup.object({
      roleName: Yup.string().required(t('RoleNameRequired')),
    }),
     onSubmit: () => {
      if (Object.keys(permissions).length === 0) {
        setPermissionError(true);
      } else {
        setPermissionError(false);
        alert('Form submitted with:' + JSON.stringify({ role: formik.values.roleName, permissions }, null, 2));
      }
    },
  });

  const toggleModule = (module: string) => {
    setOpenModules((prev) => ({ ...prev, [module]: !prev[module] }));
  };

  const handleToggle = (module: string, feature: string, action: string, value: boolean) => {
    const updated = { ...permissions };
    if (!updated[module]) updated[module] = {};
    if (!updated[module][feature]) updated[module][feature] = [];

    if (value) {
      if (!updated[module][feature].includes(action)) {
        updated[module][feature].push(action);
      }
    } else {
      updated[module][feature] = updated[module][feature].filter((a) => a !== action);
    }

    if (updated[module][feature].length === 0) delete updated[module][feature];
    if (Object.keys(updated[module]).length === 0) delete updated[module];
    setPermissions(updated);
  };

  const isChecked = (module: string, feature: string, action: string): boolean =>
    permissions?.[module]?.[feature]?.includes(action) ?? false;

  const isAllChecked = (module: string, feature: string): boolean => {
    const featurePerms = permissions?.[module]?.[feature] ?? [];
    const allActions = modules.find((m) => m.name === module)!
      .features.find((f) => f.name === feature)!.actions;
    return featurePerms.length > 0 && allActions.every((a) => featurePerms.includes(a));
  };

  const isModuleAllChecked = (module: string): boolean => {
    const mod = modules.find((m) => m.name === module);
    if (!mod) return false;
    return mod.features.every((f) => isAllChecked(module, f.name));
  };

  const toggleAll = (module: string, feature: string, value: boolean) => {
    const actions = modules.find((m) => m.name === module)!.features.find((f) => f.name === feature)!.actions;
    const updated = { ...permissions };

    if (!updated[module]) updated[module] = {};
    updated[module][feature] = value ? [...actions] : [];

    if (!value) delete updated[module][feature];
    if (Object.keys(updated[module]).length === 0) delete updated[module];

    setPermissions(updated);
  };

  const toggleEntireModule = (module: string, value: boolean) => {
    const updated = { ...permissions };
    const mod = modules.find((m) => m.name === module);
    if (!mod) return;

    if (value) {
      updated[module] = {};
      mod.features.forEach((f) => {
        updated[module][f.name] = [...f.actions];
      });
    } else {
      delete updated[module];
    }

    setPermissions(updated);
  };

  return (
    <>
       <span className="text-lg font-semibold text-gray-800 py-4 dark:text-white">{t("RolesPermissions")}</span>
   <form onSubmit={formik.handleSubmit} className=" mx-auto p-6 space-y-2 bg-white rounded shadow">
      <label className="block text-md font-medium text-gray-700">{t("RoleName")} <span className="text-red-500">*</span></label>
      <input
        type="text"
        name="roleName"
        placeholder={t("EnterRoleName")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.roleName}
        className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
      {formik.touched.roleName && formik.errors.roleName && (
        <p className="text-sm text-red-500">{formik.errors.roleName}</p>
      )}

      {modules.map((mod) => (
        <div key={mod.name} className="border rounded-lg bg-gray-50 ">
          <div
            className="flex justify-between items-center p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
            onClick={() => toggleModule(mod.name)}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isModuleAllChecked(mod.name)}
                onChange={(e) => toggleEntireModule(mod.name, e.target.checked)}
                onClick={(e) => e.stopPropagation()}
                className="w-4 h-4 accent-blue-600 rounded-md cursor-pointer"
              />
              <h2 className="text-lg font-bold text-gray-800">{mod.name}</h2>
            </div>
            {openModules[mod.name] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>

          {openModules[mod.name] && (
            <div className="p-4 space-y-4">
              {mod.features.map((feature) => (
                <div key={feature.name}>
                  <label className="flex items-center justify-between cursor-pointer gap-3 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isAllChecked(mod.name, feature.name)}
                        onChange={(e) => toggleAll(mod.name, feature.name, e.target.checked)}
                        className="w-4 h-4 accent-blue-600 rounded-md cursor-pointer"
                      />
                      <span className="font-semibold text-gray-800">{feature.name}</span>
                    </div>
                  </label>
                  <div className="flex flex-wrap gap-4 pl-7 mt-2">
                    {feature.actions.map((action) => (
                      <label key={action} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-blue-600 rounded-md cursor-pointer"
                          checked={isChecked(mod.name, feature.name, action)}
                          onChange={(e) => handleToggle(mod.name, feature.name, action, e.target.checked)}
                        />
                        <span className="capitalize font-medium text-gray-700">{action}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {permissionError && (
        <p className="text-red-500 text-sm">{t("Atleast")}</p>
      )}

      <button
        type="submit"
        className="btn  hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
      >
        {t("SaveRole")}

      </button>
    </form>
    </>
 
  );
};

export default RightsDetail;