import React, { useState } from 'react';

const Form = () => {

const [inputAcara, setInputAcara] = useState('');
const [inputTanggal, setInputTanggal] = useState('');
const [inputJam, setInputJam] = useState('');
const [inputKeterangan, setInputKeterangan] = useState('');
const [inputLokasi, setInputLokasi] = useState('');


const handleChangeInputAcara = (event) => {
    setInputAcara(event.target.value);
  };

  const handleChangeInputTanggal = (event) => {
    setInputTanggal(event.target.value);
  };

  const handleChangeInputJam = (event) => {
    setInputJam(event.target.value);
  };

  const handleChangeInputKeterangan = (event) => {
    setInputKeterangan(event.target.value);
  };

  const handleChangeInputLokasi = (event) => {
    setInputLokasi(event.target.value);
  };

  // Membuat state lokal untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    judulAcara: '',
    waktu: '',
    keterangan: '',
  });


  // Menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir (misalnya, kirim ke server)
    console.log('Data Formulir Dikirim:', formData);
  };

  return (
   
    <div>
      <h2>Buat Jadwal Acara </h2>
      <form onSubmit={handleSubmit}>

      <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Judul Acara: </label>
          <div className="col-sm-10">
          <input className="input-custom"
            type="text"
            name="judulAcara"
            value={inputAcara}
            onChange={handleChangeInputAcara}
          />

          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Waktu: </label>
            <div className='col'>
          <input className='input-custom'
            type="Date"
            name="tanggal"
            value={inputTanggal}
            onChange={handleChangeInputTanggal}
          />
          </div>
          <div className="col">
          <input className='input-custom'
            type="text"
            name="jam"
            value={inputJam}
            onChange={handleChangeInputJam}
          />
      
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Keterangan: </label>
          <div className="col-sm-10">
          <input className='input-custom'
            type="textarea"
            name="lastName"
            value={inputKeterangan}
            onChange={handleChangeInputKeterangan}
          />
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Lokasi: </label>
          <div className="col-sm-10">
          <input className='input-custom'
            type="textarea"
            name="lastName"
            value={inputLokasi}
            onChange={handleChangeInputLokasi}
          />
          </div>
        <br />
        </div> 

        





        <button type="submit">Kirim</button>
      </form>
    </div> 


  );
};


export default Form;