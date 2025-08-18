import React from 'react'
import {GoogleMap, LoadScript} from "@react-google-maps/api";
import Featured from '../Sections/Featured';

const Map = () => {

    const containerStyle = {
        width: "100%",
        height: "200px",
        borderRadius: "10px"
    };

    const center = {
        lat: 14.125029,
        lng: 120.997618,
    };

    const mapStyle = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{visibility: "off"}],

   },
];



  return (
   <LoadScript googleMapsApiKey="AIzaSyBGOlquAQoQ7NDvtlhWjcfe4uYcxDPw5oU">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} options={{styles: mapStyle, disableDefaultUI: true}}/>
   </LoadScript>
  )
}

export default Map