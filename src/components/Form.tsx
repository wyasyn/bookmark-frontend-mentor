import { useState } from "react";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(""); // Clear error message when user types
  };

  // Function to validate email
  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }
    setError("");
    return true;
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail()) {
      // Proceed with form submission or further processing
      setSuccess(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="  flex items-center gap-4 flex-col sm:flex-row "
    >
      <div className=" relative ">
        <label className="sr-only" htmlFor="email">
          Email:
        </label>
        <input
          className={` text-foreground ring-2  w-full py-2 px-3 min-w-[300px] rounded-md pr-10 ${
            error ? "ring-destructive" : "ring-transparent"
          }`}
          placeholder="Email address"
          type="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          onBlur={validateEmail} // Validate on blur (optional)
        />
        {success && (
          <div className="absolute right-2 top-2  text-emerald-400">
            <CheckCircle2 size={20} />
          </div>
        )}
        {error && (
          <img
            className=" absolute right-2 top-2 "
            src="/images/icon-error.svg"
            alt="error"
          />
        )}
        {error && (
          <p className="text-xs absolute left-0 w-full ring-2 ring-destructive bg-destructive px-3 py-2 rounded-[0_0_8px_8px] ">
            {error}
          </p>
        )}
      </div>
      <Button text="Contact Us" destructive />
    </form>
  );
};

export default EmailForm;
