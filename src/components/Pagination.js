import React from 'react'

const Pagination = ({ petsPerPage, totalPets}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
        pageNumbers.push(i)
        
    }
  return (
    <div>
        <ul>
            {
                pageNumbers.map(number => (
                    <li key={number}>
                        <a>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination