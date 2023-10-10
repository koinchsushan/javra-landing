import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormField {
  name: string;
  company: string;
  jobTitle: string;
}

const Form = () => {
  const navigate = useNavigate();
  const [formField, setFormField] = useState<FormField>({
    name: "",
    company: "",
    jobTitle: "",
  });
  const [errors, setErrors] = useState<FormField>({
    name: "",
    company: "",
    jobTitle: "",
  });

  const handleForm = () => {
    // Validation
    let isValid = true;
    const newErrors = { ...errors };

    if (formField.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (formField.company.trim() === "") {
      newErrors.company = "Company is required";
      isValid = false;
    } else {
      newErrors.company = "";
    }

    if (formField.jobTitle.trim() === "") {
      newErrors.jobTitle = "Job Title is required";
      isValid = false;
    } else {
      newErrors.jobTitle = "";
    }

    setErrors(newErrors);

    // If form is valid, submit the form and navigate
    if (isValid) {
      console.log(formField);
      //use form api here
      setFormField({ name: "", company: "", jobTitle: "" });
      navigate("/home");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Clear the error message when the user starts typing in the field
    setErrors({ ...errors, [name]: "" });

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="form-container flex justify-center">
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 px-4">
        <h1 className="text-xl mb-5 text-center font-semibold text-green-600">Thank you for joining us!</h1>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-green-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formField.name}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            className={`w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.name ? "border-red-500" : ""
              }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-green-600">
            Company:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formField.jobTitle}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            className={`w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.company ? "border-red-500" : ""
              }`}
          />
          {errors.company && (
            <p className="text-xs text-red-500 mt-1">{errors.company}</p>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-green-600">
            Job Title:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formField.company}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            className={`w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.jobTitle ? "border-red-500" : ""
              }`}
          />
          {errors.jobTitle && (
            <p className="text-xs text-red-500 mt-1">{errors.jobTitle}</p>
          )}
        </div>

        <button
          onClick={handleForm}
          className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Submit
        </button>
        <p className="text-xs text-red-500 mt-3">
          Required fields to enter the rest of the page.
        </p>
        <p className="text-xs mt-3">
          Click <a className="text-blue-500 hover:underline" href="https://javra.com/Privacy" target="_blank" rel="noreferrer">here</a> for more information about our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Form;
