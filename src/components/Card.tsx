
interface Card {
  title:string, 
  discription:string,
  github:string,
  live:string
  screenshot:string
}

const Card = ({title, discription, github, live, screenshot}:Card) => {
  return (
    <div className="card w-fit border border-very-light-navy">
      <img className=" bg-green-700" src={screenshot} alt="" />
      <div className="text p-2">
        <h2 className="text-2xl">{title}</h2>
        <p>{discription}</p>
      </div>

      <div className="grid grid-cols-2 items-center text-center bg-light-navy">
        <a className="p-2 hover:outline outline-2 outline-very-light-navy" href={github} target="_blank">GitHub</a>
        <a className="p-2 hover:outline outline-2 outline-very-light-navy" href={live} target="_blank">Live</a>
      </div>
    </div>
  )
}

export default Card