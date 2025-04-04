import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Dobrodošli u Vašu digitalnu biblioteku</h1>
          <p>Otkrijte svet knjiga na jednom mestu</p>
          <Link to="/books" className="cta-button">Pretražite knjige</Link>
        </div>
      </section>

      <section className="features-section">
        <h2>Šta nudimo</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Veliki izbor knjiga</h3>
            <p>Više od 10.000 naslova iz svih žanrova za sve uzraste</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Laka pretraga</h3>
            <p>Pronađite omiljene knjige za nekoliko sekundi</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Dostupnost</h3>
            <p>Čitajte na svim uređajima, bilo kada i bilo gde</p>
          </div>
        </div>
      </section>

      <section className="popular-section">
        <h2>Popularne kategorije</h2>
        <div className="categories-grid">
          <Link to="/books" className="category-card">
            <div className="category-image fiction-bg"></div>
            <h3>Beletristika</h3>
          </Link>
          <Link to="/books" className="category-card">
            <div className="category-image science-bg"></div>
            <h3>Nauka</h3>
          </Link>
          <Link to="/books" className="category-card">
            <div className="category-image history-bg"></div>
            <h3>Istorija</h3>
          </Link>
          <Link to="/books" className="category-card">
            <div className="category-image biography-bg"></div>
            <h3>Biografije</h3>
          </Link>
        </div>
      </section>

      <section className="join-section">
        <div className="join-content">
          <h2>Pridružite nam se danas</h2>
          <p>Postanite deo naše rastuće zajednice čitalaca i ljubitelja knjiga</p>
          <button className="join-button">Registrujte se besplatno</button>
        </div>
      </section>
    </div>
  )
}

export default Home