import React from 'react';
import { Progress } from 'antd';
const App = () => (
  
  <div className='bars'>
  <div>
   <Progress percent={64} status="active"/>
  <p >REACT</p>    <Progress percent={50} status="active" />
  <p>HTML</p>   <Progress percent={70} status="execption" />
  <p>CSS</p>   <Progress percent={55} status="active" /> 
  <p>POWER BI</p>  <Progress percent={60} status="active" />
  <p>MACHINE-LEARNING</p>  
    <Progress percent={50} status="active" />
    <p>JAVA SCRIPT</p>  
  </div>
  </div>
  
);
export default App;