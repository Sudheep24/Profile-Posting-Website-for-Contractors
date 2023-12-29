import React from 'react'
import "./logincomp.css"

export default function Logincomp() {
  return (
    <>
    <div className="loginbox">
        <div className="mainhead">Login</div>
          <div className="subhead">Don't have a account?</div>
          <div className="contlog">
          <div className="leftlog"> 
            <label>Username</label>
            < input type="text" name='username' id='username'/>
            <br/>
            <label >Password</label>
            <input type="text" name="password" id="password" />
            <div>
              <button className='logbutt'>Login</button>
            </div>


          </div>

          <div className="rightlog">

            <div className='socialbutt'><button className='google'>Login with Google</button></div>
          </div>
        </div>
    </div>
    </>
  )
}
