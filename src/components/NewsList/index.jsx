/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import s from './NewsList.module.scss';
import NewsItem from '../NewsItem';

const NewsVoteChart = dynamic(() => import('../NewsVoteChart'), {
  ssr: false,
});

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

const NewsList = ({ hits, currentPage, totalPage }) => (
  <div className={s.root}>
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th>Comments</th>
          <th>Vote Count</th>
          <th>UpVote</th>
          <th>News Details</th>
        </tr>
      </thead>
      <tbody className={s.body}>
        {hits.map((hit) => (
          <NewsItem {...hit} key={hit.objectID} />
        ))}
      </tbody>
    </table>
    <div className={s.pagination}>
      <div className={s.paginationLinks}>
        {currentPage !== 0 && (
          <>
            <Link href={`/?page=${currentPage - 1}`}>
              <a>Previous</a>
            </Link>
            <span className={s.separator}> | </span>
          </>
        )}
        {currentPage + 1 !== totalPage && (
          <Link href={`/?page=${currentPage + 1}`}>
            <a>Next</a>
          </Link>
        )}
      </div>
    </div>
    <NewsVoteChart />
  </div>
);

NewsList.propTypes = propTypes;
export default NewsList;
