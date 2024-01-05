import './App.css';

function App() {
  return (
    <>
       <Header>
       <img src="path/to/your-logo.png" alt="Little Lemon Logo" />
      </Header>
      <Nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">reservation</a></li>
        <li><a href="/order online">Order online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      </Nav>
      <Main>
        {/* Your main content goes here */}
      </Main>
      <Footer>
        
      </Footer>
    </>
  );
}

export default App;
