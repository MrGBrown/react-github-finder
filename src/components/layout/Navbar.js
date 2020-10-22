import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

const Navbar = (props) => {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <FontAwesomeIcon icon={props.icon} /> {props.title}
                </h1>
            </nav>
        )
};

        Navbar.defaultProps = {
            title: 'Github Finder',
            icon: ['fab', 'github']
        };
        
        Navbar.propTypes = {
            title: PropTypes.string.isRequired,
            icon: PropTypes.array.isRequired
        }


export default Navbar;
