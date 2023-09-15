import './Top.scss'
import {BiSearchAlt}   from 'react-icons/bi'
import {TbMessageCircle}   from 'react-icons/tb'
import {BsArrowRightShort, BsQuestionCircle}   from 'react-icons/bs'
import {IoMdNotificationsOutline}   from 'react-icons/io'


import adminIcon from '../../../assets/adminUser.jpg'
import video from '../../../assets/production_id_3816531 (2160p).mp4'
// import video from '../../../assets/video (2160p) (1).mp4'
import img2 from '../../../assets/pexels-karolina-grabowska-4041384-removebg-preview.png'

const Top = () => {
  return (
    <div className='topSection'>
        <div className="headerSection flex">
            <div className='title'>
                <h1>Welcome to Flower Garden</h1>
                <p>Hello User, Welcome back</p>
            </div>

            <div className="searchBar flex">
                <input type="text" placeholder='Search Dashboard' name="" id="" />
                <BiSearchAlt className="icon"/>
            </div>

            <div className="adminDiv flex">
                <TbMessageCircle className="icon" />
                <IoMdNotificationsOutline className="icon" />

                <div className="adminImage">
                    <img src={adminIcon} alt="" />

                </div>

            </div>




        </div>


        <div className="cardSection flex">
            <div className="rightCard flex">
                <h1>Create and sell extraordinary products</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, laudantium?</p>
                <div className="buttons flex">
                    <button className="btn">Explore More</button>
                    <button className="btn transparent">Top Sellers</button>

                </div>

                <div className="videoDiv">
                    <video src={video} autoPlay loop muted></video>
                </div>
            </div>



            <div className="leftCard flex">
                <div className="main flex">
                    <div className="textDiv">
                        <h1>My Stat</h1>

                        <div className="flex">
                            <span>
                                Today <br /> <small>4 Orders</small>
                            </span>

                            <span>
                                This Month <br /> <small>127 Orders</small>
                            </span>
                        </div>

                        <span className="flex link">
                            Go to my orders
                            <BsArrowRightShort className="icon" />
                        </span>


                            
            



                    </div>




                    <div className="imgDiv">
                        <img src={img2} alt="" />
                    </div>


                   



                </div>

                <div className="sideBarCard">
                      <BsQuestionCircle className="icon"/>
                        <div className="cardContent">
                          <div className="circle1"></div>
                          <div className="circle2"></div>

                          <h3>Help Center</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, voluptas?</p>
                          <button className='btn'>Go to help center</button>
                        </div>
              
                    </div>
            </div>

        </div>

    </div>
  )
}

export default Top