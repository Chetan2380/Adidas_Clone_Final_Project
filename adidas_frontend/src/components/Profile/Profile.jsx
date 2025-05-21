import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../context/auth.context';
import './Profile.css';

const Profile = () => {
  const { state: authState } = useContext(AuthContext);
  const user = authState?.user;

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="profile-container">
          <h2>Please log in to view your profile.</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-info">
          <div className="profile-field">
            <label>Full Name</label>
            <p>{user.name || "-"}</p>
          </div>
          <div className="profile-field">
            <label>Email Address</label>
            <p>{user.email || "-"}</p>
          </div>
          <div className="profile-field">
            <label>Phone Number</label>
            <p>{user.phone || "-"}</p>
          </div>
          {/* Add more profile fields as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
