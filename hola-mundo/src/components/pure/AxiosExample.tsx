import { useEffect, useState } from "react"
import { getRandomUser } from "../../services/axiosService"

interface RandomUser {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
interface AxiosResponse { data: { results: RandomUser[] }, status: number }

const AxiosExample = () => {
    const [user, setUser] = useState<RandomUser | null>(null)
    useEffect(() => obtainUser(), [])


    const obtainUser = () => {
        getRandomUser().then((response: AxiosResponse) => {
            if (response.status === 200) {
                setUser(response.data.results[0])
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <div>
            <h1>AxiosExample</h1>
            {user != null ?
                <div>
                    <img alt="avatar" src={user.picture.large} />
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                </div>
                : null
            }
            <div>
                <p>Generate a new User</p>
                <button onClick={obtainUser}>Random User</button>
            </div>

        </div>
    )
}

export default AxiosExample