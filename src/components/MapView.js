import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Marcadores from './Marcadores'

export default function MapView() {
  return (
    <MapContainer 
      center={{lat: '17.98174' , lng:'-92.93973'}} 
      zoom={10}
    >
      <TileLayer  
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={{lat: '17.98174' , lng:'-92.93973'}}>
      <Popup>
        <table style={{border: "black 1px solid"}}>
          <thead style={{border: "black 1px solid"}}>Hola</thead>
          <tr style={{border: "black 1px solid"}}>
            <td style={{border: "black 1px solid"}}>Celda 1</td>
            <td style={{border: "black 1px solid"}}>Celda 2</td>
          </tr>
          <tr style={{border: "black 1px solid"}}>
            <td style={{border: "black 1px solid"}}>Celda 3</td>
            <td style={{border: "black 1px solid"}}>Celda 4</td>
          </tr>
        </table>
      </Popup>
    </Marker>
    </MapContainer >
  )
}
