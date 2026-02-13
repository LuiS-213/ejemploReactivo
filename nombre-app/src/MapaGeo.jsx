import{useEffect, useState}from"react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapaGeolocalizacion(){
    const[ubicacion, setUbicacion]=useState(null);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(null);

    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            setUbicacion({
                lat:position.coords.latitude,
                lng:position.coords.longitude
            })
        },
        (error)=> console.error(error),
        {enableHighAccuracy:true}
    )
},[])

const manejarClic = (e) => {
  setUbicacionSeleccionada({
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  });
};

return(
 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
  {ubicacion && (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "300px" }}
      center={ubicacion}
      zoom={15}
      onClick={manejarClic}
    >
      <Marker position={ubicacion} />
      {ubicacionSeleccionada && (
        <>
          <Marker position={ubicacionSeleccionada} />
          {/* Línea entre la ubicación actual y la seleccionada */}
          <Polyline
            path={[ubicacion, ubicacionSeleccionada]}
            options={{
              strokeColor: "#FF0000", // Línea roja
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
        </>
      )}
    </GoogleMap>
  )}
</LoadScript>
)
}
export default MapaGeolocalizacion