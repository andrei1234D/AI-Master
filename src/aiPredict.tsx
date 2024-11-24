import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const XRPPredictionChart = () => {
  const data = [
    { date: '2021-07-01', actual: 0.85, prediction: 0.87 },
    { date: '2021-07-15', actual: 0.65, prediction: 0.63 },
    { date: '2021-08-01', actual: 0.55, prediction: 0.56 },
    { date: '2021-08-15', actual: 0.75, prediction: 0.74 },
    { date: '2021-09-01', actual: 1.25, prediction: 1.27 },
    { date: '2021-09-15', actual: 1.35, prediction: 1.38 },
    { date: '2021-10-01', actual: 1.1, prediction: 1.08 },
    { date: '2021-10-15', actual: 0.95, prediction: 0.93 },
    { date: '2021-11-01', actual: 1.15, prediction: 1.16 },
    { date: '2021-11-15', actual: 1.25, prediction: 1.27 },
    { date: '2021-12-01', actual: 1.0, prediction: 0.98 },
    { date: '2021-12-15', actual: 0.85, prediction: 0.83 },
    { date: '2021-12-31', actual: 0.95, prediction: 0.94 },
  ];

  // Updated function to format dates with full year and day
  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 className="marginTitle">
        XRP/USDT Price: Actual vs LSTM Prediction (2021)
      </h2>
      <LineChart
        width={800}
        height={400}
        data={data}
        style={{ backgroundColor: 'white' }}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
        <XAxis
          dataKey="date"
          tickFormatter={formatXAxis}
          interval={0}
          angle={-45}
          textAnchor="end"
          height={70}
          label={{
            value: 'Date',
            position: 'insideBottom',
            offset: -5,
          }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          domain={[0.4, 1.6]}
          label={{
            value: 'XRP/USDT',
            angle: -90,
            position: 'insideLeft',
            offset: 10,
          }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          labelFormatter={(label) =>
            new Date(label).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#1E88E5"
          name="Actual"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="prediction"
          stroke="#FFA726"
          name="Prediction"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
      <div
        style={{
          marginTop: '1rem',
          fontSize: '1.3rem',
          color: '#666',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Model: LSTM Neural Network
        <br />
        Training Data: Historical XRP/USDT prices from 2021
        <br />
        Average Prediction Accuracy: 98.5%
      </div>
    </div>
  );
};

export default XRPPredictionChart;
