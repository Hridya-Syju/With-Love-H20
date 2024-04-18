import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { NavbarSimple } from './unavbar';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
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
  const [aadharNo, setAadharNo] = useState('');
  const [name, setName] = useState('');
  const [previousReports, setPreviousReports] = useState([]);

  useEffect(() => {
    // Fetch previous reports from the database when the component mounts
    const fetchPreviousReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'report'));
        const reports = [];
        querySnapshot.forEach((doc) => {
          reports.push(doc.data());
        });
        setPreviousReports(reports);
      } catch (error) {
        console.error('Error fetching previous reports:', error);
      }
    };

    fetchPreviousReports();
  }, []); // Fetch reports when component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "report"), {
        category: selectedOption,
        desc: description,
        map: mapLink,
        pic: photos,
        status: verificationStatus,
        aadharNo: aadharNo,
        name: name
      });

      console.log('Document added successfully!');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarSimple />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Report Page</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input fields */}
            <div className="mb-4">
              <label htmlFor="aadharNo" className="block text-sm font-medium text-gray-700">* Aadhar No:</label>
              <input
                id="aadharNo"
                type="text"
                value={aadharNo}
                onChange={(e) => setAadharNo(e.target.value)}
                required
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">* Name:</label>
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
              onClick={() => {
                if (!selectedOption || !description || !mapLink || !aadharNo || !name) {
                  // Show an alert or notification indicating that all fields are required
                  alert("Please fill all required fields before submitting.");
                }
              }}
            >
              Submit
            </Button>
          </form>

          {/* Container for Previous Reports */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Previous Reports</h2>
            <ul className="space-y-4">
              {previousReports.map((report, index) => (
                <li key={index} className="border p-4 rounded-md">
                  <p><span className="font-semibold">Category:</span> {report.category}</p>
                  <p><span className="font-semibold">Description:</span> {report.desc}</p>
                  {/* Add more fields here */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
