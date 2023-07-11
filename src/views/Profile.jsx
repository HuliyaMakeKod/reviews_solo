const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ login }) {
  return (
    <Layout>
      <div className="profile">
        <div className="profile-header">
          <img src="Oтверженные.jpeg" alt="User Photo" className="user-photo" />
          <h1 className="user-name">John Doe</h1>
          <p className="user-email">john.doe@example.com</p>
        </div>
        <div className="profile-posts">
          <h2 className="section-title">My Posts</h2>
          <ul className="posts-list">
            <li className="post-item">Post 1</li>
            <li className="post-item">Post 2</li>
            <li className="post-item">Post 3</li>
          </ul>
        </div>
        <div className="profile-controls">
          <button className="btn btn-change-photo">Change Photo</button>
        </div>
      </div>
    </Layout>
  );
};
