

export const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 p-3 text-white rounded-md text-center uppercase font-bold mb-3">
        <p>{mensaje}</p>
    </div>
  )
}
