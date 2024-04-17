import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [idImage, setIdImage] = useState(null);

  const handleSignup = () => {
    // Implement your sign-up logic here
    console.log('Signing up with:', firstName, lastName, email, phoneNumber, password, idImage);
    // You can use Firebase, Axios, or any other method for signing up
    // Example with Firebase:
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed up successfully
    //     const user = userCredential.user;
    //     console.log('User signed up:', user);
    //   })
    //   .catch((error) => {
    //     // Handle errors
    //     console.error('Sign-up error:', error);
    //   });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can perform additional checks or validations here, such as file size or type
    setIdImage(file);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs bg-white p-6 rounded-md shadow-md">
        <h2 className="text-center text-lg font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div className="w-72">
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              required
            />
          </div>
          <div className="w-72">
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              required
            />
          </div>
          <div className="w-72">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              required
            />
          </div>
          <div className="w-72">
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="Phone Number"
              required
            />
          </div>
          <div className="w-72">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              required
            />
          </div>
          <div className="w-72">
            <Input
              type="file"
              onChange={handleImageChange}
              label="ID Image"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

