import './Listining.scss'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


import img from "../../../assets/plantnobgcard1.png"
import img2 from "../../../assets/plantnobgcard2.png"
import img3 from "../../../assets/plantnobgcard3.png"
import img4 from "../../../assets/plantnobgcard4.png"
import img5 from "../../../assets/plantnobgcard5.png"

import bstSeller1 from "../../../assets/bestseller1.jpg"
import bstSeller2 from "../../../assets/bestseller2.jpg"
import bstSeller3 from "../../../assets/bestseller3.jpg"


const Listining = () => {
  return (
    <div className='listiningSection'>

        <div className="heading flex">
            <h1>My Listings</h1>
            <button className='btn flex'>
                See All
                <BsArrowRightShort className="icon" />
                </button>
        </div>



        <div className="secContainer flex">

            <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={img} alt="" />
                <h3>Anual Vince</h3>


            </div>

            <div className="singleItem">
                <AiOutlineHeart className="icon" />
                <img src={img2} alt="" />
                <h3>Anual Vince</h3>


            </div>

            <div className="singleItem">
                <AiOutlineHeart className="icon" />
                <img src={img3} alt="" />
                <h3>Anual Vince</h3>


            </div>

            <div className="singleItem">
                <AiOutlineHeart className="icon" />
                <img src={img4} alt="" />
                <h3>Anual Vince</h3>


            </div>

            <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={img5} alt="" />
                <h3>Anual Vince</h3>


            </div>

        </div>

        <div className="sellers flex">
            <div className="topSellers">
                 <div className="heading flex">
                    <h3>Top Sellers</h3>

                    <button className='btn flex'>
                See All
                <BsArrowRightShort className="icon" />
                </button>

                 </div>

                 <div className="card flex">
                    <div className="users">
                        <img src={bstSeller1} alt="" />
                        <img src={bstSeller2} alt="" />
                        <img src={bstSeller3} alt="" />
                    </div>

                    <div className="cardText">
                        <span>
                            14.556 Plants sold <br />

                            <small>
                                21 Sellers <span className='date'>7 Days</span>

                            </small>

                        </span>

                    </div>
                 </div>
            </div>



            <div className="featuredSellers">
                 <div className="heading flex">
                    <h3>Featured Sellers</h3>

                    <button className='btn flex'>
                See All
                <BsArrowRightShort className="icon" />
                </button>

                 </div>

                 <div className="card flex">
                    <div className="users">
                        <img src={bstSeller1} alt="" />
                        <img src={bstSeller2} alt="" />
                        <img src={bstSeller3} alt="" />
                    </div>

                    <div className="cardText">
                        <span>
                            38.556 Plants sold <br />

                            <small>
                                26 Sellers <span className='date'>34 Days</span>

                            </small>

                        </span>

                    </div>
                 </div>
            </div>
        </div>


    </div>
  )
}

export default Listining