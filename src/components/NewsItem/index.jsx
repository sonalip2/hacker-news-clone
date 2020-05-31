/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import s from './NewsItem.module.scss';

const propTypes = {
  created_at: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  //   objectID: PropTypes.string.isRequired,
};

const defaultProps = {
  url: null,
};

const NewsItem = ({ title, created_at: createdAt, url, author, num_comments: numOfComments }) => {
  return (
    <tr>
      <td className={s.center}>{numOfComments}</td>
      <td className={s.center}>0</td>
      <td className={s.center}>^</td>
      <td>
        <span>{`${title}  `}</span>
        {url && (
          <a className={s.url} href={url}>
            ({url})
          </a>
        )}
        <span>{` by `}</span>
        <span>{`${author}  `}</span>
        <span>{createdAt}</span>
        <span>{`  [ hide ]`}</span>
      </td>
    </tr>
  );
};

NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;
export default NewsItem;
