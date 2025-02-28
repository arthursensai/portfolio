const Header = () => {
    return (
        <header>
            <div className="nav-container">
                <div className="logo">
            <div>M<span>.</span></div>
            </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="mobile-menu-btn" click="mobileMenuOpen = true">  ☰</button></div></header>
    )
}

export default Header;