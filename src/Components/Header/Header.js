import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@material-ui/icons/LocalMall'; 

export default class Header extends Component {
    render() {
        return (
            <nav>
                <div>
                    <Link to="/" className='brand'>THËA</Link>
                    <Link to="/Cart">
                    <LocalMallIcon />
                    </Link>
                   
                </div>
            </nav>
        )
    }
}
