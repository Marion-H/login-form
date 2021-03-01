import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { notifySuccess } from "./common/toastifyFunction";
import { LOGOUT } from "./store/action/actionType";

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
    <div className="">
      Welcome {name}
      <button onClick={() => isLogout()}>Logout</button>
    </div>
  );
}

export default Home;
