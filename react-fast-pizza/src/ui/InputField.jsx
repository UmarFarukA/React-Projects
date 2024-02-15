export default function InputField({ label, type, name, value, errors }) {
  if (errors) {
    return (
      <div className="mb-2">
        <label className="grow text-stone-600">{label}</label>
        <div className="">
          <input
            type={type}
            name={name}
            className="input mb-1"
            defaultValue={value}
          />
          {errors && (
            <span className="bg-red-400 text-stone-100 text-sm flex items-center justify-center rounded-md ml-2 mt-2 px-2 py-1">
              {errors[name]}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-2">
      <label className="grow text-stone-600">{label}</label>
      <div>
        <input
          type={type}
          name={name}
          className="input mb-1"
          defaultValue={value}
        />
      </div>
    </div>
  );
}
