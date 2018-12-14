import React from 'react';

class Header extends React.Component {
    render() {
        return (
        <div className = "header-page">
            <p className = "header-page_logo"> BSUIR SHEDULE </p>
            <p className = "header-page_logo2">retro</p>
            <nav className = "header-page_menu">
                <ul>
                    <li>
                        
                        <button  
                        className = "link-button"
                        onClick = {() => this.setState({showGit: true})}>
                           / GitHub is here /
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        )}
}

export default Header;