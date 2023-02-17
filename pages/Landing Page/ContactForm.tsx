export default function ContactFormSection() {
    return (
      <>
          <div>
            <h3>Let's Talk</h3>
            <p>Contact Form Sub-title</p>

            <form>
              <input id="name" type={"text"} name={"name"} />
              <input id="email" type={"text"} name={"email"} />
              <input id="message" type={"text"} name={"message"} />
              <input id="checkbox" type={"checkbox"} name={"checkbox"} />
              <p>I agree that the data I submit will be collected and stored.</p>
              <button>Submit</button>
            </form>
          </div>

          <div>
            <h4>Text Title</h4>
            <p>Paragraph Text</p>
            <button>Get in Touch</button>
          </div>
      </>
    )
  }