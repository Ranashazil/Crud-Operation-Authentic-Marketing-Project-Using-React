import React, { useState } from 'react';
import axios from 'axios';

function UpdateForm({ theId, updateName, updateEmail, updateNumber, setUpdateEmail, setUpdateName, setUpdateNumber, getData,setUpdateMesaage,updatemessage,setIsUpdating }) {
const [alert, setAlert] = useState('')
const [alert2, setAlert2] = useState('')
  const updateHandle = (id) => {
    axios.put(`https://672986f26d5fa4901b6d713a.mockapi.io/CrudShazi/${id}`, {
      name: updateName,
      email: updateEmail,
      number: updateNumber
    }).then(() => {
      getData();
      setUpdateName('')
      setUpdateNumber('')
      setUpdateEmail('')
      setUpdateMesaage('')
      setAlert2('data has been updated successfully')

      setTimeout(() => {
        setAlert2('')
        setIsUpdating(false)
      },3000);
    });
    // setTimeout(() => {
    //     clearFields();
    //   }, 2000);

  };

 const clearFields = ()=>{
    setUpdateName('')
    setUpdateEmail('')
    setUpdateNumber('')
    setAlert('data has been cleared successfully')

    setTimeout(() => {
        setAlert('')
    }, 3000);
 }

const isFormComplete2 = updateEmail && updateName && updateNumber
const isFormComplete3 = updateEmail || updateName || updateNumber

  return (
    
    <div className='flex flex-col items-center justify-center min-h-full p-4'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-white mb-6'>Update Form</h1>
        {updatemessage && (
          <p className='text-yellow-700 text-center mb-4'>{updatemessage}</p> // Display the message
        )}
        {alert2 && <h3 className="text-center text-red-700 font-semibold mb-4">{alert2}</h3>}
        {alert && <h3 className="text-center text-black font-semibold mb-4">{alert}</h3>}
        <div className='space-y-4'>
          <input
            type="text"
            className='w-full px-4 py-2 bg-green-200 hover:bg-green-300 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300'
            placeholder='Write name to update'
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />

          <input
            type="text"
            className='w-full px-4 py-2 bg-blue-200 hover:bg-blue-300 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300'
            placeholder='Write email to update'
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />

          <input
            type="text"
            className='w-full px-4 py-2 bg-yellow-200 hover:bg-yellow-300 border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-300'
            placeholder='Write number to update'
            value={updateNumber}
            onChange={(e) => setUpdateNumber(e.target.value)}
          />

          <button
            className={`w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700 transition duration-300${
                isFormComplete2 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-gray-300 cursor-not-allowed"
              } `}
            onClick={() => updateHandle(theId)}
            disabled = {!isFormComplete2}
          >
            Update
          </button>

          <button
              className={`w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition duration-300${
                isFormComplete3 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-gray-300 cursor-not-allowed"
               } `}
              onClick={clearFields} disabled = {!isFormComplete3}
            >
              Clear
            </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
