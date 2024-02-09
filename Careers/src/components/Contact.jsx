import { Form, useActionData } from "react-router-dom";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";

export default function Contact() {
  const errors = useActionData();

  return (
    <Form method="post">
      <h4 className="mb-2 font-bold text-stone-600">
        Kindly let Us know if you have any inquiry
      </h4>
      <InputField labelTitle="Name" name="name" type="text" errors={errors} />
      <InputField
        labelTitle="Email"
        name="email"
        type="email"
        errors={errors}
      />
      <TextAreaField labelTitle="Your query" name="content" errors={errors} />

      <div>
        <Button type="primary">Submit</Button>
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
