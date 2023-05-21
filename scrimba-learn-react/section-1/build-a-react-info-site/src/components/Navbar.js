import logo from '../logo192.png'

export default function Navbar() {
    return (
        <nav id="nav">
            <div id="logo-wrapper">
                <img src={logo} alt="logo" height="30px"/>
                <h2>ReactFacts</h2>
            </div>
            <div id="course-wrapper">
                <span>React Course - Project 1</span>
            </div>
        </nav>
    )
};