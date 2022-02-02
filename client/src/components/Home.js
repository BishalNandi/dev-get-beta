import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../App';
import { NavLink } from 'react-router-dom'

 
const Home = () => { 
    // / update / 
    const { state, dispatch } = useContext(UserContext); 
    const [userName, setUserName] = useState(''); 
    const [show, setShow] = useState(false); 
 
    const userHomePage = async () => { 
        try { 
            const res = await fetch('/getdata', { 
                method: "GET", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
            }); 
 
            const data = await res.json(); 
            // console.log(data); 
            setUserName(data.name); 
            setShow(true); 
            // / update **/ 
            dispatch({ type: 'USER', payload: true }); 
 
        } catch (err) { 
            console.log(err); 
        } 
    } 
 
    useEffect(() => { 
        userHomePage(); 
    }, []); 
    return ( 
        <> 
            <div className="home-page"> 
                <div className="home-div"> 
                    <p className="pt-5">WELCOME</p> 
                    <h1>{userName}</h1> 
                    <h2> { show ? 'Happy, to see you back' :  'We Are The MERN Developer' }</h2> 
                </div> 
            </div> 

            {/* added extra   */}

             {/* FIRST SECTION    */}

    <main className='bg-gray-100 flex text-black w-full py-1'>
                <div className='main py-8 px-20'>
                Find a Perfect   <br />
                    <div className=' py-2 text-4xl'>
                   Project Partner...
                    </div>
                    <p>A central location to find coders, Collab <br />and work on projects.An open platform <br />to get access  to mini projects,source code,<br />notes and weekly doubt clearing sessions.<br /> Also enroll for Internships and certificate courses❕</p>
                    <div className='my-4'>

                    <button className='px-2 mx-4 py-1 rounded-md text-violet-700 border-2  border-pink-400  hover:bg-violet-500 hover:text-white'><NavLink className="nav-link" to="/">Hire Project Partner</NavLink></button>


                        {/* <button className='px-5 py-1 rounded-md shadow-md bg-blue-700 space-x-2 mx-2 text-white border-4 hover:text-indigo-50 '>Hire ProjectPartner</button> */}
                        
                        <button className='px-2 mx-6 py-1 rounded-md text-violet-700 border-2  border-pink-400  hover:bg-violet-500 hover:text-white'><NavLink className="nav-link" to="/project">Explore Projects</NavLink></button>
                        {/* <button className='px-5 py-1 rounded-md text-violet-700 border-2 mx-2 border-pink-400  hover:bg-violet-500 hover:text-white'>Explore Works</button> */}
                        

                        <marquee className='m-4 text-green-600'>EXPLORE THE PROJECTS ~ GET SOURCE-CODE ~ NOTES ~ ENROLL IN WEEKLY DOUBT CLEARING SESSIONS  <button className='space-x-8 text-blue-600 underline'>Knowmore</button></marquee>

                        <h3 className='changingtwo'> Get access to mini projects like : <span class="change_content"></span></h3>
                    </div>
                    <div>
 
          </div>
          <h3 className='changing'>COLLABORATE,&nbsp; LEARN &&nbsp; GROW 🌱</h3>
        
                </div>
               
       

            <div className='flex items-right'>
            <img className="w-full border-gray-100 h-screen" src="./images/19.jpg" alt="error loading" />
            </div>
            </main>

        {/* SECOND SECTION      */}
{/* 
            <div className=' bg-white text-2xl py-8'>
            
            <h1 className=' font-bold  px-20'>What are you looking for ? 
            <button className='inline-block float-right  text-blue-700'>View all</button></h1>
             */}
            {/* </div> */}

        {/* THIRD SECTION  */}
{/* 
        <div className=' bg-white flex flex-wrap py-4 justify-center'>

<div className='flex flex-col bg-black  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
    
    <img className='h-20 m-6' src="./images/react.png" alt='error loading'/>
    
    <h2 className=' bg-white text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>React Developer</h2>

</div>


<div className='flex flex-col bg-black rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
    
    <img className='h-20 m-6' src="./images/angular.png" alt='error loading'/>
    
    <h2 className=' bg-cyan-300  hover:bg-gray-200 text-center pb-2  transition-all duration-500 text-black cursor-pointer px-2'>Angular Developer</h2>

</div>

<div className='flex flex-col bg-black  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
    
    <img className='h-20 m-6' src="./images/python.png" alt='error loading'/>
    
    <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Python Developer</h2>

</div>


<div className='flex flex-col bg-black  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
    
    <img className='h-20 m-6' src="./images/android.png" alt='error loading'/>
    
    <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Android Developer</h2>

</div> */}

{/* </div> */}

{/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3 "> */}
      {/* <img src='./images/19.jpg' alt='none'/> */}
    
        {/* <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className='lg:h-48 md:h-36 w-full object-cover object-center' src="./images/react.png " alt='error loading'/>
        <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
        {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          <p class="leading-relaxed mb-3">In a nutshell, a React developer designs and implements user-facing features for websites and applications using React. They are front-end developers.</p>
          </div> */}
      {/* </div>
    </div>
    </div> */}
          {/* <a class="text-indigo-500 inline-flex items-center">Hire a Developer..</a> */}
            {/* <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg> */}
            {/* </span> */}
          {/* </div> */}

          {/* <div class="container px-5 py-2 mx-auto"> */}
    {/* <div class="flex flex-wrap -m-4"> */}
    
      {/* <img src='./images/19.jpg' alt='none'/> */}
      {/* <div class="p-4 md:w-1/3 ">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className='' src="./images/react.png " alt='error loading'/>
        <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
          <p class="leading-relaxed mb-3">In a nutshell, a React developer designs and implements user-facing features for websites and applications using React. They are front-end developers.</p>
          </div>
      </div> */}
    {/* </div>
  </div> */}
 {/* </div>
 </div> */}


 {/* EXPERIMENT PURPOSE  */}

 <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap w-full mb-14 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What are you looking for ❔</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 underline underline-offset-2">Are you comfortable with backend and want a project partner who knows frontend or vice-versa❔<br/> <span>Dev-Get will help you to find the best collab ✅</span></p>
    </div>



   
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg> */}
             <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
             <img className='h-12 m-8' src="./images/react.png" alt='error loading'/>
    
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">React Developer</h2>
          <p class="leading-relaxed text-base">In a nutshell, a React developer designs and implements user-facing features for websites and applications using React. They are front-end developers.</p>
        </div>
      </div>


      
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img className='h-12 m-8' src="./images/angular.png" alt='error loading'/>
    
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Angular Developer</h2>
          <p class="leading-relaxed text-base">In a nutshell, a Angular developer designs and implements user-facing features for websites and applications using Angular. They are front-end developers</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img className='h-12 m-8' src="./images/python.png" alt='error loading'/>
    
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Python Developer</h2>
          <p class="leading-relaxed text-base">A Python Developer is responsible for coding, designing, deploying, and debugging development projects, typically on the server-side (or back-end).</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img className='h-12 m-8' src="./images/android.png" alt='error loading'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Android Developer</h2>
          <p class="leading-relaxed text-base">An Android Developer is a software developer who specializes in designing applications for android operating systems. Android is an operating system.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img className='h-12 m-8' src="./images/laravel.png" alt='error loading'/>
    
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Laravel Developer</h2>
          <p class="leading-relaxed text-base">A Laravel developer is a software professional who specializes in the Laravel framework. ... Created by Taylor Otwell in 2011, Laravel creates web applications using Symfony.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img className='h-12 m-8' src="./images/flutter.png" alt='error loading'/>
    
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Flutter Developer</h2>
          <p class="leading-relaxed text-base">A Flutter developer is an individual who uses the Flutter framework to develop cross-platform applications.Flutter is an open-source UI software development kit created by Google.</p>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">View All</button>
  </div>
</section>
 
                      {/* third sectionh started here  */}

<section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-md underline underline-offset-1 text-indigo-500 tracking-widest font-medium title-font mb-1">POPULAR PROJECTS</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">CSS✅TAILWINDCSS✅JAVASCRIPT✅REACT✅NODEJS✅<br/>MONGODB✅EXPRESSJS✅</h1>
    </div>


    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            
               <img src='./images/calc.jpg' alt='none'/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Digital Calculator</h2>
          </div>
          <div class="flex-grow">
           
            <img src='./images/calculator.png' alt='none'/>
           
          </div>
        </div>
      </div>


      


      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src='./images/tempd.jpg' alt='none'/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Temperature Converter</h2>
          </div>
          <div class="flex-grow">
          <img src='./images/tempcv.jpg' alt='none'/>
            
        </div>
      </div>
      </div>


      
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img className='rounded-xl' src='./images/clockr.jpg' alt='none'/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Digital Clock</h2>
          </div>
          <div class="flex-grow">
          <img src='./images/clockr.jpg' alt='none'/>
            
        </div>
      </div>
      </div>

      
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src='./images/slotmachine.png' alt='none'/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Slot Machine Game</h2>
          </div>
          <div class="flex-grow">
          <img src='./images/slotmachine.png' alt='none'/>
            
        </div>
      </div>
      </div>


      
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src='./images/tempd.jpg' alt='none'/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Form Validation</h2>
          </div>
          <div class="flex-grow">
          <img src='./images/tempcv.jpg' alt='none'/>
            
        </div>
      </div>
      
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src='./images/tempd.jpg' alt='none'/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium"> Landing Page</h2>
          </div>
          <div class="flex-grow">
          <img src='./images/tempcv.jpg' alt='none'/>
            
        </div>
      </div>
      </div>
      <button class="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">View All</button>
      </div>
      </div>
      

      </section>

        {/* FIFTH SECTION  */}


        {/* <div className='flex  justify-center h-min w-screen  p-20 py-16'  >

<div className='bg-gray-100 py-2 px-2 rounded-lg'>

<img className='px-20' src="./images/pp.png" alt='error loading'/>


<h1 className='text-3xl font-bold'>Looking for some brilliant project partner ? </h1> <br/> <span> An open platform to find coders/project partners based on skills and projects. Showcase your work!</span> 

<div className='px-36 py-4 my-4'>
        <button className='px-10 border-pink-300 hover:bg-violet-500   rounded-md shadow-md bg-gray-200 space-x-2 mx-2 text-black border-4 hover:text-indigo-50 '>Hire ProjectPartner</button>
</div>

</div>

<div className='bg-teal-600 text-white rounded-lg  font-bold py-4 m-4 mx-10 '>
<h1>Grab the chances to get access to manny begginer friendly mini projects
along with source code, notes and doubt clearing ssessions. </h1> <br/>
 <span className='font-small'>

        This is not just a project partner finder portal, but also begginer friendly portal where begginers can start working with mini projects provided on the portal, also access the source code of the project , get notes and also enroll for doubt clearing sessions which are going on held on every weekend days on Google Meet Platform. 

 </span>
<div className='py-4 px-20'>
 <button className='px-6 border-pink-300 hover:bg-violet-500   rounded-md shadow-md bg-gray-200 space-x-2 mx-2 text-black border-4 hover:text-indigo-50 '>Create Profile</button>
</div>
</div>
</div> */}

{/* fifth section started here  */}

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
  <img className='px-20' src="./images/pp.png" alt='error loading'/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Looking for a perfect project partner ❔</h1>
      <p class="mb-8 leading-relaxed">An open platform to find coders/project partners based on skills and projects. Showcase your work ❕ <br/> This is not just a project partner finder portal, but also begginer friendly portal where begginers can start working with mini projects provided on the portal, also access the source code of the project , get notes and also enroll for doubt clearing sessions which are going on held on every weekend days on Google Meet Platform. </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Project Partner</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Beginner Projects</button>
      </div>
    </div>
  </div>
</section>

       {/* fifth section ended here  */}


      {/* sixth section started here  */}

      <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base underline underline-offset-2">Meet the team behind Dev-Get.com.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Bishal Nandi</h2>
            <p class="text-gray-500">Front-End Developer</p>
          </div>
        </div>
      </div>
     
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Pushpa Kumari</h2>
            <p class="text-gray-500">Backend-Developer</p>
          </div>
        </div>
      </div>
     </div>
  </div>
</section>


      {/* sixth section ended here  */}

      {/* seventh section starts here  */}

      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
          <p class="leading-relaxed">COMMENTS....</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Somnath Khillari</h2>
          <p class="text-gray-500">Designation, IBM</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"/>
          <p class="leading-relaxed">COMMENTS...</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Rahul Kumar</h2>
          <p class="text-gray-500">Designation, IBM</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"/>
          <p class="leading-relaxed">COMMENTS...</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Siddiq Pasha</h2>
          <p class="text-gray-500">Designation, Edunet</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* seventh section ends here  */}
       
       
       
             
        </> 
    ) 
} 
 
 
 
export default Home