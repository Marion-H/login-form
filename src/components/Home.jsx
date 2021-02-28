
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { LOGOUT } from "./store/action/actionType"

function Home () {
    const dispatch = useDispatch()
    const history = useHistory()

    const isLogout = async () => {
        try {
            await dispatch({type: LOGOUT})
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    const name = useSelector(state => state.dataForm.name)
    return(
        <div className="">
            Welcome {name}
            <button onClick={()=> isLogout()}>Logout</button>
        </div>
    )
}

export default Home