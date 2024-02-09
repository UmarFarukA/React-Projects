export default function InputField({ label, type, name }) {
  return (
    <div className="mb-2">
      <label className="grow text-stone-600">{label}</label>
      <div>
        <input type={type} name={name} required className="input" />
      </div>
    </div>
  );
}
