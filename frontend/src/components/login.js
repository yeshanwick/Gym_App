import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css'



export default function Login() {
   const navigate = useNavigate();
  
    return (
      <>
      <div>
      <div>  
      <main className="py-16 mx-auto flex max-h-none w-full items-center justify-center text-white">
  
      <div className = " border-2 p-4 rounded-lg border-orange-400">
      <section className="flex w-[30rem] flex-col space-y-10">
      <div className="text-center text-4xl font-medium">Log In</div>
  
      <div
        className={styles.input}>
        <input
          type="text"
          placeholder="Username"
          className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
      </div>
  
      <div
        className={styles.input}>
          
        <input
          type="password"
          placeholder="Password"
          className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        />
      </div>
  
      <button
        className= {styles.btn}
      >
        LOG IN
      </button>
  
      <a
        href="/"
        className="transform text-center font-semibold text-gray-500 duration-300 hover:text-orange-400"
        >FORGOT PASSWORD ?</a
      >
  
      <p className="text-center text-lg">
        No Account ?
        <Link
          to="/signup">
       <button className="text-orange-400 font-semibold" >Sign Up
       

       </button>
       </Link>
      </p>
      </section>
      </div>
      </main>
      
      </div>
      </div>
      
      </>
    )
  }