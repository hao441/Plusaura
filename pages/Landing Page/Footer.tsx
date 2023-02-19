import styles from '../../styles/Landing Page/Footer.module.css'

export default function FooterSection() {
    return (
      <>
          <div className="footer">
            <div className="footer-grid">
              <div>
                <p>Logo</p>
                <p>Text underneath Logo</p>
              </div>

              <div>
                <p>Useful Links</p>
                <p>Contact Us</p>
                <p>How We Work</p>
                <p>About Us</p>
                <p>Terms of Service</p>
                <p>Our Services</p>
              </div>

              <div>
                <p>Subscribe Newsletter</p>
                <p>Newletter Paragraph Text</p>

                <form>
                  <input id="subscription-email-field" type={"email"} />
                  <button>Subscribe</button>
                </form>
              </div>
                <hr />

              <div>
                <p>Copyright 2022 Plusaura ...</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
      </>
    )
  }