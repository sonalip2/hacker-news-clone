import React from 'react';
import PropTypes from 'prop-types';
import NewsList from '../src/components/NewsList';

const propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      author: PropTypes.string,
      num_comments: PropTypes.number,
      objectID: PropTypes.string,
    }),
  ).isRequired,
};

const Home = ({ hits }) => {
  return <NewsList hits={hits} />;
};

Home.getInitialProps = async ({ query }) => {
  const url = 'https://hn.algolia.com/api/v1/search?query=front_page';
  const apiUrl = query.page ? `${url}&page=${query.page}` : url;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return { hits: data.hits };
};

Home.propTypes = propTypes;
export default Home;
