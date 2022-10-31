import './featuredInfo.css';
import { ArrowDownward,ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';

export default function FeaturedInfo({industryData}) {
  const [region,setRegion] = useState(null);
  const [country,setCountry] = useState(null);
  const [topic,setTopic] = useState(null);
  const removeDublicate = (arr) =>{
    let arr1 = arr.filter((value,index,self)=>
       index===self.findIndex((t)=>(
        t.region===value.region
       ))   
    );
    setRegion(arr1.length);

    arr1 = arr.filter((value,index,self)=>
       index===self.findIndex((t)=>(
        t.country===value.country
       ))   
    );
    setCountry(arr1.length);

    arr1 = arr.filter((value,index,self)=>
    index===self.findIndex((t)=>(
     t.topic===value.topic
    ))
 );

 setTopic(arr1.length);
  }
  useEffect(()=>{
    const today = new Date();
    console.log(industryData);
      let arr=industryData.filter((item) => item.end_year===today.getFullYear());
     removeDublicate(arr);
  },[]);
  return (
    <>{ region &&
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Regions</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">{  region}</span>
            
        </div>
        <span className="featuredSub">
            compared to last Year
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Countries</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">{country}</span>
        </div>
        <span className="featuredSub">
            compared to last Year
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Topics</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">{ topic}</span>
        </div>
        <span className="featuredSub">
            compared to last Year
        </span>
      </div>
    </div>
}
    </>
  
  )
}
