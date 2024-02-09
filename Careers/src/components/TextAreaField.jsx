/* eslint-disable react/prop-types */

export default function TextAreaField({ errors, labelTitle, name }) {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="ml-3 font-bold text-stone-600">
        {labelTitle}
      </label>
      <div>
        <textarea
          required
          name={name}
          className="w-full rounded-full px-4 py-3 focus:outline-none focus:ring focus:ring-neutral-300"
        ></textarea>
        {errors?.content && <p>{errors.content}</p>}
      </div>
    </div>
  );
}
