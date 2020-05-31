import React from 'react';
import NewsList from '../src/components/NewsList';

const Home = ({ hits }) => {
  console.log('hits', hits);
  return <NewsList />;
};

Home.getInitialProps = async () => {
  const res = await fetch('https://hn.algolia.com/api/v1/search?query=front_page');
  const data = await res.json();
  return { hits: data.hits };
};

export default Home;
