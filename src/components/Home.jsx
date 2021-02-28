
import { useSelector } from "react-redux"

function Home () {
    const name = useSelector(state => state.dataForm.name)
    return(
        <div className="">
            Welcome {name}
            <button>Logout</button>
        </div>
    )
}

export default Home