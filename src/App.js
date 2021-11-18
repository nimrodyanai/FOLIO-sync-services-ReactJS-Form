import {useState} from 'react';
import './App.css';

export default function App() {
  function goNextPage() {
    if (page === 4) return;
    setPage(page => page + 1);
  }
  function goPrevPage() {
    if (page === 1) return;
    setPage(page => page - 1);
  }

  /*function updateData(type, newData) {
    setData(data => {
      return {...data, [type]:newData}
    })
  }*/
  const [page, setPage] = useState(1);
  /*const [data, setData] = useState({
    custID: {},
    folio: {},
    mapping: {},
    defaults: {}
  });*/
  return (
    <div className="App">
      {/* Progress Bar goes here */}
      <div>
        <progress max="4" value={page}/>
      </div>
        {/* Content goes here */}
        {page === 1 && <OnboardingOne />}
        {page === 2 && <OnboardingTwo />}
        {page === 3 && <OnboardingThree />}
        {page === 4 && <OnboardingFour />}

        {page !== 1 && <button id="PrevPage" onClick={goPrevPage}> Previous Page </button>}
        {page !== 4 && <button id="NextPage" onClick={goNextPage}> Next Page </button>}
        {page === 4 && <button type="submit">Submit</button>}
    </div>
  );
}



function OnboardingOne() {
  return (
    <>
      <br/>
      <br/>
      <label>To start, please enter Ebsco CustomerID:</label>
      <input type="text"/>
      <br/>
      <br/>
    </>
  )
}

function OnboardingTwo() {
  return (
    <>
      <div class="fields">
        <br/>
        <br/>
        <div>Folio and Customer Settings</div>
        <div>In this page, we will set up the Folio tenant and other details.</div>
        <div>
          <br/>
          <label>The Folio URL:</label>
          <input type="url"/>
          <br/>
          <label>Folio Tenant name:</label>
          <input type="text"/>
          <br/>
          <label>Folio Tenant username:</label>
          <input type="text"/>
          <br/>
          <label>Folio Tenant password:</label>
          <input type="text"/>
          <br/>
          <label>CSV URL address:</label>
          <input type="url"/>
          <br/>
          <label>The username to access the CSV:</label>
          <input type="text"/>
          <br/>
          <label>The password to access the CSV:</label>
          <input type="text"/>
          <br/>
          <label>What is the delimiter seperating the CSV values in the file? (Common delimiters are , ; | ):</label>
          <input type="text"/>
          <br/>
          <label>Where should error emails be sent to? Please provide a valid email:</label>
          <input type="email"/>
          <br/>
        </div>
      </div>
    </>
  )
}

function OnboardingThree() {
  return (
    <>
      <div class="fields">
        <br/>
        <br/>
        <div>CSV Fields Mapping</div>
        <div>In this page, we will map the columns of the CSV files into Folio's user template.
          For each field, please write the name of the column that holds the corresponding data.
          If there is no field with corresponding data, leave the field empty (mandatory fields are marked with *)
        </div>
        <div>
          <br/>
          <label>User name:</label>
          <input type="text"/>
          <br/>
          <label>*Unique identifier:</label>
          <input type="text"/>
          <br/>
          <label>*Barcode:</label>
          <input type="text"/>
          <br/>
          <label>Status (active/unactive):</label>
          <input type="text"/>
          <br/>
          <label>*User type:</label>
          <input type="text"/>
          <br/>
          <label>*User group:</label>
          <input type="text"/>
          <br/>
          <label>*First Name:</label>
          <input type="text"/>
          <br/>
          <label>*Last Name:</label>
          <input type="text"/>
          <br/>
          <label>Middle Name:</label>
          <input type="text"/>
          <br/>
          <label>Preferred Name:</label>
          <input type="text"/>
          <br/>
          <label>*Email:</label>
          <input type="text"/>
          <br/>
          <label>Phone:</label>
          <input type="text"/>
          <br/>
          <label>Date of Birth:</label>
          <input type="text"/>
          <br/>
          <label>Preferred contact type:</label>
          <input type="text"/>
          <br/>
          <label>Country:</label>
          <input type="text"/>
          <br/>
          <label>Address Line:</label>
          <input type="text"/>
          <br/>
          <label>Address Line2:</label>
          <input type="text"/>
          <br/>
          <label>City:</label>
          <input type="text"/>
          <br/>
          <label>Region:</label>
          <input type="text"/>
          <br/>
          <label>Postal Code:</label>
          <input type="text"/>
          <br/>
          <label>Address Type (choose from the values available in Folio. No code is required - the values will later be translated):</label>
          <input type="text"/>
          <br/>
          <label>Primary address indicator (a field saying whether the address is the primary address or not):</label>
          <input type="text"/>
          <br/>
          <label>Enrollment Date:</label>
          <input type="text"/>
          <br/>
          <label>Expiration Date:</label>
          <input type="text"/>
          <br/>
        </div>
      </div>
    </>
  )
}

function OnboardingFour() {
  return (
    <div>Page 4</div>
  )
}