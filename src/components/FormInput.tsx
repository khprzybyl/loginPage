import { FC, HTMLInputTypeAttribute, ReactNode } from 'react';
import { useField } from 'formik';

interface FormInputProps {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  renderOptional?: ReactNode;
}

export const FormInput: FC<FormInputProps> = ({
  name,
  label,
  type,
  renderOptional,
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  return (
    <div className="flex flex-col text-sm">
      <label htmlFor={name} className="block font-medium text-gray-900">
        {label}
      </label>
      <div className="relative mt-1 rounded-md">
        <input
          {...field}
          type={type}
          className={`block w-full rounded-md border-0 py-3 px-5 text-gray-900 ring-1 ring-inset pr-10 ${
            hasError
              ? 'ring-red-500 hover:ring-red-500 focus:ring-red-500'
              : 'ring-gray-300 hover:ring-yellow-400 focus:ring-yellow-400'
          } placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset leading-6 shadow-sm`}
        />
        {renderOptional}
      </div>
      {hasError && (
        <div className="text-red-400 text-xs leading-6">{meta.error}</div>
      )}
    </div>
  );
};
