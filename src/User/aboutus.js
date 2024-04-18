
import React from 'react';
const AboutUsPage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2.5rem' }}>About Us</h1>
      <p style={{ margin: '80px auto 40px', fontSize: '1.3rem', maxWidth: '80vw' }}>Welcome to our Water Quality and Footprint Calculator app, your go-to tool for monitoring and managing water usage and quality! In today's world, where water scarcity and pollution are pressing issues, it's crucial to understand and track our water consumption habits. Our app is designed to empower users to make informed decisions about water usage and contribute to preserving this precious resource. This platform is made with love to streamline all bureaucratic processes related to water supply and maintenance in Kerala and to create a society well aware and conscious of their water use.</p>
      
      {/* Additional Text for Functionalities */}
      <div style={{ textAlign: 'left', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px' }}>Functionalities:</h2>
        <ol style={{ fontSize: '1.2rem', marginLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '10px' }}>A reporting interface for users</li>
          <li style={{ marginBottom: '10px' }}>A report inbox and status setter for local authorities</li>
          <li style={{ marginBottom: '10px' }}>A water footprint calculator for personal use of users</li>
          <li style={{ marginBottom: '10px' }}>Suggestions to be sustainable in water usage</li>
          <li style={{ marginBottom: '10px' }}>A Forum for the local authority to share announcements with the public</li>
          <li style={{ marginBottom: '10px' }}>An awareness page to help the public be more water conscious</li>
        </ol>
      </div>
    </div>
  );
}

export default AboutUsPage;
