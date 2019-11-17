import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';

export default class Menu extends Component {
    render() {
        return (
            <div>
                Menu
                <Link to="/empresas">Empresas</Link>
                <Link to="/particulares">Particulares</Link>
                <Link to="/bodas">Bodas</Link>
                <Link to="/roscones">Roscones</Link>
            </div>
        )
    }
}
