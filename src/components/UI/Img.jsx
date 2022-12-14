import React from 'react'

const Img = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />
}

export default Img