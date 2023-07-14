const React = require('react');
const Layout = require('./Layout');

module.exports = function StartPage({ img }) {
  const { photos } = img;
  return (
    <Layout>
      <div>
        <h1>I'mho</h1>
        <div id="disney" className="disney" />
        {photos.map(({ img_src }) => (
          <div style={{ maxWidth: '200px' }}>
            <img src={img_src} alt="pic" />
          </div>
        ))}
      </div>
    </Layout>
  );
};
