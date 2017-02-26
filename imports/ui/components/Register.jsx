import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Register extends React.Component {
  render() {
    var navStyle={
      backgroundColor: "#42a5f5", 
      paddingLeft: "12px"
    }
    return (
        <div className="container">
            <h2>Register</h2>
              <div className="row">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                    <label htmlFor="disabled">Disabled</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                    This is an inline input field:
                    <div className="input-field inline">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                    </div>
                </div>
                </form>
            </div>
                       
        </div>
    );
  }
}