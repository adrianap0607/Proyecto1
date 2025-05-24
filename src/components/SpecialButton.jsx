export default function SpecialButton({ label, onClick }) {
  return (
    <button className="button equal" onClick={() => onClick(label)}>
      {label}
    </button>
  )
}