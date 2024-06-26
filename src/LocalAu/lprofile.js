import React from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";

const LProfilePage = () => {
  // Hardcoded user details
  const userDetails = [
    {
      id: 1,
      firstName: "Ashok",
      lastName: "Arum",
      email: "ashok@kwa.gov.in",
      phoneNumber: "929333333",
      password: "kwa1234",
      aadhaarNumber: "348932",
    },
    // Add more users as needed
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-2xl p-8">
        <Card>
          <CardHeader color="blue" size="lg">
            <h2 className="font-semibold text-white">User Profile</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-4">
              {userDetails.map((user) => (
                <li key={user.id}>
                  <p className="text-lg font-semibold">First Name: {user.firstName}</p>
                  <p className="text-lg font-semibold">Last Name: {user.lastName}</p>
                  <p className="text-lg font-semibold">Email: {user.email}</p>
                  <p className="text-lg font-semibold">Phone Number: {user.phoneNumber}</p>
                  <p className="text-lg font-semibold">Password: {user.password}</p>
                  <p className="text-lg font-semibold">Aadhaar Number: {user.aadhaarNumber}</p>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LProfilePage;
