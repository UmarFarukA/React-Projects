import { Form } from "react-router-dom";

export default function ApplyCareer() {
  return (
    <div>
      <Form method="post">
        <h4>Kindly provide valid Information</h4>
        <div>
          <label htmlFor="name">Name</label>
          <div>
            <input type="text" placeholder="Your name" name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              id="email"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <div>
            <input
              type="tel"
              placeholder="Your Phone number"
              name="phone"
              id="phone"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <div>
            <input
              type="text"
              placeholder="Your address"
              name="address"
              id="address"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="cv">Upload CV</label>
          <div>
            <input type="file" name="cv" id="cv" required />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </Form>
    </div>
  );
}
