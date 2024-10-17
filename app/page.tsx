"use client";

import Partcls from "./_components/Particles";
import { useEffect, useState } from "react";

import Input from "./_form/Input";

export default function Home() {

  const [formData, setFormData] = useState<any | null>(null);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch("/api/forms");
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, []);

  const [selectedModel, setSelectedModel] = useState<any | null>(null);

  return (
    <div>
      <Partcls />

      <div className="mt-8 text-center">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Générateur de contrat</h2>
          </div>

          <form className="flex w-full flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-center items-center">
              {formData && formData.models && formData.models.map((model: any) => (
                <div key={model.name} className="mb-4 mx-2 w-1/3">
                  <button
                    type="button"
                    className={`w-full px-4 py-2 text-gray-400 border border-gray-700 rounded-md focus:outline-none ${selectedModel === model ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedModel(model)}
                  >
                    <div className="text-sm text-gray-500 font-medium">{model.name}</div>
                    <div className="text-xs text-gray-400">{model.description}</div>
                  </button>
                </div>
              ))}

            </div>

            <div className="w-full">
              {selectedModel && selectedModel.sections.map((section: any) => (
                <div key={section.name} className="mb-6 flex flex-col flex-wrap justify-center items-center">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">{section.name}</h3>
                  {section.fields.map((field: any) => {
                    return <Input key={field.id} id={field.id} name={field.name} />;
                  })}
                </div>
              ))}

            </div>
          </form>
        </section>
      </div>

      <div className="fixed bottom-0 w-full text-center text-xs">
        Made with ❤️ by <a href="https://www.codeur.com/-nltech" target="_blank">NLTech</a> and <a href="https://www.github.com/CodeDRoger" target="_blank">CodeDRoger Community</a>
      </div>
    </div>
  );
}
