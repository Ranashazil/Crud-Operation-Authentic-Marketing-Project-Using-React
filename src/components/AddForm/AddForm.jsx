import React, { useState } from "react";
import axios from "axios";

function AddForm({getData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [alert, setAlert] = useState();

  const handleSubmit = () => {

if (!name || !email || !number) {
  setAlert("please fill all the fields")
  setTimeout(() => {
    setAlert("")
  }, 5000);
  return;
}

      axios.post("https://672986f26d5fa4901b6d713a.mockapi.io/CrudShazi", {
      name: name,
      email: email,
      number: number,
    }).then(() => {
      setAlert("Successfully entered!");
      setName("");
      setEmail("");
      setNumber("");
      getData();

      setTimeout(() => {
        setAlert('')
      }, 4000);
    });
  };

// const disabling = ()=>{
//   if (name.length || email.length || number.length <= 0 ) {
//     handleSubmit('')
//   }
// }
 const isFormComplete = name && email && number
  return (
    <div className="flex  flex-col items-center justify-center min-h-full  p-4">
      <div className="bg-purple-400  rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Add Your Data Here</h1>
        
        {alert && <h3 className="text-center text-red-500 font-medium mb-4">{alert}</h3>}
        
        <input
          className="w-full px-4 bg-green-200 hover:bg-green-300 py-2 mb-4  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          className="w-full px-4 py-2 bg-green-200 hover:bg-green-300  mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          className="w-full px-4 py-2 bg-green-200 hover:bg-green-300  mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button
           className={`w-full font-bold py-2 px-4 rounded-md transition duration-300 ${
            isFormComplete ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-gray-600 cursor-not-allowed"
          }`}
          onClick={handleSubmit} disabled = {!isFormComplete}
        >
          Submit Data
        </button>
      </div>
    </div>
  );
}

export default AddForm;
