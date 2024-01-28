import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import LoadingBar from 'react-top-loading-bar'

// npm i react-top-loading-bar



export default function App() {
    let [language, setlanguage] = useState("hi")
    let [search, setSearch] = useState("")
    let [mode, setmode] = useState("light")
    const [progress, setProgress] = useState(0)



    let changeLanguage = (data) => {
        setlanguage(data)
        handleButtonClick()

    }
    let changeSearch = (data) => {
        setSearch(data)
        handleButtonClick()
    }

    let toggleMode = () => {

        if (mode === 'light') {
            setmode('dark');
            document.body.style.backgroundColor = '#042743';
            handleButtonClick()

        } else {
            setmode('light')
            document.body.style.backgroundColor = 'white';
            handleButtonClick()

        }
    };

    const handleButtonClick = () => {
        // Set progress to 30
        setTimeout(() => setProgress(30), 1000);
        
        // Set progress to 70 after 2 seconds
        setTimeout(() => setProgress(70), 1200);

        // Set progress to 100 after 2 seconds
        setTimeout(() => setProgress(100), 1600);

        // Reset progress to 0 after 2.5 seconds
        setTimeout(() => setProgress(0), 2000);

    };




    return (
        <BrowserRouter>
            <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
            />


            <Navbar changeLanguage={changeLanguage} mode={mode} toggleMode={toggleMode} changeSearch={changeSearch} />
            <Routes>
                <Route path="/" onClick={handleButtonClick} element={<Home search={search} language={language} q="All" />} />
                <Route path="/All" onClick={handleButtonClick} element={<Home search={search} language={language} q="All" />} />
                <Route path="/Politics" onClick={handleButtonClick} element={<Home search={search} language={language} q="Politics" />} />
                <Route path="/Science" onClick={handleButtonClick} element={<Home search={search} language={language} q="Science" />} />
                <Route path="/Technology" onClick={handleButtonClick} element={<Home search={search} language={language} q="Technology" />} />
                <Route path="/Education" onClick={handleButtonClick} element={<Home search={search} language={language} q="Education" />} />
                <Route path="/Crime" onClick={handleButtonClick} element={<Home search={search} language={language} q="Crime" />} />
                <Route path="/Sports" onClick={handleButtonClick} element={<Home search={search} language={language} q="Sports" />} />
                <Route path="/Cricket" onClick={handleButtonClick} element={<Home search={search} language={language} q="Cricket" />} />
                <Route path="/Entertainment" onClick={handleButtonClick} element={<Home search={search} language={language} q="Entertainment" />} />
                <Route path="/Jokes" onClick={handleButtonClick} element={<Home search={search} language={language} q="Jokes" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

