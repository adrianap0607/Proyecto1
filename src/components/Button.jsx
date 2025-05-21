export default function Button({ label, onClick }) {
  const isEqual = label === '='
  return (
    <button
      className={`button ${isEqual ? 'equal' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}