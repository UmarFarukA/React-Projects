import { Form, useActionData } from "react-router-dom";

export default function Contact() {
  const errors = useActionData();

  return (
    <Form method="post">
      <h4>Kindly let Us know if you have any inquiry</h4>
      <div>
        <label htmlFor="name">Name</label>
        <div>
          <input type="text" placeholder="Your name" name="name" />
        </div>
        {errors?.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <div>
          <input type="email" placeholder="Your email" name="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="content">Your query</label>
        <div>
          <textarea required name="content"></textarea>
          {errors?.content && <p>{errors.content}</p>}
        </div>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function contactAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {};

  if (data.name.length <= 2 || data.name === "")
    errors.name = "Invalid name or name cannot be empty";

  if (data.content.length <= 15)
    errors.content = "Your query should at least be 15 characters";

  if (Object.keys(errors).length > 0) return errors;

  console.log(data);
  return null;
}
