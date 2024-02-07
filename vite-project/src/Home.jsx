import React from 'react';
import { SiAffinitypublisher } from 'react-icons/si';
import { MdBrowserUpdated, MdOutlineWebAsset, MdUnpublished } from 'react-icons/md';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Home() {
    const barChartData = [
        { month: 'Jan', tokensSold: 150 },
        { month: 'Feb', tokensSold: 220 },
        { month: 'Mar', tokensSold: 180 },
        { month: 'Apr', tokensSold: 300 },
        { month: 'May', tokensSold: 250 },
        { month: 'Jun', tokensSold: 400 },
        { month: 'Jul', tokensSold: 350 },
        { month: 'Aug', tokensSold: 280 },
        { month: 'Sep', tokensSold: 320 },
        { month: 'Oct', tokensSold: 200 },
        { month: 'Nov', tokensSold: 280 },
        { month: 'Dec', tokensSold: 180 },
      ];
      const aedOnTrackData = [
        { category: 'A1', value: 100 },
        { category: 'A2', value: 300 },
        { category: 'B1', value: 100 },
        { category: 'B2', value: 80 },
        { category: 'C1', value: 100 },
        { category: 'C2', value: 200 },
        { category: 'D1', value: 150 },
      ];

      const assetStageStatusData = [
        { stage: 'Group A', tokensSold: 400 },
        { stage: 'Group B', tokensSold: 300 },
        { stage: 'Group C', tokensSold: 300 },
        { stage: 'Group D', tokensSold: 200 },
      ];
      
 

  const pieChartData1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const pieChartData2 = [
    { name: 'Category A', value: 100 },
    { name: 'Category B', value: 200 },
    { name: 'Category C', value: 150 },
  ];

  const statusSummaryData = [
    { name: 'Smart Dubai', value: 300 },
    { name: 'Dubai Mall', value: 200 },
    { name: 'Debra Tower', value: 100 },
    { name: 'GIP Tower', value: 150 },
    { name: 'Tower Arbinda', value: 120 },
    { name: 'Product6', value: 80 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h5 className='top-title'>Hi Admin</h5>
        <h1 className='Welcome'>Welcome to S.M.A.R.T!</h1>
      </div>
      <div className='main-card'>
        <div className='card'>
          <div className='card-inner'>
            <h5>Assets Published</h5>
            <SiAffinitypublisher className='card_iicon' />
          </div>
          <h3>540</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h5>Assets Updated</h5>
            <MdBrowserUpdated className='card_iicon' />
          </div>
          <h3>682</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h5>New Assets </h5>
            <MdOutlineWebAsset className='card_iicon' />
          </div>
          <h3>321</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h5>Assets Unpublished</h5>
            <MdUnpublished className='card_iicon' />
          </div>
          <h3>350</h3>
        </div>
      </div>
      <div className='charts'>
      <ResponsiveContainer width='100%' height={300}>
  <BarChart
    data={barChartData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis dataKey='month' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey='tokensSold' fill='#8884d8' />
  </BarChart>
</ResponsiveContainer>

<ResponsiveContainer width='100%' height={300}>
      <BarChart
        data={aedOnTrackData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='category' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='value' fill='#8884d8'>
          {aedOnTrackData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>


<ResponsiveContainer width='100%' height={300}>
  <PieChart>
    <Pie
      data={assetStageStatusData}
      cx='50%'
      cy='50%'
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill='#8884d8'
      dataKey='tokensSold'
    >
      {assetStageStatusData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>

        

<ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={statusSummaryData}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {statusSummaryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
