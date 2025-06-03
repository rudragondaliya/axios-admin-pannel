import React from 'react';
import Aside from '../components/Aside';
import Heropannel from '../components/Heropannel';

const Home = ({productdata}) => {
  return (
    <div>
      <Aside/>
      <Heropannel
       productdata={productdata}
       />
    </div>
  );
}

export default Home;
