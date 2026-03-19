import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import AboutUsView from './views/AboutUsView'
import BecomePetParentView from './views/BecomePetParentView'
import ResultsView from './views/ResultsView'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/normalizer.css'
import './styles/fonts.css'
import './styles/theme.css'
import './styles/reset.css'
import './styles/general.css'
import './styles/visually-hidden.css'

function App() {
    return (
        <Router>
            <div className="App page">
                <Header />

                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<AboutUsView />} />
                        <Route path="/become-pet-parent" element={<BecomePetParentView />} />
                        <Route path="/results" element={<ResultsView />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}

export default App
