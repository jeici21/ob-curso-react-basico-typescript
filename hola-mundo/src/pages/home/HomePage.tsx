import { useNavigate, useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log("We are in Route:", location.pathname);//'/about|/faqs

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>Go to Profile</button>
        </div>
    )
}

export default HomePage