import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
          /><br/>
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          /><br/>
          <button type="submit">Submit</button>
        </form>
        
        {submitted && (
          <div>
            <h2>Full Name: {fullName}</h2>
           
          </div>
        )}
      </div>
    );
  }
  
  export default App;
