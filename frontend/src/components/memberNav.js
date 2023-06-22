import React from 'react'
import styles from './memberNav.module.css'

export default function memberNav() {
  return (
    <div>
       <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-8">

          <a href="/" className="flex items-center">
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">WELCOME..! </span>
          </a>

          {/* <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button> */}

          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">

            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a href="/" className={styles.navtab}>Home</a>
              </li>
              <li>
                <a href="/" className={styles.navtab}>Workout Schedule</a>
              </li>
              <li>
                <a href="/" className={styles.navtab}>Payments</a>
              </li>
              <li>
                <a href="/" className={styles.navtab}>Equipments</a>
              </li>
              <li>
                <a href="/" className={styles.navtab}>Calory Cal</a>
              </li>
              <li>
                <a href="/" className={styles.navtab}>Progress</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
          </div>
    
  )
}
