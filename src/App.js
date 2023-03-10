import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />}/>
                    <Route path='contact' element={<Contact />}/>
                    <Route path='404Page' element={<NoPage />}/>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
