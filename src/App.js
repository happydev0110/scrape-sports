import { useState, useEffect } from 'react';
import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios';

import TableComponent from './components/tableComponent';

const TABLE_HEADER = [
  {
    label:'Time'
  },
  {
    label:'Name'
  }
]
function App() {
  const [eventList, setEvenList] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard').then((response) => {
      // console.log(response.data)
      setEvenList(response.data)
      console.log('App render')
    });
  },[])

  return (
    <div className="App">
      <TableComponent 
        header={TABLE_HEADER}
      />
    </div>
  );
}

export default App;
