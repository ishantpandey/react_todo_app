import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header text-center bg-primary text-white">
              <h2>Profile</h2>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              </div>
              <h4 className="text-center">John Doe</h4>
              <p className="text-center text-muted">johndoe@example.com</p>
              <hr />
              <div className="text-center">
                <button className="btn btn-primary me-2">Edit Profile</button>
                <button className="btn btn-danger">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
