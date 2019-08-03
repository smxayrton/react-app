import React from 'react';
import './Menu.css';
import Links from './../links/Links';

import Presentation from './../home/Presentation';
class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Links />
                <div className="menu">
                
                    <ul className="menu-items">
                        <li> <a href=""> <b><h6>XASMCOIN TRADE</h6></b> </a> </li>
                        <li> <a href="" > Home </a> </li>
                        <li> <a href="" > Wallet </a> </li>
                        <li> <a href="" > Services </a> </li>
                        <li> <a href="" > Contact </a> </li>
                    </ul>
                </div>
                <Presentation />
            </div>
        );
    }

}

export default Menu;