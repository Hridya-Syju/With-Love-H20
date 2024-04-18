import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import NavbarSimple from './lnavbar';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const ToggleVerifiedButton = ({ onClick, verified }) => {
  return (
    <button
      className={`py-2 px-4 rounded ${
        verified ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
      } text-white font-bold`}
      onClick={onClick}
    >
      {verified ? 'Verified' : 'Unverified'}
    </button>
  );
};

function Aureport() {
  const [previousReports, setPreviousReports] = useState([]);
  const [expandedReport, setExpandedReport] = useState(null);
  const [verified, setVerified] = useState(false); // State for verification status
  const storage = getStorage();

  useEffect(() => {
    // Fetch previous reports from the database when the component mounts
    const fetchPreviousReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'report'));
        const reports = [];
        querySnapshot.forEach(async (doc) => {
          const data = doc.data();
          const photos = [];
          if (data.pic && data.pic.length > 0) {
            for (const photoRef of data.pic) {
              // Update the storage reference to point to the /photos folder
              const storageRef = ref(storage, `photos/${photoRef}`);
              const photoURL = await getDownloadURL(storageRef);
              photos.push(photoURL);
            }
          }
          reports.push({ id: doc.id, ...data, photos });
        });
        setPreviousReports(reports);
      } catch (error) {
        console.error('Error fetching previous reports:', error);
      }
    };

    fetchPreviousReports();
  }, []); // Fetch reports when component mounts

  const handleViewDetails = (reportId) => {
    // Toggle expanded report
    setExpandedReport(expandedReport === reportId ? null : reportId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarSimple />
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Reports Inbox</h1>
          {/* Container for Previous Reports */}
          <div className="mt-6">
            <ul className="space-y-4">
              {previousReports.map((report, index) => (
                <li key={index} className="border p-4 rounded-md cursor-pointer" onClick={() => handleViewDetails(report.id)}>
                  <p><span className="font-semibold">Category:</span> {report.category}</p>
                  <p><span className="font-semibold">Description:</span> {report.desc.length > 50 ? `${report.desc.substring(0, 50)}...` : report.desc}</p>
                  {/* Add more fields here */}
                  {expandedReport === report.id && (
                    <div>
                      <p><span className="font-semibold">Aadhar No:</span> {report.aadharNo}</p>
                      <p><span className="font-semibold">Map:</span> {report.map}</p>
                      <p><span className="font-semibold">Name:</span> {report.name}</p>
                      <p><span className="font-semibold">Status:</span> {report.status}</p>
                      {/* Add more fields here */}
                      <ToggleVerifiedButton
                        onClick={() => setVerified(!verified)}
                        verified={verified}
                      />
                      {report.photos && report.photos.map((photo, index) => (
                        <div key={index} className="mt-4 flex items-center justify-center">
                          <img src={photo} alt={`Photo ${index + 1}`} className="max-w-xs" />
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aureport;
