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
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
};

const Home = ({ hits, currentPage, totalPage }) => {
  return <NewsList hits={hits} currentPage={currentPage} totalPage={totalPage} />;
};

Home.getInitialProps = async ({ query }) => {
  const url = 'https://hn.algolia.com/api/v1/search?query=front_page';
  const currentPage = query.page ? parseInt(query.page, 10) : 0;
  const apiUrl = query.page ? `${url}&page=${query.page}` : url;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return { hits: data.hits, currentPage, totalPage: data.nbPages };
};

Home.propTypes = propTypes;
export default Home;
