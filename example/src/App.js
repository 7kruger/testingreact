import React, { useEffect, useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';
import "./styles/App.css";

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [phones, setPhones] = useState();

  useEffect(() => {
    fetch("https://localhost:44349/home/getphones")
      .then(response => response.json())
      .then(data => {
          setIsLoaded(true);
          setPhones(data);
      }).catch(error => console.log(error));
  }, []);

  function loadData() {
    fetch("https://localhost:44349/home/getphones")
      .then(response => response.json())
      .then(data => {
          setPhones(data);
      }).catch(error => console.log(error));
  }

  function createPhone(phone) {
    const formData = new FormData();
    formData.append("model", phone.model);
    formData.append("price", phone.price);

    fetch("https://localhost:44349/home/createphone", {
      method: "post",
      body: formData
    })
    .then(response => {
      if(response.ok) {
        loadData();
      }
    }).catch(error => console.log(error));
  }

  function removePhone(phone) {
    const formData = new FormData();
    formData.append("id", phone.id);

    fetch("https://localhost:44349/home/removephone", {
      method: "post",
      body: formData
    })
    .then(response => {
      if(response.ok) {
        loadData();
      }
    }).catch(error => console.log(error));
  }

  if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="App">
        <PhoneForm create={createPhone}/>
        <PhoneList phones={phones} remove={removePhone}/>
      </div>
    );
  }

}

export default App;
