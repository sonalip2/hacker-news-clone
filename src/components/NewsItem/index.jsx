/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './NewsItem.module.scss';
import { setVote, setHide } from '../../actions/news';

const propTypes = {
  created_at: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  objectID: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  hideNews: PropTypes.func.isRequired,
  newsDetails: PropTypes.shape({}).isRequired,
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
  upVote,
  hideNews,
  newsDetails,
}) => {
  const intObjectId = parseInt(objectID, 10);
  const handleUpVote = () => {
    upVote(objectID);
  };

  const handleHideClick = () => {
    hideNews(objectID);
  };

  if (newsDetails[intObjectId] && newsDetails[intObjectId].hide) {
    return null;
  }

  return (
    <tr>
      <td className={s.center}>{numOfComments}</td>
      <td className={s.center}>
        {newsDetails[intObjectId] && newsDetails[intObjectId].vote
          ? newsDetails[intObjectId].vote
          : 0}
      </td>
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

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(setVote(id)),
    hideNews: (id) => dispatch(setHide(id)),
  };
};

const mapStateToProps = (state) => ({ newsDetails: state.news.newsDetails });

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
