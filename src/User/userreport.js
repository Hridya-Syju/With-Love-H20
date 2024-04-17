import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { NavbarSimple } from './unavbar';
function ReportPage() {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [mapLink, setMapLink] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('unverified');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action you need with the collected data,
    // such as sending it to a server or processing it locally.
    console.log("Name:", name);
    console.log("Date of Birth:", dob);
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Option:", selectedOption);
    console.log("Description:", description);
    console.log("Photos:", photos);
    console.log("Map Link:", mapLink);
    console.log("Verification Status:", verificationStatus);
    // Reset form fields after submission
    setName('');
    setDOB('');
    setPhoneNumber('');
    setSelectedOption('');
    setDescription('');
    setPhotos([]);
    setMapLink('');
    setVerificationStatus('unverified');
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <NavbarSimple/>
      <h1 className="text-2xl font-bold mb-4">Report Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="selectedOption" className="block text-sm font-medium text-gray-700">Select Option:</label>
          <select
            id="selectedOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="">Select an option</option>
            <option value="Water Supply and Drinking Water Quality">Water Supply and Drinking Water Quality</option>
            <option value="Irrigation and Agricultural Water Management">Irrigation and Agricultural Water Management</option>
            <option value="Groundwater Management">Groundwater Management</option>
            <option value="Water Pollution and Environmental Protection">Water Pollution and Environmental Protection</option>
            <option value="Flood Control and Disaster Management">Flood Control and Disaster Management</option>
            <option value="Hydropower Management">Hydropower Management</option>
            <option value="Water Conservation and Management">Water Conservation and Management</option>
            <option value="Integrated River Basin Management">Integrated River Basin Management</option>
          </select>
        </div>
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        )}
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Upload Photos:</label>
            <input
              id="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        )}
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="mapLink" className="block text-sm font-medium text-gray-700">Map Link:</label>
            <input
              id="mapLink"
              type="text"
              value={mapLink}
              onChange={(e) => setMapLink(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        )}
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="verificationStatus" className="block text-sm font-medium text-gray-700">Verification Status:</label>
            <Button
              type="button"
              color={verificationStatus === 'unverified' ? 'red' : 'green'}
              onClick={() =>
                setVerificationStatus(
                  verificationStatus === 'unverified' ? 'verified' : 'unverified'
                )
              }
              className="mt-1 p-2 border rounded-md w-full"
            >
              {verificationStatus === 'unverified' ? 'Unverified' : 'Verified'}
            </Button>
          </div>
        )}
        <Button type="submit" color="indigo" ripple="light">Submit</Button>
      </form>
    </div>
  );
}

export default ReportPage;