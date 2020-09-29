import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LocationIcon() {
  return (
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      style={{
        marginRight: 5
      }}
    />
  )
}
