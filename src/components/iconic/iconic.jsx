import React from 'react';
import './iconic.css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import img1 from '../../Images/shoes1.jpg';
import img2 from '../../Images/shoes2.jpg';
import img3 from '../../Images/shoes3.jpg';
import img4 from '../../Images/shoes4.jpg';
import img5 from '../../Images/shoes5.jpg';
import img6 from '../../Images/shoes6.jpg';
import img7 from '../../Images/shoes7.jpg';

function Iconic() {
  const dataImages = [
    {
      id: 1,
      img: img1,
      name: 'Nike Air Max 270',
    },
    {
      id: 2,
      img: img2,
      name: 'Nike Air Max 300',
    },
    {
      id: 3,
      img: img3,
      name: 'Nike Air Max 400',
    },
    {
      id: 4,
      img: img4,
      name: 'Nike Air Max 500',
    },
    {
      id: 5,
      img: img5,
      name: 'Nike Air Max 600',
    },
    {
      id: 6,
      img: img6,
      name: 'Nike Air Max 700',
    },
    {
      id: 7,
      img: img7,
      name: 'Nike Air Max 800',
    },
  ];

  return (


    
    <>




          <section className="always-iconic">

              <div className="text"><h3>Always Iconic</h3></div>

            <div className="iconic-cont">


            <Swiper
  
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >






                    {dataImages.map((item) => (
                      <SwiperSlide>
                      <div key={item.id} className='img-cont-iconic'>

                        <div className="nike-img">

                          <img src={item.img} alt={item.name} className='iconic-imgs' />

                        </div>

                        <div className="iconic-img-text">
                          <p>{item.name}</p>

                        </div>
                      </div>
                      </SwiperSlide>
                    ))}

            </Swiper>
                    

            </div>


          </section>
    </>
  );
}

export default Iconic;
