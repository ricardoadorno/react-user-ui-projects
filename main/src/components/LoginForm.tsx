import React from "react";

export default function LoginForm() {
  // State to hold the values of the form fields
  const [formValues, setFormValues] = React.useState({
    username: "",
    password: "",
  });

  // Event handler for when the form is submitted
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Process the form values (e.g. validate and send to server)
    console.log(formValues);
  };

  // Event handler for when a form field is changed
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-12 pt-8 pb-12 mb-6"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl text-blue-700">Login</h1>
          </div>
          <div className="flex items-center border-b-2 border-blue-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-b-2 border-blue-500 py-2 mt-4">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            type="submit"
          >
            Submit
          </button>
          <div className="flex items-center justify-between p-4 gap-3">
            <p className="text-center text-gray-500 text-xs">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-800">
                Sign Up
              </a>
            </p>

            <a
              className="inline-block  align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
