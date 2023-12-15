import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

export default function App() {

  const [newUser, setNewUser] = useState({ id: uuidv4(), firstName: '', lastName: '', email: '', phoneNumber: '' })
  const [users, setUsers] = useState([])

  const postData = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => setNewUser(response.data))
  }

  useEffect(() => {
    postData()
  }, [])

  const handleAdd = (e) => {
    e.preventDefault();
    setUsers((currentUsers) => (
      [...currentUsers, newUser]
    ))
    setNewUser({ id: uuidv4(), firstName: '', lastName: '', email: '', phoneNumber: '' })
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <label htmlFor="firstNameField" >
          First Name
          <input type="text" id="firstNameField" placeholder="Please enter your First Name" value={newUser.firstName} onChange={e => setNewUser((prevUser) => ({ ...prevUser, firstName: e.target.value }))} />
        </label>
        <label htmlFor="lastNameField">
          Last Name
          <input type="text" id="lastNameField" placeholder="Please enter your Last Name" value={newUser.lastName} onChange={e => setNewUser((prevUser) => ({ ...prevUser, lastName: e.target.value }))} />
        </label>
        <label htmlFor="emailField">
          email
          <input type="text" id="emailField" placeholder="Please enter your Email" value={newUser.email} onChange={e => setNewUser((prevUser) => ({ ...prevUser, email: e.target.value }))} />
        </label>
        <label htmlFor="phoneField">
          phone number
          <input type="tel" id="phoneField" placeholder="Please enter your Phone number" value={newUser.phoneNumber} onChange={e => setNewUser((prevUser) => ({ ...prevUser, phoneNumber: e.target.value }))} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>- First Name:</strong> {user.firstName} <br />
            <strong>- Last Name:</strong> {user.lastName} <br />
            <strong>- Email:</strong> {user.email} <br />
            <strong>- ID:</strong> {user.id} <br />
            <strong>- Phone Number:</strong> {user.phoneNumber} <br />
          </li>
        ))}
      </ul>

    </>
  );
}