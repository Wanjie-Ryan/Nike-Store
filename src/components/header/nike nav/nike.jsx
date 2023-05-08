import React, { useState } from 'react'
import './nike.css'
import {SiNike} from 'react-icons/si'
import {AiOutlineHeart,AiOutlineSearch, AiOutlineClose,AiOutlineArrowRight} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
 


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

              {/* for the middle section, create a navbar which will be displayed in smaller screens showing the contents  */}

              {/* the items remaining on the screen will only be the searchbar, love and shop */}

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

                    {/* MEN SECTION */}



              <div className="new">

                <label onMouseOver={showitem} onMouseOut={hideitem}>Men</label>

                

                <div className=  {`${showelement ? 'new-featured' : 'hide-newFeatured'}`} >

                    <div className="newarrivals-featured">

                    </div>


                </div>

              </div>


                  {/* WOMEN SECTION  */}


              <div className="new">

                <label onMouseOver={showitem} onMouseOut={hideitem}>Women</label>

                <div className= {`${showelement ? 'new-featured' : 'hide-newFeatured'}`}>

                </div>



              </div>


                    {/* KIDS SECTION */}


              <div className="new">

                <label onMouseOver={showitem} onMouseOut={hideitem}>Kids</label>

                <div className= {`${showelement ? 'new-featured' : 'hide-newFeatured'}`}>

                </div>

              </div>


                  {/* ACCESSORIES SECTION */}

              <div className="new">

                <label onMouseOver={showitem} onMouseOut={hideitem}>Accessories</label>

                <div className= {`${showelement ? 'new-featured' : 'hide-newFeatured'}`}>

                </div>

              </div>


                  {/* SALES SECTION */}

              <div className="new">

                <label onMouseOver={showitem} onMouseOut={hideitem}>Sale</label>

                <div className= {`${showelement ? 'new-featured' : 'hide-newFeatured'}`}>

                </div>

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

              <div className="icons-nike">

                <BiMenu className='icon-hearts'/>


              </div>


            </div>
 
          </section>


        </nav>


        <side>

          <div className="side-nav">


            <AiOutlineClose/>


          </div>

          <div className="side-content">

            <div className="new-arrivals">

              <h3>New Arrivals</h3> 

              <AiOutlineArrowRight/> 
            
            </div>



          </div>



        </side>



    </>



  )
}

export default Nike