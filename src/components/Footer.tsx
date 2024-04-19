import Buttons from "./Buttons"

const Footer = ({inputFields, textArea}: {inputFields:string[], textArea:string}) => {


  return (
    <footer className="flex justify-center lg:justify-end p-6 bg-light-navy">
      <form className="grid sm:grid-cols-2 p-4 gap-8 lg:w-1/2 bg-dark-navy rounded-md" >
        <div className="flex flex-col justify-start gap-2">
          {inputFields.map((inputField:string, index:number) => (
            <div className="grid grid-rows-2 justify-start" key={index}>
              <label htmlFor={inputField}>{inputField.toLocaleUpperCase()}</label>
              <input className="p-1 bg-very-light-navy" type="text" name={inputField} id={inputField} />
            </div>
          ))}
        </div>
        
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor={textArea}>{textArea.toLocaleUpperCase()}</label>
          <textarea className="p-1 bg-very-light-navy" name={textArea} id={textArea} cols={30} rows={5}></textarea>
        </div>  

        <Buttons title="Send"/>
      </form>
    </footer>
  )
}


export default Footer