import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Branch } from "../data/mockData";
import { useNavigate } from "react-router-dom";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// interface Branch {
//   id: string;
//   name: string;
//   address: string;
//   phone: string;
//   coordinates: LatLngTuple;
//   image?: string;
//   description?: string;
// }

interface MapProps {
  center: LatLngTuple;
  zoom?: number;
  branches?: Branch[];
  popUp?: boolean;
  height?: string;
  onMarkerClick?: (branch: Branch) => void;
  className?: string;
}

const Map: React.FC<MapProps> = ({
  center,
  zoom = 13,
  branches = [],
  height = "400px",
  // onMarkerClick,
  popUp = true,
  className = "",
}) => {
  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const handleGetDirections = (branch: Branch) => {
    const [lat, lng] = branch.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(url, "_blank");
  };
  const navigation = useNavigate();
  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {branches.map((branch) => (
          <Marker
            key={branch.id}
            position={branch.coordinates}
            icon={customIcon}
          >
            {popUp && (
              <Popup>
                <div className="p-0 rounded-xl min-w-[200px] overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="h-28 w-full"
                  />
                  <div className="p-2 ">
                    <h3 className="font-semibold text-lg mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 text-sm !mb-2">
                      {branch.address}
                    </p>
                    <p className="text-gray-600 text-sm !mb-3">
                      {branch.phone}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleGetDirections(branch)}
                        className="bg-primary hover:bg-primary-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                      >
                        Get Directions
                      </button>

                      <button
                        onClick={() => navigation(`${branch.id}`)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
