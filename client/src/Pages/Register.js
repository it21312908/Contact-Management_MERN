import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const [credentials , setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setCredentials({ ...credentials, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
      }

  return (
    <>
    <h3>Register</h3>
    <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="nameInput" class="form-label mt-4">
            Your Name
          </label>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            name="name"
            value={credentials.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div class="form-group">
          <label for="emailInput" class="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="passwordInput" class="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="form-label mt-4">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary my-3"
        />
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
  </>
  )
}