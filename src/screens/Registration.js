import React,{useState} from 'react'
import axios from 'axios'
import NavigationBar from '../components/Nav'




const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEMail] = useState('');
    const [nhis, setNhis] = useState('');

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setMiddleName('');
        setAge('');
        setGender('');
        setPhone('');
        setDob('');
        setEMail('');
        setNhis('');
      };



    const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
        "firstName": firstName,
        "lastName": lastName,
        "middleName": middleName,
        "phone": phone,
        "email": email,
        "age": age,
        "gender": gender,
        "date_of_birth": dob,
        "NHIS": nhis
    }

    await axios.post("http://127.0.0.1:8000/api/registration/",data).then((response)=>{
        console.log(response)
        resetForm()
        window.prompt('Form submitted successfully!');
    })
    };

    return (
   <>
   <NavigationBar/>

   <div className="w-[60%] h-screen mt-5 mx-auto flex flex-col">
    <h1 className='text-center text-3xl font-bold'>Patient Registration Form</h1>
    <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-1 my-10  items-center">
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

      <label htmlFor="middleName">Middle Name:</label>
      <input
        type="text"
        id="middleName"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

    <label htmlFor="middleName">Email:</label>
      <input
        type="text"
        id="middleName"
        value={email}
        onChange={(e) => setEMail(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

    <label htmlFor="age">Date of birth:</label>
      <input
        type="date"
        id="age"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

    <label htmlFor="age">Phone:</label>
      <input
        type="text"
        id="age"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      >
        <option value="">--Select Gender--</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>

       <label htmlFor="middleName">NHIS:</label>
      <input
        type="text"
        id="middleName"
        value={nhis}
        onChange={(e) => setNhis(e.target.value)}
        className="border-gray-400 border-2 p-2 rounded-md"
      />

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid col-span-2 my-5">
        Submit
      </button>
    </form>
    

   </div>
   </>
  )
}

export default Registration