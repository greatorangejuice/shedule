import React from 'react';

class Header extends React.Component {
    render() {
        return (
        <div className = "header-page">
            <p className = "header-page_logo"> BSUIR SHEDULE </p>
            <p className = "header-page_logo2">exam</p>
            <nav className = "header-page_menu">
                <ul>
                    <li>
                        <button  
                        className = "link-button"
                        onClick = {() => this.setState({showGit: true})}>
                           <a targt="blank" href='https://github.com/greatorangejuice/shedule'>/ GitHub is here /</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        )}
}

export default Header;