import { BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'


const Header = () => {
  return (
    <>
    
    <header className="flex items-center justify-between py-1" style={{boxShadow:"0 6px 7px -3px black"}}>
        <div className="menu-icon">
            <BsJustify className='icon' />
        </div>
        <div className=''>
            <BsSearch />
        </div>
        <div className="">
            <BsFillBellFill />
            <BsFillEnvelopeFill />
            <BsPersonCircle />
        </div>
    </header>
    
    </>
  )
}

export default Header