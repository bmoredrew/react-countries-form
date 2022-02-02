import logo from './assets/images/WB-logo.png';
import './custom.css'
import {Countries} from "./assets/data/countries.jsx";

export default function App() {
  return (
    <div className="App">
      <div class="container">

        <div class="logo-container">
          <span class="helper"></span>
          <img src={logo} class="WBlogo" alt="Warner Brothers Logo" />
        </div>

          <form class="addressForm">
            <h3>Signup Below</h3>
            <div class="form-group row">
              <label for="firstName" class="col-4 col-form-label">First Name</label> 
              <div class="col-8">
                <div class="input-group">
                  <input id="firstName" name="firstName" type="text" class="form-control"/>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label for="lastName" class="col-4 col-form-label">Last Name</label> 
              <div class="col-8">
                <input id="lastName" name="lastName" type="text" class="form-control"/>
              </div>
            </div>

            <div class="form-group row">
              <label for="streetAddress" class="col-4 col-form-label">Street Address</label> 
              <div class="col-8">
                <input id="streetAddress" name="streetAddress" type="text" class="form-control"/>
              </div>
            </div>

            <div class="form-group row">
              <label for="cityAddress" class="col-4 col-form-label">City</label> 
              <div class="col-8">
                <input id="cityAddress" name="cityAddress" type="text" class="form-control"/>
              </div>
            </div>

            <div class="form-group row">
              <label for="stateAddress" class="col-4 col-form-label">State</label> 
              <div class="col-8">
                <input id="stateAddress" name="stateAddress" type="text" class="form-control"/>
              </div>
            </div>

            <div class="form-group row">
              <label for="countryAddress" class="col-4 col-form-label">Country</label> 
              <div class="col-8">
                <select id="countryAddress" name="countryAddress" class="country-select">
                  {Countries.countries && Countries.countries.map((e, name) => {
                    return <option key={name} value={e.name}>{e.name}</option>;
                  })}
                </select>
              </div>
            </div> 
            <div class="form-group row">
              <div class="offset-4 col-8">
                <button name="submit" type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  );
}
