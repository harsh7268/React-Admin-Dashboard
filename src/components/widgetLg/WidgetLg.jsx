import './widgetLg.css';

export default function WidgetLg({data}) {

  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Industry Data</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
         
          <th className="widgetLgTh">Topic</th>
          <th className="widgetLgTh">Region</th>
          <th className="widgetLgTh">Country</th>
          <th className="widgetLgTh">Intensity</th>
          <th className="widgetLgTh">Insight</th>
          <th className="widgetLgTh">Relevance</th>
          <th className="widgetLgTh">Likelihood</th>
          <th className="widgetLgTh">Start</th>
          <th className="widgetLgTh">End</th>
        </tr>
        {data && data.map((item)=>(
        <tr className="widgetLgTr">
          <td className="widgetLgUser">{item.topic} </td>
          <td className="widgetLgDate">{item.region}</td>
          <td className="widgetLgAmount">{item.country}</td>
          <td className="widgetLgAmount">{item.intensity}</td>
          <td className="widgetLgAmount">{item.insight}</td>
          <td className="widgetLgAmount">{item.relevance}</td>
          <td className="widgetLgAmount">{item.likelihood}</td>
          <td className="widgetLgAmount">{item.start_year}</td>
          <td className="widgetLgAmount">{item.end_year}</td>

        </tr>
       ))}
       
       
      
      </table>
    </div>
  )
}
