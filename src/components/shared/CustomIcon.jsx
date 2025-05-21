import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function CustomIcon({color}) {
    


  return (
    <>
        <div className={`fs-2 icon d-flex justify-content-center align-items-center`}>
            <div style={{backgroundColor:color}} className='line me-3'></div>
            <span style={{color:color}} ><FontAwesomeIcon icon={faStar} /></span>
            <div style={{backgroundColor:color}} className='line ms-3'></div>
        </div>
    </>
  )
}
