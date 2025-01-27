import React, { useState } from 'react';
// import ProfileSettings from './ProfileSettings';
// import Change PasswordSettings from './Change PasswordSettings';
// import ReviewsSettings from './ReviewsSettings';

function Settings() {
  const [activeButton, setActiveButton] = useState('Profile'); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="head-btn-request bg-white center-flex rad-6 border-ccc w-fit">
        <button 
          className={`settings-btn fs-14 c-black p-10 bg-transparent rad-6 b-none ${activeButton === 'Profile' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Profile')}
        >
          Profile
        </button>
        <button 
          className={`settings-btn fs-14 c-black p-10 bg-transparent rad-6 b-none ${activeButton === 'Change Password' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Change Password')}
        >
          Change Password
        </button>
        <button 
          className={`settings-btn fs-14 c-black p-10 bg-transparent rad-6 b-none ${activeButton === 'Reviews' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Reviews')}
        >
          Reviews
        </button>
      </div>

      {activeButton === 'Profile' && (
        <div>
          <h1>Profile Settings</h1> 
          {/* <ProfileSettings />  */}
        </div>
      )}

      {activeButton === 'Change Password' && (
        <div>
          <h1>Change Password Settings</h1> 
          {/* <Change PasswordSettings />  */}
        </div>
      )}

      {activeButton === 'Reviews' && (
        <div>
          <h1>Reviews Settings</h1> 
          {/* <ReviewsSettings />  */}
        </div>
      )}
    </>
  );
}

export default Settings;