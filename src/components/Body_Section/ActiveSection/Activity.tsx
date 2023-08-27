import './Activity.scss'
import {BsArrowRightShort} from 'react-icons/bs'


import user from "../../../assets/bestseller1.jpg"
import user2 from "../../../assets/bestseller2.jpg"
import user3 from "../../../assets/bestseller3.jpg"


const Activity = () => {
  return (
    <div className='activitySection'>

        <div className="heading flex">
            <h1>Resent Activity</h1>

            <button className='btn flex'>
                See All
                <BsArrowRightShort className="icon" />



            </button>
        </div>

        <div className="secContainer grid">
            <div className="singleCustomer flex">
                <img src={user} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Aolla Martha</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    2 min ago
                </div>

            </div>
            <div className="singleCustomer flex">
                <img src={user2} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Olivia Rodrigues</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    5 min ago
                </div>

            </div>
            <div className="singleCustomer flex">
                <img src={user3} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Danielle Ribas</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    8 min ago
                </div>

            </div>

            <div className="singleCustomer flex">
                <img src={user} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Aolla Martha</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    10 min ago
                </div>

            </div>
            <div className="singleCustomer flex">
                <img src={user2} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Olivia Rodrigues</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    12 min ago
                </div>

            </div>

            <div className="singleCustomer flex">
                <img src={user3} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Danielle Ribas</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    20 min ago
                </div>

            </div>

            <div className="singleCustomer flex">
                <img src={user} alt="Customer Image" />

                <div className="costumerDetails">
                    <span className="name">Aolla Martha</span>
                    <small>Ordered a new plant!</small>
                </div>

                <div className="duration">
                    30 min ago
                </div>

            </div>
        </div>

    </div>
  )
}

export default Activity