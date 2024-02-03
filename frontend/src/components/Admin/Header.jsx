import { BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'


const Header = () => {
  return (
    <>
    
    <header className="flex items-center justify-between py-1 px-4" >
        <div className="none">
            <BsJustify className='fs-4' />
        </div>
        <div className=''>
            <BsSearch className='fs-4'/>
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