import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  return null;
};

const EmployeeDetails = ({ employee }) => {
  const position = [employee.location.coordinates.latitude, employee.location.coordinates.longitude];

  return (
    <div className="mt-2 p-2 bg-gray-100 rounded">
      <p><strong>Full Name:</strong> {employee.fullName}</p>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Location:</strong> {employee.location.city}, {employee.location.country}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Address:</strong> {employee.location.street.number} {employee.location.street.name}, {employee.location.city}, {employee.location.state}, {employee.location.country}</p>
      <div className="mt-4">
        <MapContainer center={position} zoom={13} className="map-container" style={{ height: '300px', width: '100%', borderRadius: '10px' }}>
          <ChangeView center={position} zoom={13} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              {employee.name} lives here.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default EmployeeDetails;
