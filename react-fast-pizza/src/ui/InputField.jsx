export default function InputField({ label, type, name, value }) {
  return (
    <div className="mb-2">
      <label className="grow text-stone-600">{label}</label>
      <div>
        <input
          type={type}
          name={name}
          required
          className="input"
          defaultValue={value}
        />
      </div>
    </div>
  );
}
