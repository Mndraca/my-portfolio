import React, { ChangeEvent } from "react";

interface InputProps {
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, handleChange }) => {
  return (
    <div className="mb-4 ml-9">
      <label className="block text-sm font-medium text-gray-700">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={name}
        name={name}
        onChange={handleChange}
        className="mt-1 block px-3 py-2  border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ width: "350px" }}
      />
    </div>
  );
};

export default Input;
