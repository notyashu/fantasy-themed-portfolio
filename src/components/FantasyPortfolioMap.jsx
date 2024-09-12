import React, { useEffect, useRef } from "react";
import { MapContainer, ImageOverlay, Polygon, Tooltip, ZoomControl } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PortfolioMapImage from "../assets/Portfolio Map.jpg";
import '../styles/FantasyPortfolioMap.css';

const FantasyPortfolioMap = () => {
  const mapRef = useRef(null);
  const imageWidth = 2048;
  const imageHeight = 1536;
  const bounds = [[0, 0], [imageHeight, imageWidth]];
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const regions = [
    { name: "Projects", coords: [[930, 400], [930, 630], [690, 630], [690, 400]] },
    { name: "Skills", coords: [[1250, 780], [1250, 955], [1062, 955], [1062, 780]] },
    { name: "Experience", coords: [[380, 1414], [380, 1703], [113, 1703], [113, 1414]] },
    { name: "Education", coords: [[805, 1450], [805, 1710], [595, 1710], [595, 1450]] },
    { name: "Contact", coords: [[1037, 1550], [1037, 1780], [827, 1780], [827, 1550]] },
    { name: "About", coords: [[967, 1115], [967, 1310], [763, 1310], [763, 1115]] },
  ];

  const handleClick = (name) => {
    navigate(`/${name.toLowerCase()}`);
  };

  return (
    <div className="fantasy-map-container">
      <MapContainer
        ref={mapRef}
        center={[imageHeight, imageWidth / 2]}
        zoomControl={false}
        zoom={0}
        minZoom={-0.5}
        maxZoom={1.5}
        crs={L.CRS.Simple}
        maxBounds={bounds}
        className="fantasy-map"
      >
        <ImageOverlay url={PortfolioMapImage} bounds={bounds} />
        {regions.map((region, index) => (
          <Polygon
            key={index}
            positions={region.coords}
            pathOptions={{ color: 'transparent', fillOpacity: 0 }}
            eventHandlers={{ click: () => handleClick(region.name) }}
          >
            <Tooltip sticky>{region.name}</Tooltip>
          </Polygon>
        ))}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default FantasyPortfolioMap;