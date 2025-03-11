import pnLogo from '../assets/pn-logo.png';
function Header({batch}) {

    return (
        <header id="header">
            <img src={pnLogo} alt="PN Logo" />
            <h1>Students results for {batch}</h1>
        </header>
    )
}
export default Header;