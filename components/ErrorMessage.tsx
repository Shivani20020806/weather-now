
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-900/50 border border-red-600 text-red-300 px-4 py-3 rounded-lg relative text-center" role="alert">
    <strong className="font-bold">Oops!</strong>
    <span className="block sm:inline ml-2">{message}</span>
  </div>
);

export default ErrorMessage;
