import React from 'react'

const Header = () => {
  return (
    <HeaderContainer>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link>Acessorios</Link></li>
            <li><Link>Promoções</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      </Nav>
    </HeaderContainer>
   
  )
}

export default Header
