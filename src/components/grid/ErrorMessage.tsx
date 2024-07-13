import { FieldError } from "react-hook-form";

// Define the ErrorMessage component which takes an error prop of type FieldError or undefined
const ErrorMessage = ({ error }: { error: FieldError | undefined }) => {

  if (!error) return null;

  // If there is an error, render a paragraph with the error message
  return <p>{error.message}</p>
};

export default ErrorMessage;
