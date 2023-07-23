import { getUserid } from "../../utils"

function Home() {
    return (
        <>
            <div className="p-4">
                <h1>Home {getUserid()}</h1>
            </div>
        </>
    )
}

export default Home