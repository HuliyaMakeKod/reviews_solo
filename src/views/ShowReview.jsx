const React = require('react');

const Layout = require('./Layout');

module.exports = function ShowEntry({review}) {
    return (
        <Layout>
                  {/* <link rel="stylesheet" href="/stylesheets/showReview.css" />
      <script defer src="/js/showReview.js" /> */}
      <div className='main'>
        <div>{review.title}</div>

      </div>
        </Layout>
    )
}