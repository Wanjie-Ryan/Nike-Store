import React, { useState } from 'react'
import './nike.css'
import {SiNike} from 'react-icons/si'
import {AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'




function Nike() {


  const [showelement, setshowelement] = useState(false)



  const showitem =()=>{

    setshowelement(true)

  }

  const hideitem =()=>{


    setTimeout(()=>{

      setshowelement(false)

    },10000)

  
  }





  return (


    <>


        <nav className="nike">


          <section className="nike-main">

            <div className="left">

              <SiNike className='nike-icon'/>
              
            </div>


            <div className="middle">

              <div className="new">

                <label onMouseOver={showitem} onMouseOut={hideitem}>New & Featured</label>

                <div className={`${showelement ? 'new-featured' : 'hide-newFeatured'}`}>

                    <div className="newarrivals-featured">

                      <div className="new-arrivals">

                        <h4 className='title'>New Arrivals</h4>

                        <p>Shop All</p>
                        <p>New & Upcoming drops</p>
                      
                      </div>

                      <div className="new-arrivals">

                        <h4 className="title">Featured</h4>

                        <p>New in Running</p>
                        <p>Member Exclusive</p>
                        <p>Mother's day shopping</p>


                      </div>

                    </div>


                  <div className="new-arrivals">

                    <h4 className="title">Drops</h4>

                    <p>AJ1</p>
                    <p>Dunks</p>
                    <p>Nike lab</p>
                    <p>Drops 101</p>
                    
                  </div>


                    <div className="gender">



                      <div className="new-arrivals">

                        <h4 className='title'>New for Men</h4>

                        <p>Shoes</p>
                        <p>Clothing</p>


                      </div>



                      <div className="new-arrivals">

                        <h4 className="title">New for Women</h4>

                        <p>shoes</p>
                        <p>Clothing</p>

                      </div>

                      <div className="new-arrivals">

                        <h4 className="title">New for Kids</h4>

                        <p>Shoes</p>
                        <p>Clothing</p>


                      </div>

                    </div>




                </div>


              </div>

              <div className="new">

                <label>Men</label>


                <div className={`${showelement ? 'new-featured' : 'hide-newFeatured'}`}>

                    <div className="newarrivals-featured">

                      <div className="new-arrivals">

                        

                      </div>


                      





                    </div>










                </div>








              </div>

              <div className="new">

                <label>Women</label>

              </div>

              <div className="new">

                <label>Kids</label>

              </div>

              <div className="new">

                <label>Accessories</label>

              </div>

              <div className="new">

                <label>Sale</label>

              </div>




            </div>


            <div className="right">

              <div className="search">

                  <div className='icon-search'>

                    <AiOutlineSearch className ='search-icon'/>
                  </div>

                  <div className='input-search'>

                    <input type="text" className="search-box" placeholder='search'/>
                  </div>
                    

              </div>

              <div className="icons-nike">

                <AiOutlineHeart className='icon-heart'/>
                <BsBag className='icon-heart'/>

              </div>


            </div>




            
          </section>








        </nav>


    
    
    
    
    
    </>



  )
}

export default Nike