import { useEffect } from 'react';
import { Routes, Route, Link as NavLink, Navigate, useParams } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Statepage from './pages/home/StatePage';
import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import Profilepage from './pages/profile/ProfilePage';
import Taskpage from './pages/tasks/TaskPage';
import Taskdetailpage from './pages/tasks/TaskDetailPage';
import Loginpage from './pages/auth/LoginPage';

function AppRoutingUno() {
    let logged = false;
    let taskList = [
        { id: 1, name: 'Task 1', description: 'My fist Task' },
        { id: 2, name: 'Task 2', description: 'My second Task' }
    ]

    useEffect(() => {
        const credentials = localStorage.getItem('credentials');
        if (credentials) logged = true;
        console.log('User Logged?', logged)
    }, [])

    return (
        <Routes>
            <div>
                <aside>
                    <NavLink to='/'>|| HOME |</NavLink>
                    <NavLink to='/about'>| ABOUT |</NavLink>
                    <NavLink to='/faqs'>| FAQs |</NavLink>
                    <NavLink to='/task/1'>| Task 1 |</NavLink>
                    <NavLink to='/task/2'>| Task 2 |</NavLink>
                    <NavLink to='/any404'>| Not Existing Route |</NavLink>
                    <NavLink to='/login'>| Login ||</NavLink>
                </aside>

                <main>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/online-state' element={<Statepage />} />
                    <Route path='/login' element={
                        logged ? <Navigate to='/' replace /> : <Loginpage />
                    } />
                    <Route path='/(about|faqs)' element={<Aboutpage />} />
                    <Route path='/profile' element={
                        logged ? <Profilepage /> : <Navigate to='/login' replace />
                    } />
                    <Route path='/tasks' element={<Taskpage />} />
                    <Route path='/task/:id' element={
                        <Taskdetailpage task={taskList.find(task => task.id === parseInt(useParams().id as string))} />
                    } />
                    {/* 404 - Page No Found */}
                    <Route path='*' element={<Notfoundpage />} />
                </main>
            </div>
        </Routes>
    );
}

export default AppRoutingUno;