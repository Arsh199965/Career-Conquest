import React, { useState } from 'react';
import Signup from "../assets/Sign-up.svg";
import { useNavigate } from "react-router-dom";
const SignUpForm = ({setData}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const [focusedField, setFocusedField] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log('Form Data Submitted:', formData);
      navigate('/profile');
      setData(formData);
  };

  // Handle input focus and blur to change border color
  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField('');

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex justify-between items-center w-full p-4">
        {/* Text & Form Section */}
        <div className="w-1/3 p-4 ml-40 mr-8 ">
          <h2 className="text-2xl font-bold mb-4">Ready to start your career journey?</h2>
          <p style={styles.subheading}>
            Sign up now to Career Conquest and kickstart your path to success.
          </p>

          <form style={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              placeholder="John Doe"
              style={{
                ...styles.input,
                borderBottomColor: focusedField === 'name' ? '#007BFF' : '#ccc',
              }}
              required
            />

            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              placeholder="johndoe@email.com"
              style={{
                ...styles.input,
                borderBottomColor: focusedField === 'email' ? '#007BFF' : '#ccc',
              }}
              required
            />

            <label htmlFor="interest" style={styles.label}>Area of Interest</label>
            <input
              type="text"
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              onFocus={() => handleFocus('interest')}
              onBlur={handleBlur}
              placeholder="e.g., Data Science"
              style={{
                ...styles.input,
                borderBottomColor: focusedField === 'interest' ? '#007BFF' : '#ccc',
              }}
              required
            />

            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} required />
              I agree to the <a href="/terms" style={styles.link}>Terms & Conditions</a>
            </label>

            <button type="submit" className='hover:bg-gray-600 px-4 py-2 text-lg text-white bg-black border-none rounded-md cursor-pointer w-32'>Sign Up</button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="w-1/2 flex justify-center items-center mx-20">
          <img src={Signup} alt="Illustration" className='w-full h-auto' />
        </div>
      </div>
    </section>
  );
};

// Inline Styles
const styles = {


  
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
  },
  input: {
    marginBottom: '1.5rem',
    padding: '0.5rem 0',
    fontSize: '1rem',
    border: 'none',
    borderBottom: '2px solid #ccc',
    outline: 'none',
    width: '100%',
    backgroundColor: '#f3f4f6',
    transition: 'border-color 0.3s ease',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  checkbox: {
    marginRight: '0.5rem',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  }


};

export default SignUpForm;
