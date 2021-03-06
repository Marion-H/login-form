import { FaArrowRight } from "react-icons/fa";

function ButtonSign ({text, disabled}) {


    return(
        <div className="signIn">
          <span className="textButton">{text}</span>
          <button className="buttonSignIn" type="submit" disabled={disabled}>
            <span className="arrowButton">
              <FaArrowRight />
            </span>
          </button>
        </div>
    )
}

export default ButtonSign