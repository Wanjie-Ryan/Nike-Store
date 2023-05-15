import React, { useState } from 'react'
import './nike.css'
import {SiNike} from 'react-icons/si'
import {AiOutlineHeart,AiOutlineSearch, AiOutlineClose,AiOutlineArrowRight} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
 


function Nike() {


  const [showelement, setshowelement] = useState(false)

  const [shownav, setshownav] = useState(false)

  



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

                <BiMenu className='icon-hearts' onClick ={()=> setshownav(!shownav)} />


              </div>


            </div>
 
          </section>


        </nav>


        {shownav &&(

          <>
          
          <div className ='backdrop' onClick ={()=> setshownav(!shownav)}></div>
          
          <side className ='hide-side show-side'>

          <div className="menu">



              <div className="side-nav">


                <AiOutlineClose className ='close' onClick ={()=> setshownav(!shownav)} />


              </div>

              <div className="side-content">

                <div className="new-arrivals">

                  <h3>New Arrivals</h3> 

                  <AiOutlineArrowRight className='right-arrow'/> 
                
                </div>

                <div className="new-arrivals">

                  <h3>Men</h3>

                  <AiOutlineArrowRight className = 'right-arrow'/> 


                </div>


                <div className="new-arrivals">

                  <h3>Women</h3>

                  <AiOutlineArrowRight className='right-arrow'/> 



                </div>

                <div className="new-arrivals">

                  <h3>Kids</h3>

                  <AiOutlineArrowRight className='right-arrow'/> 

                </div>

                <div className="new-arrivals">

                  <h3>Accessories</h3>

                  <AiOutlineArrowRight className='right-arrow'/>

                </div>



                <div className="nike-member">

                  <h3>Become a Nike Member for the best products, inspiration and stories in sports. <span className ='learn-more'> Learn More </span></h3>

                </div>

                <div className="join-btns">

                  <button className="join">Join Us</button>
                  <button className="sign">Sign In</button>

                  
                </div>

                <div className="icons-nike">

                <AiOutlineHeart className='icon-heart'/>
                <BsBag className='icon-heart'/>

              </div>




              </div>


          </div>

        </side>

        </>
        )}



    </>



  )
}

export default Nike