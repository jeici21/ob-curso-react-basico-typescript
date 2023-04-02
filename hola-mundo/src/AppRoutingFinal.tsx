import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {
    //TODO: Change to value from sessionStorage (or something dinamic)
    let loggedIn = true

    return (
        <BrowserRouter>
            {/* Route Switch */}
            <Routes>
                {/* Redirections to protect our routes */}
                <Route path='/' element={loggedIn ? <Navigate to='/dashboard' />
                    : <Navigate to='/login' />} />
                {/* Login Route */}
                <Route path='/login' element={<LoginPage />} />
                {/* Dashboard Route */}
                <Route path='/dashboard' element={loggedIn ? <DashBoardPage /> : <Navigate to='/login' />} />
                {/* Login Route */}
                <Route element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutingFinal;