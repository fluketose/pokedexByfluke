import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-bar">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <span style={{ fontSize: 26 }}>My Pokedex</span>
                </div>
            </div>
        )
    }
}

export default Header;
