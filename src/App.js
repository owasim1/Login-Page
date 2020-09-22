import React from 'react';
import Alert from 'react-bootstrap/Alert'
import './App.css';

function App() {
  const [showEmailRequired, setShowEmailRequired] = React.useState(false)
  const [showPasswordRequired, setShowPasswordRequired] = React.useState(false)
  const [showEmailAlert, setShowEmailAlert] = React.useState(false);
  const [showLoginAlert, setShowLoginAlert] = React.useState(false);
  const [disableInput, setDisableInput] = React.useState(false);
  const submitHandler = () => {
    validate()
    let emailRegEx = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(document.getElementById('email-input').value.toLowerCase()) &&
        document.getElementById('email-input').value !== '') {
      setShowEmailAlert(true)
    }
    else setShowEmailAlert(false)
    disableInputFunc()
    if (document.getElementById('email-input').value === '' ||
        document.getElementById('password-input').value === '' ||
      showEmailAlert){
      console.log(showEmailAlert)
    }
    else {setTimeout(function () {
      setShowLoginAlert(true)
    }, 900)}
  };
  const disableInputFunc = () => {
    setDisableInput(true)
    setTimeout(function(){
      setDisableInput(false)
    }, 900);
  }
  const validate = () => {
    if (document.getElementById('email-input').value === '') {
      setShowEmailRequired(true)
    } else setShowEmailRequired(false)
    if (document.getElementById('password-input').value === '') {
      setShowPasswordRequired(true)
    } else setShowPasswordRequired(false)
  }
  return <div className="form">
    <form>
      <h1>Account Login</h1>
      {
        showEmailAlert ?
            <Alert className="alert">
              <Alert.Heading className="alert-header">Please enter a valid email address.</Alert.Heading>
              <a className="close" data-dismiss="alert" aria-label="close" onClick={() => setShowEmailAlert(false)}>&times;</a>
            </Alert> :
            <div></div>
      }
      {
        showLoginAlert ?
            <Alert className="alert">
              <Alert.Heading className="alert-header">Invalid email address or password.</Alert.Heading>
              <a className="close" data-dismiss="alert" aria-label="close" onClick={() => setShowLoginAlert(false)}>&times;</a>
            </Alert> :
            <div></div>
      }

      <ul className="form-container">
        <li>
          <div>
            <label>Email Address</label>
            {
              showEmailRequired ?
              <label className="required-label">Required</label> :
              <div></div>
            }
          </div>
          <input disabled={disableInput} type="email" name="email" placeholder="john.doe@example.com" id="email-input">
          </input>
        </li>
        <li>
          <div>
            <label htmlFor="password">Password</label>
            {
              showPasswordRequired ?
                  <label className="required-label">Required</label> :
                  <div></div>
            }
          </div>
          <input disabled={disableInput} type="password" name="password" placeholder="• • • • • • • • • •" id="password-input">
          </input>
        </li>
        <div>
          <button disabled={disableInput} type="button" id="submit-button" onClick={submitHandler}>LOG IN</button>
        </div>
      </ul>
    </form>
  </div>
}

export default App;
