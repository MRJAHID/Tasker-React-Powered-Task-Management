import './App.css'
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TaskBoard from "./components/Task/TaskBoard.jsx";

function App() {

    return (
        <>
            <Header/>
            <div className='flex flex-col justify-center items-center'>
                <Hero/>
                <TaskBoard/>
            </div>
            <Footer/>
        </>
    )
}

export default App
