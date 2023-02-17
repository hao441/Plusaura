export default function HeaderSection() {
    return (
      <>
          <div id="logo">logo</div>

          <div id="navbar">Navbar
            <a className="navbar-item active" href="#home">Home</a>
            <a className="navbar-item" href="#aboutus">About Us</a>
            <a className="navbar-item" href="#home">Our Services</a>
            <a className="navbar-item" href="#home">Testimonials</a>
            <a className="navbar-item" href="#home">Our Projects</a>
            <a className="navbar-item" href="#home">Contact Us</a>
            
            <p>dark mode switch</p>
            
            <button>Get in Touch</button>
            
          </div>

      </>
    )
  }