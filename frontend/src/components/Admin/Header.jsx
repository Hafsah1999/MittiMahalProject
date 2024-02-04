import { BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle} from 'react-icons/bs'
import Logo from '../../assets/Logo2.png'

const Header = () => {
  return (
    <>
    
    <header className="flex items-center shadow justify-between  py-2 px-4" >
      <div>
        <img src={Logo} alt=""  className='w-25'/>
      </div>
       
        <div className='' >
            {/* <BsSearch className='fs-4'/> */}
        </div>
        <div className="flex px-2">
            <BsFillBellFill  className='fs-4'/>
            <BsFillEnvelopeFill className='mx-3 fs-4'/>
            <BsPersonCircle className='fs-4' />
        </div>
    </header>
    
    </>
  )
}

export default Header