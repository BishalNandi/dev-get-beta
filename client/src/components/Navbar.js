// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
                  

                  
//   <a className="navbar-brand" href="#">Dev-Get.com</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ml-auto">
//       <li className="nav-item ">
//         <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/about">About</NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link" to="/contact">Contact</NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link" to="/project">Explore Projects</NavLink>
//       </li>
     

//       <li className="nav-item">
//         <NavLink className="nav-link" to="/login">Login</NavLink>
//       </li>
     


//       <li className='nav-item'>
//         <NavLink className="nav-link" to="/signup">Registration</NavLink>
//       </li>
     
     
     
//     </ul>
    
//   </div>
// </nav>
        
        
//         </>
//     )
// }

// export default Navbar;


import React, {useContext} from 'react'
// import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import {UserContext} from "../App";
// import logo from '../Images/logo.jpeg'

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
  console.log(`the navbar user ${state} and ${dispatch}`);
    
    const RenderList = () => {
      
        if (state) {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/about">AboutMe</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/logout">logout</NavLink>
                    </li>
                </>
                
            )
        } else {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/about">AboutUs</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/project">Explore Projects</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/login">Login</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/signup">Register</NavLink>
                    </li>
                  
                    
                </>
            )
        }
    };
      
	return(
               <>
			
            <nav className="  navbar navbar-expand-lg navbar-light bg-warning border-8 border-orange-300  shadow-2xl p-2 ">
                    <NavLink className="navbar-brand" to="#">
                        {/* <img className='w-20 rounded-lg p-2 ' src={logo} alt="logo" /> */}

                        <body className='mainbody'>
<h1 className='animate '>
			<span>D</span>
            <span>e</span>
            <span>v</span>
            <span>-</span>
            <span>G</span>
            <span>e</span>
            <span>t</span>
            <span>.</span>
            <span>C</span>
            <span>o</span>
            <span>m 🌱</span>
            
           
		</h1>
        </body>


            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              
                <RenderList />
      
              
            </ul>
            </div>
            </nav>
        </>
    )
}

export default Navbar;
