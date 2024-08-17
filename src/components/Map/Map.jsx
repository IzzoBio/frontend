import L from "leaflet";
import trashApi from "../../api/trashs";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const redTrashIcon = new L.Icon({
  iconUrl: "./trash.png",
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// eslint-disable-next-line react/prop-types
const AddMarkerOnClick = ({ onLocationAdd }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationAdd({
        latitude: lat,
        longitude: lng,
        name: "Nouvelle Poubelle",
      });
    },
  });
  return null;
};

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Cannot get current user position:", error);
        setUserPosition([-18.870564722046712, 47.53502344442722]);
      }
    );
  }, []);

  useEffect(() => {
    trashApi
      .getAllTrashs()
      .then((data) => {
        console.log(data);
        setLocations(data);
      })
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleLocationAdd = (newLocation) => {
    setLocations([...locations, newLocation]);
    // Envoyer la nouvelle localisation au backend si nécessaire
    // axios.post('http://localhost:8080/api/locations', newLocation);
  };

  if (!userPosition) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Header title={"Localisation"}/>
        <MapContainer
          center={userPosition}
          zoom={13}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <Search position="topleft" /> */}
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location?.lat, location?.lon]}
              icon={redTrashIcon}
            >
              <Popup>{location?.type}</Popup>
            </Marker>
          ))}
          {/* <AddMarkerOnClick onLocationAdd={handleLocationAdd} /> */}
        </MapContainer>
      </main>
    </div>
  );
};

export default Map;
