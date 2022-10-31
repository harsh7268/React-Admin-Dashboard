import Chart from '../../chart/Chart';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import './home.css';
import WidgetLg from '../../widgetLg/WidgetLg';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Home({industryData}) {
 
  return (
    <div className='home'>
      <FeaturedInfo industryData={industryData} />
      <Chart data={industryData} title="Industry Analytics" grid dataKey="intensity" />
      <div className="homeWidgets">
        
        <WidgetLg data={industryData} />
      </div>
    </div>
  )
}
