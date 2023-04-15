import React from 'react'
import './nike.css'
import {SiNike} from 'react-icons/si'
import {AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'




function Nike() {



  return (


    <>


        <nav className="nike">


          <section className="nike-main">

            <div className="left">

              <SiNike className='nike-icon'/>
              
            </div>


            <div className="middle">

              <div className="new">

                <label>New & Featured</label>

                <div className='new-featured'>

                  <span className="new-arrivals">

                    <p className='title'>New Arrivals</p>

                    <p>Shop All</p>
                    <p>New & Upcoming drops</p>
                   
                  </span>


                  <span className="drops">

                    

                  </span>





                </div>


              </div>

              <div className="new">

                <label>men</label>

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

              <div className="sale">

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