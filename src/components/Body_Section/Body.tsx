import Activity from './ActiveSection/Activity'
import './Body.scss'
import Listining from './ListiningSection/Listining'
import Top from './TopSection/Top'

const Body = () => {
  return (
    <div className='mainContent'>
        <Top />


        <div className='bottom flex'>
            <Listining />
            <Activity />
        </div>
    </div>
  )
}

export default Body