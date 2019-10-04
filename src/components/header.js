import React, {Component} from 'react';

import Logo from '../images/poweredby_nytimes_200c.png';

export default class Header extends Component {

    render() {

        return (
            <div className="news__header">
                <a href="https://developer.nytimes.com/">
                    <img src={Logo} alt="The New York Times Developer Network"/>
                </a>
            </div>
        );
    }
}