import { useNavigate, useLocation, NavigateOptions } from "react-router-dom";

const HomePage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log("We are in Route:", location.pathname);//'/about|/faqs

    const navigateProps = (path: string) => {
        navigate(path, {
            search: '?online=true',
            state: {
                online: true
            }
        } as NavigateOptions);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigateProps('/online-state')}>Go to Page with State / Query Form</button>
            <button onClick={() => navigate('/profile')}>Go to Profile</button>
        </div>
    )
}

export default HomePage