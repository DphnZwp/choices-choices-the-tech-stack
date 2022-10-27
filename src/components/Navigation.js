import { useState } from 'react'

function Navigation() {
const [btnState, setBtnState] = useState(false);

  const openNav = () => {
    setBtnState(btnState => !btnState);
  }

  let toggleNameCheck = btnState ? '-active': '';

return(
  <header className="header">
    <a href="/" className="header__link">
      <img className="header__arrow" src="/left-arrow.svg" alt=""/>
    </a>

    <a href="/" className="header__link">
      <img className="header__logo" src="/logo.svg" alt=""/>
    </a>
    <button className="header__menu" onClick={openNav}>
      <svg className="header__menu-icon" aria-hidden="true" focusable="false" width="108" height="64" viewBox="0 0 108 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className="header__menu-line-top" width="108" height="14" rx="7" fill="white"/>
        <rect className="header__menu-line-middle" y="25" width="108" height="14" rx="7" fill="white"/>
        <rect className="header__menu-line-bottom" y="50" width="108" height="14" rx="7" fill="white"/>
      </svg>
      Menu  
    </button>
    <nav className={`header__nav${toggleNameCheck}`}>
      <ul>
        <li className="header__nav-link"><a rel="external" className="header__nav-link-text" href="/"><strong>Home</strong></a></li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/"><strong>Read the stories</strong></a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/1">1. A Spanish migrant looking for greener pastures</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/2">2. Returnees from Brazil who changed Lagos</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/3">3. A VIP from Abeokuta visits Fernandez' house</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/4">4. The Macaulay Connection</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/5">5. A Family House to the Olaiyas</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/6">6. A dark past</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/7">7. Botched dreams for Ilojo Bar</a>
        </li>
        <li className="header__nav-link">
          <a rel="external" className="header__nav-link-text" href="/8">8. The story of the angel</a>
        </li>
      </ul>
    </nav>
  </header>
)
}

export default Navigation;