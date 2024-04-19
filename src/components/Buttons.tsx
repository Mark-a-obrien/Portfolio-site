const Buttons = ({title}:{title:string}) => {

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  }

  return (
    <button onClick={(e) => handleClick} className="p-2 w-20 bg-very-light-navy shadow-sm">{title}</button>
  )
}

export default Buttons

