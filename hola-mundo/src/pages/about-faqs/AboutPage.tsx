import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log("We are in Route:", location.pathname);//'/about|/faqs

    const goBack = () => navigate(-1)
    const goForward = () => navigate(1)

    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={() => navigate('/')}>Go To Home</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    )
}

export default AboutPage