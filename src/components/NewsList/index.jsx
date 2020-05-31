import React from 'react';
import PropTypes from 'prop-types';
import s from './NewsList.module.scss';
import NewsItem from '../NewsItem';

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

const NewsList = ({ hits }) => {
  return (
    <div className={s.root}>
      <table>
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
            <NewsItem {...hit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

NewsList.propTypes = propTypes;
export default NewsList;
