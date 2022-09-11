import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Heading from '../UI/Heading'
import styles from './PetList.module.scss'
import {Link} from 'react-router-dom'

import Logo from '../../img/pet.png'
import Categories from '../Categories'
import Pagination from '../Pagination'


function PetList() {
  const [pets, setPets] = useState([])
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [petsPerPage] = useState(6)

  const [loading, setLoading] = useState(true)

  const getPetsData = async () => {
    await axios.get('https://620f994cec8b2ee28345f5a4.mockapi.io/tour')
    .then(res => {
      setPets(res.data)
      setLoading(false)
    })
    
  }
  
  const newArrPets = pets.filter(pet => {
    return pet.name.toLowerCase().includes(value.toLowerCase())
  }, 300)
  
  useEffect(() => {
    getPetsData()
  }, [])

  const check = (newArrPets) => {
    if (!newArrPets) {
      
    } else {
      
    }
  }
  
  const lustPetIndex = currentPage * petsPerPage
  const firstPetIndex = lustPetIndex - petsPerPage
  const curretnPet = pets.slice(firstPetIndex, lustPetIndex)
  // curretnPet(5)

  if (loading) {
    return (
      <div className={styles.loading}>
        <div class="lds-facebook">
          <div></div><div></div><div></div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.pet}>
      <div className={styles.pet__inp}>
        <input 
          className={styles.inp} 
          value={value} onChange={e=> setValue(e.target.value)} 
          type="text"
          placeholder='Найдите друга по кличке . . .'
          />
          <Categories />
      </div>
      <div className={styles.pet__grid}>
      { newArrPets.length > 1 ?
        newArrPets.map(item => {
          // curretnPet(5)
          return (
            <div key={item.id} className={styles.pet__card}>
              <div className={styles.pet__card__wrapper}>
                  <img src={item.img} alt="logo"  />
                <div  className={styles.pet__info}>
                  <Heading tag={'h3'} text={item.name.toUpperCase()} />
                  <p>возраст :{item.age} лет</p>
                  <p>пол : {item.sex}</p>
                  <div className={styles.pet__button}>
                  <Link key={item.id} to={`/tour/${item.id}`} >
                    <button>Подробнее</button>
                  </Link>
                  <a href="">
                    <button>позвонить </button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        : 
        <p>
          dcfvbnm
        </p>
      }
      </div>
      <Pagination petsPerPage={petsPerPage} totalPets={pets.length} />
    </div>
  )
}

export default PetList