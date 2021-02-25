import { FaArrowRight } from "react-icons/fa";

function ButtonSign ({text}) {

  
    return(
        <div className="signIn">
          <span className="textButton">{text}</span>
          <button className="buttonSignIn">
            <span className="arrowButton">
              <FaArrowRight />
            </span>
          </button>
        </div>
    )
}

export default ButtonSign