import React from 'react'
import './iconic.css'



function Iconic() {


    const dataImages = [

      {

        id:1,
        img1: '../../Images/shoes1.jpg',
        name: 'Nike Air Max 270',

      },

      {
        id:2,
        img2: '../../Images/shoes2.jpg',
        name: 'Nike Air Max 300',
      },

      {
        id:3,
        img3: '../../Images/shoes3.jpg',
        name: 'Nike Air Max 400',
      },

      {
        id:4,
        img4: '../../Images/shoes4.jpg',
        name: 'Nike Air Max 500',
      },

      {
        id:5,
        img5: '../../Images/shoes5.jpg',
        name: 'Nike Air Max 600',
      },

      {
        id:6,
        img6: '../../Images/shoes6.jpg',
        name: 'Nike Air Max 700',
      },

      {
        id:7,
        img7: '../../Images/shoes7.jpg',
        name: 'Nike Air Max 800',
      }


    ]



    


  return (


    <>

      <section className="always-iconic">

        <div className="iconic-text">Always Iconic</div>

        <div className="iconic-cont">


          {dataImages.map((item) => (
              <div key={item.id}>
                <img src={item[`img${item.id}`]} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}

        </div>




      </section>



    
    </>


  )
}

export default Iconic