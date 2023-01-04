import React from 'react'

function Header() {
  return (
    <>
        <header id="header">
                <section className="logo">
                    <img id="header-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png" alt="original trombones logo"/>            
                </section>
                <section>
                    <nav id="nav-bar">
                        <ul>
                            <li>
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#how-it-works">How It Works</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                        </ul>
                </nav>
                </section>
        </header>
    </>
  )
}

export default Header;