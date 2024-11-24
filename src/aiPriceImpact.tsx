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

const DualAxisChart = () => {
  const data = [
    { month: 'Ian 2023', investitii: 85, adoptie: 45, eficienta: 72 },
    { month: 'Feb 2023', investitii: 88, adoptie: 48, eficienta: 75 },
    { month: 'Mar 2023', investitii: 92, adoptie: 52, eficienta: 78 },
    { month: 'Apr 2023', investitii: 95, adoptie: 55, eficienta: 82 },
    { month: 'Mai 2023', investitii: 98, adoptie: 58, eficienta: 85 },
    { month: 'Iun 2023', investitii: 102, adoptie: 62, eficienta: 88 },
    { month: 'Iul 2023', investitii: 105, adoptie: 65, eficienta: 90 },
    { month: 'Aug 2023', investitii: 108, adoptie: 68, eficienta: 92 },
    { month: 'Sep 2023', investitii: 112, adoptie: 72, eficienta: 94 },
    { month: 'Oct 2023', investitii: 115, adoptie: 75, eficienta: 96 },
    { month: 'Nov 2023', investitii: 118, adoptie: 78, eficienta: 98 },
    { month: 'Dec 2023', investitii: 120, adoptie: 80, eficienta: 100 },
  ];

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
      <h2 className="marginTitle">Analiza Impactului AI - 2023</h2>
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis
          yAxisId="left"
          domain={[0, 120]}
          label={{
            value: 'Investiții (Miliarde $)',
            angle: -90,
            position: 'insideLeft',
            style: { fontWeight: 'bold', fontSize: '16px' },
          }}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 100]}
          label={{
            value: 'Adoptie & Eficiență (%)',
            angle: 90,
            position: 'insideRight',
            style: {
              fontWeight: 'bold',
              fontSize: '16px',
            },
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="investitii"
          stroke="#8884d8"
          name="Investiții AI"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="adoptie"
          stroke="#82ca9d"
          name="Rata Adopție"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="eficienta"
          stroke="#ffc658"
          name="Eficiență"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default DualAxisChart;
