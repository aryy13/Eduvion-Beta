import React from "react";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';



const Kalender = () => {
    const [date, setDate] = useState(new Date());
  
    const onChange = (selectedDate) => {
      setDate(selectedDate);
    };
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
 <div>
      <h1>My Calendar</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
 </section>
        
        </>
    );
};

export default Kalender;