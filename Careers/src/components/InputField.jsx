/* eslint-disable react/prop-types */

export default function InputField({ labelTitle, name, type, errors }) {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="ml-3 font-bold text-stone-600">
        {labelTitle}
      </label>
      <div>
        <input
          type={type}
          placeholder={`Your ${name}`}
          name={name}
          className="w-full rounded-full px-4 py-3 focus:outline-none focus:ring focus:ring-neutral-300"
        />
      </div>
      {errors?.name && <p>{errors.name}</p>}
    </div>
  );
}
