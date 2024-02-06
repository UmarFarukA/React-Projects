

export default function InputField({label, type, name}) {
  return (
    <div className="mb-2">
        <label>{label}</label>
        <div >
            <input type={type} name={name} required 
              className="input"
            />
        </div>
    </div>
  )
}
