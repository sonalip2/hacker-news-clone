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
  objectID: PropTypes.string.isRequired,
};

const defaultProps = {
  url: null,
};

const NewsItem = ({
  title,
  created_at: createdAt,
  url,
  author,
  num_comments: numOfComments,
  objectID,
}) => {
  const handleUpVote = () => {
    console.log('objectID', objectID);
  };

  const handleHideClick = () => {
    console.log('objectID', objectID);
  };

  return (
    <tr>
      <td className={s.center}>{numOfComments}</td>
      <td className={s.center}>0</td>
      <td
        className={[s.center, s.upvote].join(' ')}
        tabIndex="0"
        onClick={handleUpVote}
        onKeyPress={handleUpVote}
        // eslint-disable-next-line
        role="button"
      >
        ^
      </td>
      <td className={s.details}>
        <span>{`${title}  `}</span>
        {url && (
          <a className={s.url} href={url}>
            ({url})
          </a>
        )}
        <span className={s.by}>{` by `}</span>
        <span>{`${author}  `}</span>
        <span className={s.time}>{createdAt}</span>
        <span className={s.hideBtnContainer}>
          {'  [ '}
          <button type="button" onClick={handleHideClick} className={s.hideBtn}>
            hide
          </button>
          {' ]'}
        </span>
      </td>
    </tr>
  );
};

NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;
export default NewsItem;
