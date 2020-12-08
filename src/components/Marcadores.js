import React from 'react'
import {Marker} from 'react-leaflet'
import { IconLocation } from './IconLocation'


export default function Marcadores() {
  return (
    <Marker
      position={{lat:'17.9885', lng:'-92.9414'}}
      icon={IconLocation}
    />
  )
}
