import React from 'react'
import Card from '../Card'

function Content(data) {
  return (
    <section>
        <main>
          <div className='Main-ProductsCards'>
          {
            data 
            ? data.data.data.map(
              (item)=>{
                if(item){
                  return(
                    <Card cardData={item}>
                    </Card>
                  )
                }
              }
              )
            : console.log('no data')
          }
          </div>
        </main>
    </section>
  )
}

export default Content