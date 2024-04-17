import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { db } from "./firebase"; // Import Firestore instance
import { collection, setDoc, doc,addDoc } from "firebase/firestore";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");

  const handleSignup = async () => {
    console.log("db", db);
    const abu = collection(db, "newCollection");
    await addDoc(abu, {
      firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        aadhaarNumber: aadhaarNumber,
    });
    // Push user details to Firestore in a new collection called 'newCollection'
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs bg-white p-6 rounded-md shadow-md border border-gray-300">
        <h2 className="text-center text-lg font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              required
            />
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              required
            />
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="Phone Number"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              required
            />
            <Input
              type="text"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value)}
              label="Aadhaar Number"
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
