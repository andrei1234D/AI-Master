import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const AIAdoptionChart = () => {
  const data = [
    {
      year: '2020',
      Financial: 45,
      Healthcare: 38,
      Manufacturing: 35,
      Retail: 32,
      Education: 25,
    },
    {
      year: '2021',
      Financial: 56,
      Healthcare: 45,
      Manufacturing: 42,
      Retail: 38,
      Education: 30,
    },
    {
      year: '2022',
      Financial: 68,
      Healthcare: 55,
      Manufacturing: 48,
      Retail: 45,
      Education: 38,
    },
    {
      year: '2023',
      Financial: 78,
      Healthcare: 65,
      Manufacturing: 58,
      Retail: 52,
      Education: 45,
    },
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
      <h2 className="marginTitle" style={{ marginTop: '0px' }}>
        Rata de Adoptie AI pe Industrii (%)
      </h2>
      <BarChart
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
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Financial" fill="#8884d8" name="Servicii Financiare" />
        <Bar dataKey="Healthcare" fill="#82ca9d" name="Sanatate" />
        <Bar dataKey="Manufacturing" fill="#ffc658" name="Productie" />
        <Bar dataKey="Retail" fill="#ff7300" name="Retail" />
        <Bar dataKey="Education" fill="#00C49F" name="Educatie" />
      </BarChart>
    </div>
  );
};

export default AIAdoptionChart;
