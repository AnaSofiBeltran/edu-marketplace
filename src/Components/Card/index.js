import React from 'react'

function Card(props) {
  console.log('card',props)
  return (
    <article className='Card'>
        <figure className='Card-figure'>
          <img src={props.cardData.image} alt="imag product"/>
          <figcaption>
            <p> {props.cardData.title}</p>
            <button>Comprar</button>
          </figcaption>
        </figure>
    </article>
  )
}

export default Card