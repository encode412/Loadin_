import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { spinner } from "../../../../constants/images";

const MapContainer = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [containerWidth, setContainerWidth] = useState("70vw");
  const [containerHeight, setContainerHeight] = useState("85vh");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        // Mobile screen
        setContainerWidth("100%");
        setContainerHeight("50vh");
      } else if (screenWidth > 768 && screenWidth <= 1024) {
        // Tablet screen
        setContainerWidth("60%");
        setContainerHeight("60vh");
      } else {
        // Desktop screen
        setContainerWidth("50vw");
        setContainerHeight("70vh");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "2rem",}}>
      {currentLocation ? (
        <Map
          google={props.google}
          zoom={14}
          initialCenter={currentLocation}
          containerStyle={{
            position: "relative",
            width: containerWidth,
            height: containerHeight,
          }}
        >
          <Marker position={currentLocation} />
        </Map>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <img src={spinner} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZM-DqObpYUwm2nx-iAqs_wXdJ65r1FVY",
})(MapContainer);
