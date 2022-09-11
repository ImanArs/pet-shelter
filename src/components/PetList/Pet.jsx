import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../UI/Heading'

import styles from './Pet.module.scss'
import Fem from '../../img/female.png'
import Male from '../../img/male.png'

export const Pet = () => {

    const {id} = useParams();
    const [pets, setPets] = useState({})
    const [loading, setLoading] = useState(true)

    const getPetData = () => {
      axios.get(`https://620f994cec8b2ee28345f5a4.mockapi.io/tour/${id}`)
      .then(res => {
        setPets(res.data)
        setLoading(false)
      })
    }
    useEffect(() => {
      console.log(pets);
      getPetData()
    }, [])

    const genderData = () => {
      if (pets.sex === 'girl') {
        return (
          <span>
            <img src={Fem} alt="fem" width={50} />
          </span>
          )
        } else {
          return (
          <span>
            <img src={Male} alt="fem" width={50} />
          </span>
        )
      }

    }

    if (loading) {
      return (
        <div>
          <div class="lds-facebook">
            <div></div><div></div><div></div>
          </div>
        </div>
      )
    }

  return (
    <div>
      <div className={styles.pet__wrapper}>
        <div className={styles.pet__left}>
          <div className={styles.pet__left__info}>
            <Heading tag={'h2'} text={pets.name} />
            <p>возраст : {pets.age}</p>
            <p>пол : {pets.sex}{genderData()  }</p>
            
            <p>животное : {pets.type}</p>
          </div>
        </div>
        <div className={styles.pet__right}>
          <div className={styles.pet__right__img}>
            <img src={pets.img} alt="photo" width={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pet;
