const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("H:\\BaiduSyncdisk\\Projects\\Gatsby_Projects\\gatsby-airtable-listing-master\\src\\pages\\404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("H:\\BaiduSyncdisk\\Projects\\Gatsby_Projects\\gatsby-airtable-listing-master\\src\\pages\\index.jsx"))),
  "component---src-templates-single-item-jsx": hot(preferDefault(require("H:\\BaiduSyncdisk\\Projects\\Gatsby_Projects\\gatsby-airtable-listing-master\\src\\templates\\single-item.jsx")))
}

