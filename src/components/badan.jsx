import React from "react";

const Badan = () => {
    return(
     <>
        <section className="bg-primary full-page"> 
         <div className="row">
         <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="600" viewBox="0 0 1512 600" fill="none">
         <path d="M1118.92 368.228C766.824 139.387 626.365 -48.9833 0 11.3959V701.57C280.273 831.345 902.462 647.878 902.462 647.878C902.462 647.878 1263.64 564.399 1512 386.126L1512 265C1382 368.228 1300.17 433.064 1118.92 368.228Z" fill="#1A8AFF"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="150" viewBox="0 0 1512 150" fill="none">
       <path d="M1 307C1 307 241.727 91.3501 433.495 91.3501C655.98 91.3501 1014.06 250.43 1185.75 210.65C1357.45 170.869 1512 2 1512 2" stroke="#F8F7F6" stroke-opacity="0.25" stroke-width="4" stroke-linecap="round"/>
       </svg>

<svg xmlns="http://www.w3.org/2000/svg" width="1512" height="200" viewBox="0 0 1512 200" fill="none" className="margin-custom-tp">
<path d="M409.771 0C127.001 0.000407852 0 174.02 0 174.02V960H1513V32.0707C1513 32.0707 1331.38 178.219 1081.21 147.733C798.816 113.318 685.953 -0.00039835 409.771 0Z" fill="white"/>
</svg>
            <div className="col p-5 margin-custom-tp3">
                <h1 className="text-white fs-custom margin-custom-lf"> Mulai Langkah Pertamamu </h1>
                <p className="margin-custom-lf text-white"> untuk digitalisasi pendidikan yang lebih baik </p>
     
                <button className="btn btn-md btn-warning rounded-pill  btn-custom-wd mx-custom "type="button">
                    <a className="text-white text-decoration-none"href ="login.jsx" > Mulai </a> </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                <path
                  d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"
                />
                <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                <path d="M12 9h2V8h-2z" />
              </svg> 
            </div>
           
            <div className="col  p-5 m-cust-rg margin-custom-tp2">
                <img src="./gambar1.png" width="480px" height="450px" alt="gambar" /> 
                </div> 
               </div>


               
        </section>


<section> 
  <div className="container">
    <div className="row">
      
      <div class="col-md-4 col-sm-6">
        <h1 className="mx-5 m-cust-tp fs-custom2"> Tentang Kami </h1>
        <p className="mx-5"> Eduvion hadir sebagai sarana bagi para 
mahasiswa dan juga dosen pembimbing 
untuk mengelola, dan melakukan bimbingan. 
Semuanya secara online!</p>

      </div>
    </div>
  </div>
</section>


 

</>


    );

};

export default Badan; 
