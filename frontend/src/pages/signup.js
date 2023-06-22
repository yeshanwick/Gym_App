import React from 'react'
import { useNavigate } from "react-router-dom"
import Heading from '../components/heading'
import styles from './signup.module.css'

export default function Signup() {
  const  navigate = useNavigate();
  return (
    <>
    <div>
      <Heading />
    </div>
    <div>
    
      <section className={styles.section}>
      <form>
        <h1 className={styles.heading}>Sign Up</h1>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 p-3">
           
            <div>
              <label className={styles.labels}>
                Full Name
              </label>
              <input
              id="fullname"
              type="text"
              className={styles.field}
            /> 
            </div>
            

            <div>
              <label className={styles.labels}>
                Birthday
              </label>
              <input
                id="birthday"
                type="date"
                className={styles.field}
                
              />
              
            </div>

            <div>
        <label htmlFor="banches" className={styles.labels}>Gender</label>
            <select id="branches" className={styles.dropdown}>
              <option>Male</option>
              <option>Female</option>
              <option>Not to Reveal</option>
       </select>
        </div>

            <div>
               <label className={styles.labels}>Prefered Branch</label>
              <select id="branches" className={styles.dropdown}>
              <option>Hikkaduwa</option>
              <option>Unawatuna</option>    
              </select>
       </div>

       <div>
            <label className={styles.labels}> Diseases</label>
            <input
              id="diseases"
              type="text"
              className={styles.field}
            />
          </div>


          
          <div>
              <label className= {styles.labels}>
                Email
              </label>
              <input
                id="email"
                type="text"
                className={styles.field}
                />  
            </div>

            <div>
              <label className= {styles.labels}>
                Password
              </label>
              <input
                id="city"
                type="password"
                className={styles.field}
                />  
            </div>

        <div>
      
        <div>
        <label className={styles.labels}>Preference</label>
        </div>

            <input id="default-checkbox" type="checkbox" value="" className={styles.chkbox}/>
            <label className={styles.labels}> Weight Loss</label> <br/>
        
            <input id="checked-checkbox" type="checkbox" value="" className={styles.chkbox}/>
            <label className={styles.labels}> Muscle Building</label> <br/>
       
            <input id="checked-checkbox" type="checkbox" value="" className={styles.chkbox}/>
            <label className={styles.labels}> Athletic Performance</label>

            <input
                id="other"
                type="text"
                className= {styles.shadowfield}
                placeholder="Other"
                
              />

       </div>
   </div>

          <div className="flex items-center">
            <input id="agreement" type="checkbox" value="" className={styles.chkbox}></input>
            <label className= {styles.labels}>
              I agree to the terms and conditions. 
              I understand that the gym is not liable for any injuries or accidents that may occur while using the facilities and that
               it is my responsibility to use the equipment and facilities safely and in accordance with the rules and regulations.
            </label>
          </div>

          <div className="flex justify-center mt-3">
            <button
             onClick={()=>{
              navigate("/memberHome");
            }}
              type="submit"
              className={styles.btn}
              value="Submit"
            > Submit
              </button>
            
          </div>
        </form>
      </section>
    </div>
  </>
  )
}
