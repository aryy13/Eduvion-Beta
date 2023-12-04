import React from "react";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 
import Calendar from "../components/Calendar";
import Form from "../components/form";



const Kalender = () => {
   return (
        <>
<header className="navbar navbar-expand-lg navbar-primary bg-primary p-2 shadow-sm fixed-top"> 
            <a className="navbar-brand text-white fw-bold" href= "/"> EDUVION </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarNav">   
            <ul className="navbar-nav ms-auto">

            
                <li className="nav-item m-2">
                    <a className="nav-link text-white" aria-current="page" href="#"> Dahboard</a>
                </li>
              
                <Link to="/Kalender">
                <li className="nav-item m-2">
                    <a className="nav-link  active text-white" href="#">Kalender </a>
                </li></Link>

               <Link to="/Bimbingan">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Bimbingan</a>
                </li> </Link>
                <Link to="/Repository">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">E-Repository</a>
                </li></Link>
 </ul>
        </div>
        </header>
 

 <section>
  <div className="container">
    <div className="row">
 <div className="a m-cust-tp col-md-4 col-sm-12"> 
      <h4 className='fs-custom3'>
      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className="m-cust-rg3">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 9.75C7.95507 9.75 6.5 11.2051 6.5 13V42.25C6.5 44.0449 7.95507 45.5 9.75 45.5H42.25C44.0449 45.5 45.5 44.0449 45.5 42.25V13C45.5 11.2051 44.0449 9.75 42.25 9.75H9.75ZM3.25 13C3.25 9.41015 6.16015 6.5 9.75 6.5H42.25C45.8399 6.5 48.75 9.41015 48.75 13V42.25C48.75 45.8399 45.8399 48.75 42.25 48.75H9.75C6.16015 48.75 3.25 45.8399 3.25 42.25V13Z" fill="#0F172A"/>
<path d="M30.0625 26C31.4087 26 32.5 24.9087 32.5 23.5625C32.5 22.2163 31.4087 21.125 30.0625 21.125C28.7163 21.125 27.625 22.2163 27.625 23.5625C27.625 24.9087 28.7163 26 30.0625 26Z" fill="#0F172A"/>
<path d="M38.1875 26C39.5337 26 40.625 24.9087 40.625 23.5625C40.625 22.2163 39.5337 21.125 38.1875 21.125C36.8413 21.125 35.75 22.2163 35.75 23.5625C35.75 24.9087 36.8413 26 38.1875 26Z" fill="#0F172A"/>
<path d="M30.0625 34.125C31.4087 34.125 32.5 33.0337 32.5 31.6875C32.5 30.3413 31.4087 29.25 30.0625 29.25C28.7163 29.25 27.625 30.3413 27.625 31.6875C27.625 33.0337 28.7163 34.125 30.0625 34.125Z" fill="#0F172A"/>
<path d="M38.1875 34.125C39.5337 34.125 40.625 33.0337 40.625 31.6875C40.625 30.3413 39.5337 29.25 38.1875 29.25C36.8413 29.25 35.75 30.3413 35.75 31.6875C35.75 33.0337 36.8413 34.125 38.1875 34.125Z" fill="#0F172A"/>
<path d="M13.8125 34.125C15.1587 34.125 16.25 33.0337 16.25 31.6875C16.25 30.3413 15.1587 29.25 13.8125 29.25C12.4663 29.25 11.375 30.3413 11.375 31.6875C11.375 33.0337 12.4663 34.125 13.8125 34.125Z" fill="#0F172A"/>
<path d="M21.9375 34.125C23.2837 34.125 24.375 33.0337 24.375 31.6875C24.375 30.3413 23.2837 29.25 21.9375 29.25C20.5913 29.25 19.5 30.3413 19.5 31.6875C19.5 33.0337 20.5913 34.125 21.9375 34.125Z" fill="#0F172A"/>
<path d="M13.8125 42.25C15.1587 42.25 16.25 41.1587 16.25 39.8125C16.25 38.4663 15.1587 37.375 13.8125 37.375C12.4663 37.375 11.375 38.4663 11.375 39.8125C11.375 41.1587 12.4663 42.25 13.8125 42.25Z" fill="#0F172A"/>
<path d="M21.9375 42.25C23.2837 42.25 24.375 41.1587 24.375 39.8125C24.375 38.4663 23.2837 37.375 21.9375 37.375C20.5913 37.375 19.5 38.4663 19.5 39.8125C19.5 41.1587 20.5913 42.25 21.9375 42.25Z" fill="#0F172A"/>
<path d="M30.0625 42.25C31.4087 42.25 32.5 41.1587 32.5 39.8125C32.5 38.4663 31.4087 37.375 30.0625 37.375C28.7163 37.375 27.625 38.4663 27.625 39.8125C27.625 41.1587 28.7163 42.25 30.0625 42.25Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.25C13.8975 3.25 14.625 3.97754 14.625 4.875V8.125C14.625 9.02246 13.8975 9.75 13 9.75C12.1025 9.75 11.375 9.02246 11.375 8.125V4.875C11.375 3.97754 12.1025 3.25 13 3.25Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 3.25C39.8975 3.25 40.625 3.97754 40.625 4.875V8.125C40.625 9.02246 39.8975 9.75 39 9.75C38.1025 9.75 37.375 9.02246 37.375 8.125V4.875C37.375 3.97754 38.1025 3.25 39 3.25Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.875 14.625H47.125V17.875H4.875V14.625Z" fill="#0F172A"/>
</svg>
     Kalender Akademik</h4>
       <div class="card rounded-cust m-cust-tp4 shadow-lg">
       <div class="card-body bg-primary rounded-cust card-size3 shadow-lg" >
       <Calendar />
       </div>
       </div>
    </div>

    <div className=" margin-custom-lf m-cust-tp5 col-md-2 col-sm-12"> 
    <div class="card text-center card-size4 shadow-lg">
  <div class="card-header bg-primary fs-custom3 text-white">
    Acara Mendatang 
  </div>
  <div class="card-body">
   
    <p class="card-text">tidak ada acara mendatang</p>
    <a href="#" class="btn btn-primary rounded-pill btn-end-cust">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="8 2 35 35" fill="none">
<path d="M21 8.75V33.25" stroke="#F7F6F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 21H33.25" stroke="#F7F6F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </a>
  </div>
  
</div>
</div>
</div>
</div>
 </section>

<section>
  <div className="container justify-content-center m-cust-tp">

    <Form /> 
  </div>
</section>

        
<div>
        <Footer /> 
        </div>
        </>
    );
};

export default Kalender;