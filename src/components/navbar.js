import React from 'react';
import './navbar.css'

class NavBar extends React.Component{
    render(){
        return(
        <div>
            <li>
                <ul class="About">About Me   </ul>
                <ul class="Skills">Skills   </ul>
                <ul class="Portfolio">Portfolio   </ul>
                <ul class="Portfolio">Resume    </ul>
            </li>
        </div>
        )
    }
}

export default NavBar
