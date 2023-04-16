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

                    <div className="newarrivals-featured">

                      <div className="new-arrivals">

                        <p className='title'>New Arrivals</p>

                        <p>Shop All</p>
                        <p>New & Upcoming drops</p>
                      
                      </div>

                      <div className="new-arrivals">

                        <p className="title">Featured</p>

                        <p>New in Running</p>
                        <p>Member Exclusive</p>
                        <p>Mother's day shopping</p>


                      </div>

                    </div>


                  <div className="drops">

                    <p className="title">Drops</p>

                    <p>AJ1</p>
                    <p>Dunks</p>
                    <p>Nike lab</p>
                    <p>Drops 101</p>
                    
                  </div>


                    <div className="gender">



                      <div className="newformen">

                        <p className='title'>New for Men</p>

                        <p>Shoes</p>
                        <p>Clothing</p>


                      </div>



                      <div className="newforwomen">

                        <p className="title">New for Women</p>

                        <p>shoes</p>
                        <p>Clothing</p>

                      </div>

                      <div className="newforkids">

                        <p className="title">New for Kids</p>

                        <p>Shoes</p>
                        <p>Clothing</p>


                      </div>

                    </div>




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