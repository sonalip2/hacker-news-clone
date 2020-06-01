import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-charts';
import { connect } from 'react-redux';
import s from './NewsVoteChart.module.scss';

const propTypes = {
  newsDetails: PropTypes.shape({}).isRequired,
};

const NewsVoteChart = ({ newsDetails }) => {
  const chartData = useMemo(
    () =>
      Object.keys(newsDetails).map((voteChart) => {
        return [parseInt(voteChart, 10), newsDetails[voteChart].vote];
      }),
    [newsDetails],
  );

  const data = [
    {
      label: 'Vote Chart',
      data: chartData,
    },
  ];

  const getSeriesStyle = useCallback(
    () => ({
      transition: 'all .5s ease',
    }),
    [],
  );
  const getDatumStyle = useCallback(
    () => ({
      transition: 'all .5s ease',
    }),
    [],
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom', stacked: true },
      { type: 'linear', position: 'left', stacked: true },
    ],
    [],
  );

  return (
    <div className={s.root}>
      <Chart
        data={data}
        axes={axes}
        getSeriesStyle={getSeriesStyle}
        getDatumStyle={getDatumStyle}
      />
    </div>
  );
};

NewsVoteChart.propTypes = propTypes;

const mapStateToProps = (state) => ({ newsDetails: state.news.newsDetails });
export default connect(mapStateToProps, null)(NewsVoteChart);
