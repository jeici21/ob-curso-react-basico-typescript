import { useEffect, useState } from "react"
import { getAllPagedUsers, getAllUsers, getUserDetails } from "../../services/fetchService";

interface User { id: number; email: string; first_name: string; last_name: string; avatar: string; }
interface Total { data: User[], total: number, per_page: number, total_pages: number }

const FetchExample = () => {
    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState({
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    })
    const [totalUsers, setTotalUsers] = useState(12)
    const [pages, setPages] = useState(2)
    const [usersPerPage, setUsersPerPage] = useState(6)

    useEffect(() => obtainUsers(), [])

    const obtainUsers = () => {
        getAllUsers().then((response: Total) => {
            console.log('All Users', response.data);
            setUsers(response.data)
            setTotalUsers(response.total)
            setUsersPerPage(response.per_page)
            setPages(response.total_pages)
        }).catch((error: Error) => alert(`Error while retrieving the users: ${error}`)).finally(() => {
            console.log('Ended obtaining users:')
            console.table(users)
        })
    }

    const obtainPagedUsers = (page: number) => {
        getAllPagedUsers(page).then((response: Total) => {
            console.log('All Paged Users', response.data);
            setUsers(response.data)
            setTotalUsers(response.total)
            setUsersPerPage(response.per_page)
            setPages(response.total_pages)
        }).catch((error: Error) => alert(`Error while retrieving the users: ${error}`)).finally(() => {
            console.log('Ended obtaining users:')
            console.table(users)
        })
    }

    const obtainUserDetails = (id: number) => {
        getUserDetails(id).then((response: Total) => {
            console.log('All Paged Users', response.data);
            setSelectedUser(response.data as unknown as User)
        }).catch((error: Error) => alert(`Error while retrieving the users: ${error}`)).finally(() => {
            console.log('Ended obtaining user:')
            console.table(selectedUser)
        })
    }

    return (
        <div>
            <h2>Users:</h2>
            {users.map((user, index) => {
                return <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
            })}
            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                <h3>User Details</h3>
                {selectedUser && (
                    <div>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img alt="Avatar" src={selectedUser.avatar} style={{ height: '50px', width: '50px' }} />
                    </div>)}
            </div>
        </div>
    )
}

export default FetchExample