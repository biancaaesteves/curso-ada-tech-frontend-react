import React from "react";
import logoImg from '../../assets/img/logo.png'
import './styles.css';

export class Navbar extends React.Component {
    render() {
        return(
            <header>
            <nav id="navbar">
              <div className="nav-brand">
                <img className="logo" src={logoImg} alt="" />
                <h1>Space Flight News</h1>
               </div>

              <ul className="nav-list">
                <li><a href="/">Drivers</a></li>
                <li><a href="/">Passengers</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </nav>
          </header>
        );
    }
}

