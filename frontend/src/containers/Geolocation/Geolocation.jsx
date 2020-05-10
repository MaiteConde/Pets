import React, { useEffect } from 'react';

const Map = props => {

  function onPositionReceived(position){ 
   const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  console.log(latitude, longitude)

  }
  function locationNotreceived(positionError){
    console.log(positionError)
  }

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotreceived, {timeout:3})
  }

return (
  <p></p>

)

  // let coord =  {position}
//   return (
// <div>


// {/* <GoogleMap defaultZoom={10}
// defaultCenter = {coord}

// coord
//  features = { <Marker position = {coord}
//  icon={{
//  icon: <SmileOutlined />
// }}
// />}
// /> */}
//  </div>

//   );
};

export default 
    (Map
  
)