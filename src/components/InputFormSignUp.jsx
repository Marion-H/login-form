import { AiOutlineMail} from "react-icons/ai"
import { FaPhoneAlt} from "react-icons/fa"


function InputFormSignUp () {
    return (
        <>
      <div className="inputEmail">
        <span className="iconEmail">
          <AiOutlineMail />
        </span>
        <input type="email" />
      </div>
      <div className="inputPhone">
        <span className="iconPhone">
          <FaPhoneAlt/>
        </span>
        <input type="text"/>
        
      </div>
    </>
    )
}

export default InputFormSignUp