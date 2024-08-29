import React from 'react'
import LatestBusinessNews from '../components/businessNewsPage/LatestBusinessNews';
import AllBusinessNews from '../components/businessNewsPage/AllBusinessNews';
function BusinessNewsPage() {
  return (
    <div className="site-page">
      <LatestBusinessNews />
      <AllBusinessNews/>
    </div>
  );
}

export default BusinessNewsPage