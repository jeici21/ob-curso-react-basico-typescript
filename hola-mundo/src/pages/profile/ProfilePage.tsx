import { useNavigate, useLocation } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigate('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default ProfilePage