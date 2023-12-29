import './header.css'
import img from '../topbar/transparent.png'
import Search from '../searchbar/Search'
export default function Header() {
  return (
    <>
    <div className='header'>
   
    <div className='title'>
        Build Up
        <img src={img} alt="" />
    </div>
   <Search/>
    <span className='subtag'>  Search.Find.Build </span>
    </div>
    </>
  )

}
