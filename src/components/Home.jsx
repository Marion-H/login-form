import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

import { notifySuccess } from "./common/toastifyFunction";
import { LOGOUT } from "./store/action/actionType";

import "./scss/welcome.scss";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogout = async () => {
    try {
      await dispatch({ type: LOGOUT });
      const message = "Disconnected";
      notifySuccess(message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const name = useSelector((state) => state.admin.name);
  return (
    <div className="welcome">
      <button className="buttonLogout" onClick={() => isLogout()}>
        <BiLogOut />
      </button>
      <h1 className="titleWelcome">Welcome {name}</h1>
    </div>
  );
}

export default Home;
