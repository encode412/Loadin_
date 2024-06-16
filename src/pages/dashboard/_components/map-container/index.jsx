import React, { useEffect, useState, useRef } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import { spinner } from "../../../../constants/images";
import { useSelector } from "react-redux";

const MapContainer = (props) => {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [containerWidth, setContainerWidth] = useState("70vw");
  const [containerHeight, setContainerHeight] = useState("85vh");
  const pickupLocation = useSelector(
    (state) => state.locationstate?.locationState?.pickupLocation
  );
  const dropoffLocation = useSelector(
    (state) => state.locationstate?.locationState?.dropoffLocation
  );
  const [polylinePath, setPolylinePath] = useState([]);
  const chooseDriver = useSelector(
    (state) => state.eventstate?.eventState?.chooseDriver
  );

  useEffect(() => {
    if(chooseDriver) {
      setContainerWidth('30vw')
      setContainerHeight('40vw')
    }
  })
  const mapRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        // Mobile screen
        setContainerWidth("100vw");
        setContainerHeight("30vh");
      } else if (screenWidth > 768 && screenWidth <= 1024) {
        // Tablet screen
        setContainerWidth("40vw");
        setContainerHeight("60vh");
      }
       else {
        // Desktop screen
        setContainerWidth("70vw");
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

  useEffect(() => {
    if (pickupLocation && pickupLocation.lat && pickupLocation.lng) {
      setPickup(pickupLocation);
    }
  }, [pickupLocation]);

  useEffect(() => {
    if (dropoffLocation && dropoffLocation.lat && dropoffLocation.lng) {
      setDropoff(dropoffLocation);
    }
  }, [dropoffLocation]);

  useEffect(() => {
    if (pickup && mapRef.current) {
      // Move map to the new marker position
      const { lat, lng } = pickup;
      const newPosition = new props.google.maps.LatLng(lat, lng);
      mapRef.current.panTo(newPosition);
    }
  }, [pickup, props.google]);

  useEffect(() => {
    if (pickup && dropoff) {
      // Create a DirectionsService object
      const directionsService = new props.google.maps.DirectionsService();

      // Make a request to get directions between the pickup and dropoff locations
      const request = {
        origin: pickup,
        destination: dropoff,
        travelMode: props.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === props.google.maps.DirectionsStatus.OK) {
          // Extract the polyline path from the result
          const path = result.routes[0].overview_path;

          // Update the state with the polyline path
          setPolylinePath(path);
        }
      });
    }
  }, [pickup, dropoff, props.google.maps.DirectionsService]);

  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "2rem" }}>
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
          onReady={(_, map) => {
            mapRef.current = map;
          }}
        >
          {pickup && <Marker position={pickup} />}
          {currentLocation && !pickup && <Marker position={currentLocation} />}
          {dropoff && <Marker position={dropoff} />}
          {pickup && dropoff && (
            <Polyline
            path={polylinePath}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
            />
          )}
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
