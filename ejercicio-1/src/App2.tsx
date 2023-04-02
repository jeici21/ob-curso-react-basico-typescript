import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import TareasFormik from "./components/TareasFormik";
import Login from "./components/Login";
import ContactoList from "./components/ContactoList";

const App2 = () => {
    const logged = false

    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/register'>REGISTER</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={logged ? <TareasFormik /> : <Navigate to='/login' />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<ContactoList />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App2