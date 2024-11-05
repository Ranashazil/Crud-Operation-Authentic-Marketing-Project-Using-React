import React, { useState, useEffect } from 'react';
import AddForm from '../AddForm/AddForm';
import axios from 'axios';
import UpdateForm from '../UpdateForm/UpdateForm';
import { MdDelete, MdOutlineBrowserUpdated } from 'react-icons/md';

function ViewForm() {
  const [data, setData] = useState([]);
const [alert, setAlert] = useState('')
  function getData() {
    axios.get('https://672986f26d5fa4901b6d713a.mockapi.io/CrudShazi').then((res) => {
      setData(res.data);
    });
  }

  

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id)=>{
    axios.delete(`https://672986f26d5fa4901b6d713a.mockapi.io/CrudShazi/${id}`).then(()=>{
      getData()
      setAlert('Data has been deleted successfully')
      setTimeout(() => {
        setAlert('')
      }, 4000);
    })
    }
const [theId, SetTheId] = useState('')
const[updateName, setUpdateName] = useState('')
const[updateEmail, setUpdateEmail] = useState('')
const[updateNumber, setUpdateNumber] = useState('')
const [updatemessage, setUpdateMesaage] = useState('')
const [isUpdating, setIsUpdating] = useState(false)


   const updateHandler = (id)=>{
    axios.get(`https://672986f26d5fa4901b6d713a.mockapi.io/CrudShazi/${id}`).then((res)=>{
      console.log(res);
      SetTheId(id)
      setUpdateName(res.data.name)
      setUpdateEmail(res.data.email)
      setUpdateNumber(res.data.number)
      setUpdateMesaage('data is going to update')
      setIsUpdating(true)
    })
  }
return(
    <>
      <AddForm getData = {getData}/>
      <div className='bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-lg shadow-lg text-white'>
        <h1 className='text-3xl font-semibold mb-6 text-center'>Form Explanation</h1>
        {alert && <h3 className="text-center text-green-500 font-semibold mb-4">{alert}</h3>}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-separate border-spacing-2'>
            <thead>
              <tr className='bg-indigo-700'>
                <th className='p-3 rounded-md'>Id</th>
                <th className='p-3 rounded-md'>Name</th>
                <th className='p-3 rounded-md'>Email</th>
                <th className='p-3 rounded-md'>Number</th>
                <th className='p-3 rounded-md'>Delete</th>
                <th className='p-3 rounded-md'>Update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className='odd:bg-indigo-600 even:bg-indigo-500 hover:bg-purple-700 transition-colors'>
                  <td className='p-3'>{item.id}</td>
                  <td className='p-3'>{item.name}</td>
                  <td className='p-3'>{item.email}</td>
                  <td className='p-3'>{item.number}</td>
                  <td className='p-3'  >
                    <button className='text-red-500 hover:text-red-700' onClick={()=>deleteHandler(item.id)}>
                      <MdDelete size={20} />
                    </button>
                  </td>
                  <td className='p-3'>
                    <button className='text-yellow-400 hover:text-yellow-600' onClick={()=>updateHandler(item.id)}>
                      <MdOutlineBrowserUpdated size={20} />
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isUpdating && (
      <UpdateForm updateName={updateName} updateEmail={updateEmail} updateNumber = {updateNumber} setUpdateName={setUpdateName} setUpdateEmail={setUpdateEmail} setUpdateNumber={setUpdateNumber} theId = {theId} getData={getData} setUpdateMesaage= {setUpdateMesaage} updatemessage={updatemessage} setIsUpdating={setIsUpdating}  />
    )}
    </>
  );
}

export default ViewForm;
