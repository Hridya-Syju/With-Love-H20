import React from "react";
import NavbarSimple from "./lnavbar";
import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from '../firebase';

function Aureport() {
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);
  
    useEffect(() => {
      // Fetch reports from Firebase Firestore
      const fetchReports = async () => {
        const reportsRef = db.collection('reports');
        const snapshot = await reportsRef.get();
        const reportsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReports(reportsData);
      };
  
      fetchReports();
    }, []);
  
    const handleReportClick = (report) => {
      setSelectedReport(report);
    };
  
    const handleBackClick = () => {
      setSelectedReport(null);
    };
  
    return (
      <div className="p-4">
        <NavbarSimple/>
        {!selectedReport ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">Report Inbox</h1>
            <div className="space-y-4">
              {reports.map(report => (
                <div key={report.id} className="border rounded-md p-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleReportClick(report)}>
                  <h2 className="text-lg font-bold">{report.title}</h2>
                  <p>{report.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <Button color="blue" onClick={handleBackClick} className="mb-4">Back to Inbox</Button>
            <h1 className="text-3xl font-bold mb-4">{selectedReport.title}</h1>
            <p className="mb-2">Date: {selectedReport.date}</p>
            <p>{selectedReport.description}</p>
          </div>
        )}
      </div>
    );
  }
  

export default Aureport;
