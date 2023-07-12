const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ name, login, email }) {
  return (
    <Layout>
          <link rel="stylesheet" href="/stylesheets/profile.css" />
      <div className="profile">
        <div className="profile-header">
          <img src="/pic/book.jpeg" alt="User Photo" className="user-photo" />
          <h1 className="user-name">{login}</h1>
          <p className="user-name">{name}</p>
          <p className="user-email">{email}</p>
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
          <button className="btn btn-change-photo">Изменить информацию о себе</button>
        </div>
      </div>
    </Layout>
  );
};
