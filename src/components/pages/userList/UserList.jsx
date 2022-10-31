import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';


export default function UserList() {
  const [data,setData] = useState([]);

  const getData = async () =>{
    const response = await fetch(`http://localhost:5000/api/industries/get`,{
      method:'GET',
      headers:{
        'Content-Type':"application/json"
      }
});
        const result = await response.json();
        console.log(result);
        setData(result);
  }

  useEffect(()=>{
   getData();
  },[]);
   

   const handleDelete = (id) =>{
      setData(data.filter(item => item.id !== id));
   }

    const columns = [
       {field:'id',headerName:'Id',width:150},
        {
          field: 'topic',
          headerName: 'Topic',
          width: 200, 
         renderCell: (params) =>{
            return (
               <div className='userListUser'>
                  {params.row.topic}
               </div>
            )
         }
        },
        {
          field: 'region',
          headerName: 'Region',
          width: 250,

        },
        {
          field: 'country',
          headerName: 'Country',
          width: 250,
        },
        {
          field: 'intensity',
          headerName: 'Itensity',
          width: 200,
        },
        {
          field: 'insight',
          headerName: 'Insight',
          width: 200,
        },
        {
          field: 'relevance',
          headerName: 'Relevance',
          width: 200,
        },
        {
          field: 'pestle',
          headerName: 'Pestle',
          width: 200,
        },
        {
          field: 'likelihood',
          headerName: 'Likelihood',
          width: 200,
        },
        {
          field: 'start_year',
          headerName: 'Start Year',
          width: 200,
        },
        {
          field: 'end_year',
          headerName: 'End Year',
          width: 200,
        }
     
      ];
      
     

  return (
    <div className="useList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection  />
    </div>
  )
}
