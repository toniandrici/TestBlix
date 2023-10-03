import "./App.css";
import "./index.css";
import React, { useState, Fragment } from "react";
import SelectInput from "./components/select/select.component";
import Input from "./components/input/input.component";
import Checkbox from "./components/checkbox/checkbox.component";

const options = [
  { value: "Advanced", label: "Advanced" },
  { value: "Manual", label: "Manual" },
];

const defaultFormFields = {
  accountType: "Advanced",
  userName: "",
  password: "",
  serverAddress: "",
  serverPath: "",
  portNumber: "",
  isSSL: false,
}

const Form = () => {
  const [formData, setFormData] = useState(defaultFormFields);
  const {
    accountType,
    userName,
    password,
    serverAddress,
    serverPath,
    portNumber,
  } = formData;



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "";
    for (const [key, value] of Object.entries(formData)) {
      text +=`${key}: ${value}     \n `;
    }
    console.log(formData);
    alert(text);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <SelectInput
          options={options}
          name="accountType"
          onChange={handleChange}
          label="Account Type"
          value={accountType}
        />
        <Input
          label="User Name"
          type="email"
          required
          placeholder="name@example.com"
          onChange={handleChange}
          name="userName"
          value={userName}
        />
        <Input
          label="Password"
          type="password"
          required
          placeholder="Required"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Input
          label="Server Address"
          type="text"
          placeholder="example.com"
          pattern="[\w.-]+:\d+"
          onChange={handleChange}
          name="serverAddress"
          value={serverAddress}
        />
        {formData.accountType === "Advanced" && (
          <Fragment>
            <Input
              label="Server Path"
              type="text"
              placeholder="/calendars/user/"
              onChange={handleChange}
              pattern="^(\/[a-zA-Z0-9-_]+)+\/?$"
              name="serverPath"
              value={serverPath}
            />
            <div className="flex flex-wrap">
              <Input
                label="Port"
                type="number"
                cls="md:w-1/2"
                onChange={handleChange}
                name="portNumber"
                value={portNumber}
              />
              <Checkbox name="isSSL"  />
            </div>
          </Fragment>
        )
      }

        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
