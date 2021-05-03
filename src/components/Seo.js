import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SchemaOrg from './Schema.org';

const SEO = ({ pageTitle, pageUrl, pageDescription, pageImage }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            url
            Image
            author
            twitterUSername
            fbAppID
            author
            keywords
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {

      const title = pageTitle || seo.title;
      const description = pageDescription || seo.description;
      const image = pageImage ? `${seo.url}${pageImage}` : seo.image;
      const url = pageUrl
        ? `${seo.url}/${pageUrl}/`
        : seo.url;

      return (
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <html lang={'en'} />
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />
            <meta name="keywords" content={seo.keywords}></meta>

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={seo.fbAppID} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.twitterUSername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            url={url}
            title={title}
            description={description}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      );
    }}
  />
);

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}
  
SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
}

export default SEO;