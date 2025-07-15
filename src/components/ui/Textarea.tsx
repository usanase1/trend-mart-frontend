import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  wrapperClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, wrapperClassName = '', className = '', ...props }, ref) => (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-black dark:text-white ${className}`}
        {...props}
      />
    </div>
  )
);

Textarea.displayName = 'Textarea';
export default Textarea; 