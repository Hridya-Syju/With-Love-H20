import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { NavbarSimple } from './unavbar';
import { db } from '../firebase';
import { collection, addDoc, docRef } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Inside your component function
const storage = getStorage();


function ReportPage() {
  const handlePhotoUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedFiles = [];

    try {
      for (const file of files) {
        const storageRef = ref(storage, `photos/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        uploadedFiles.push(downloadURL);
      }

      setPhotos(uploadedFiles);
    } catch (error) {
      console.error('Error uploading photos:', error);
    }
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [mapLink, setMapLink] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('unverified');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action you need with the collected data,
    // such as sending it to a server or processing it locally.

    console.log("Selected Option:", selectedOption);
    console.log("Description:", description);
    console.log("Photos:", photos);
    console.log("Map Link:", mapLink);
    console.log("Verification Status:", verificationStatus);
    // Reset form fields after submission

    setSelectedOption('');
    setDescription('');
    setPhotos([]);
    setMapLink('');
    setVerificationStatus('unverified');
  };


  const addDocument = async () => {
    try {

      const docRef = await addDoc(collection(db, "report"), {
        category: selectedOption,
        desc: description,
        map: mapLink,
        pic: photos,
        status: verificationStatus,


      });

      console.log('Document added successfully!');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <NavbarSimple />
      <h1 className="text-2xl font-bold mb-4">Report Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="selectedOption" className="block text-sm font-medium text-gray-700"> * Select Issue:</label>
          <select
            id="selectedOption"
            value={selectedOption}
            onChange={(a) => setSelectedOption(a.target.value)}
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
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">* Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(b) => setDescription(b.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        )}
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="mapLink" className="block text-sm font-medium text-gray-700">* Map Link:</label>
            <input
              id="maplink"
              type="text"
              value={mapLink}
              onChange={(c) => setMapLink(c.target.value)}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        )}
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="photos" className="block text-sm font-medium text-gray-700">  Upload Photos:</label>
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


        <Button
          type="submit"
          color="indigo"
          ripple="light"
          onClick={() => {
            if (selectedOption & description & mapLink) {
              addDocument();
            } else {
              // Show an alert or notification indicating that at least one field is required
              alert("Please fill required fields before submitting.");
            }
          }}
        >
          Submit
        </Button>

      </form>
    </div>
  );
}

export default ReportPage;
