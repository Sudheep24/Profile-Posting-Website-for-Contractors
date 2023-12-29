import './topbar.css'
import img from './transparent.png'
import Person2Icon from '@mui/icons-material/Person2';
import logo from './BUILD-UP.png'
const  Posts = '../posts/Posts';


export default function Topbar() {
  return (
    <div className='navbar'>
      
        <div className='left'>
                <img src={logo} alt="" />
             
                <a href="/pages" className='pages-cont' >Home</a>
                <a href ="/pages/Post/Post"  className='pages-cont'>Contractors</a>
              
            </div>
            <div className="right">
              <Person2Icon className='icon'/>
              <div className="options">
                <span>Login</span>
                <span>My Account</span>
              </div>
        </div>
        
    </div>
  )
}
