import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const links = [
  ['Accueil', '#accueil'],
  ['Accompagnements', '#accompagnements'],
  ['Mon approche', '#approche'],
  ['À propos', '#apropos'],
  ['Cabinet', '#cabinet'],
]

const methods = [
  ['Art-thérapie', 'Créer pour exprimer autrement'],
  ['Psychogénéalogie', 'Éclairer les liens et les héritages'],
  ['Gestalt-thérapie', 'Être attentif à ce qui se vit ici et maintenant'],
  ['Analyse jungienne', 'Explorer le monde intérieur'],
]

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#accueil" onClick={closeMenu} aria-label="Sophie Nardari, accueil">
          Sophie Nardari<span>Psycho-somato &amp; art-thérapie</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="tel:+33662628971">Prendre rendez-vous <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">Psycho-somato &amp; art-thérapeute <i /> Toulouse</p>
            <h1>Osez aller à la rencontre <em>de qui vous êtes vraiment.</em></h1>
            <p className="hero-intro">Un accompagnement thérapeutique humain et personnalisé pour traverser les difficultés de vie, mieux vous comprendre et retrouver vos propres ressources.</p>
            <div className="button-row">
              <a className="button button-dark" href="tel:+33662628971">Prendre rendez-vous <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#approche">Découvrir mon approche <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-meta"><span className="tiny-star">✳</span> Cabinet Rangueil <i /> Consultations en ligne</p>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/preview-sophie-nardari/images/cabinet-wide.png" alt="Un fauteuil accueillant dans un intérieur baigné de lumière" fetchPriority="high" />
            <div className="image-caption">Un espace pour se déposer, à votre rythme.</div>
            <div className="round-stamp" aria-label="Écouter, créer, relier"><span>Écouter</span><b>·</b><span>Créer</span><b>·</b><span>Relier</span></div>
          </div>
          <span className="hero-index" aria-hidden="true">01 / 06</span>
        </section>

        <section className="intro-section section-shell" id="se-retrouver">
          <div className="section-label">01 — Se retrouver</div>
          <h2>Un espace pour<br />vous retrouver.</h2>
          <div className="intro-text">
            <p className="small-cap">Un espace d’écoute, à votre rythme.</p>
            <p>J’accompagne celles et ceux qui traversent une difficulté personnelle, une période de transition ou ressentent le besoin de mieux se comprendre.</p>
            <p>Ensemble, nous créons un espace où déposer ce qui est là, renouer avec vos propres ressources et avancer avec plus de justesse.</p>
          </div>
        </section>

        <section className="support-section" id="accompagnements">
          <div className="section-shell support-inner">
            <div className="section-label">02 — Accompagnements</div>
            <h2>Un accompagnement<br /><em>adapté à votre chemin.</em></h2>
            <div className="support-cards">
              <article className="support-card support-card-light">
                <span className="card-number">01</span>
                <div className="card-title"><span>Adultes &amp; jeunes adultes</span><h3>Psychothérapie</h3></div>
                <div className="card-description"><p>Un espace pour déposer ce qui vous pèse, traverser les moments difficiles et avancer vers une meilleure compréhension de vous-même.</p><a href="tel:+33662628971">Découvrir l’accompagnement <span aria-hidden="true">↗</span></a></div>
              </article>
              <article className="support-card support-card-green">
                <span className="card-number">02</span>
                <div className="card-title"><span>Grossesse · naissance · post-partum</span><h3>Devenir<br />Maman</h3></div>
                <div className="card-description"><p>Un accompagnement spécifique autour de la maternité, de ses transformations, de ses questionnements et des difficultés qui peuvent l’accompagner.</p><a href="tel:+33662628971">Découvrir Devenir Maman <span aria-hidden="true">↗</span></a></div>
              </article>
            </div>
          </div>
        </section>

        <section className="approach-section section-shell" id="approche">
          <div className="section-label">03 — Mon approche</div>
          <div className="approach-heading"><h2>Une approche<br />intégrative <em>et créative.</em></h2><p>Chaque accompagnement s’adapte à la personne, à son histoire et à ses besoins.</p></div>
          <div className="method-list">
            {methods.map(([name, note], index) => (
              <details className="method-row" key={name}>
                <summary><span className="method-number">0{index + 1}</span><span className="method-name">{name}</span><span className="method-note">{note}</span><span className="method-plus" aria-hidden="true">+</span></summary>
                <p className="method-extra">Une invitation à prendre le temps d’explorer ce qui se présente, dans un cadre attentif et respectueux de votre rythme.</p>
              </details>
            ))}
          </div>
        </section>

        <section className="about-section" id="apropos">
          <div className="about-inner section-shell">
            <figure className="about-image-frame"><img src="/preview-sophie-nardari/images/atelier-therapie.png" alt="Un espace chaleureux pour créer et explorer" loading="lazy" /><figcaption>Composition abstraite · matières et couleurs</figcaption></figure>
            <div className="about-copy"><div className="section-label">04 — À propos</div><h2>Sophie<br /><em>Nardari</em></h2><p className="about-role">Psycho-somatothérapeute<br />&amp; art-thérapeute</p><p>Psycho-somatothérapeute formée à l’EEPSSA, je suis également titulaire d’un Diplôme Universitaire en Art-thérapie de l’Université Toulouse II Jean Jaurès.</p><p>Ma pratique thérapeutique s’est construite au fil de mon parcours personnel et professionnel, dans une attention profonde à la singularité de chacun.</p><a className="light-link" href="mailto:contact@sophienardari.com">Découvrir mon parcours <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="cabinet-section section-shell" id="cabinet">
          <div className="section-label">05 — Le cabinet</div>
          <h2>Je vous accueille à Toulouse,<br /><em>au Cabinet Rangueil.</em></h2>
          <div className="cabinet-layout">
            <a className="map-card" href="https://maps.google.com/?q=1+avenue+de+Rangueil+31400+Toulouse" target="_blank" rel="noreferrer" aria-label="Voir le Cabinet Rangueil sur une carte">
              <svg viewBox="0 0 520 430" role="img" aria-label="Plan schématique du quartier Rangueil et de Saint-Agne">
                <rect width="520" height="430" fill="#ded8c8" />
                <path d="M-30 80 550 240M70-20 210 470M420-40 275 470" stroke="#f4f1e8" strokeWidth="34" />
                <path d="M-20 330 540 50M25 425 480 10" stroke="#ebe5d7" strokeWidth="14" />
                <path d="M0 195 520 390" stroke="#d1c9b8" strokeWidth="2" strokeDasharray="4 8" />
                <text x="330" y="115" fill="#69685c" fontSize="17" fontFamily="Arial">Rangueil</text>
                <text x="45" y="360" fill="#69685c" fontSize="16" fontFamily="Arial">Saint-Agne</text>
                <circle cx="285" cy="212" r="21" fill="#292b27" />
                <path d="M285 238c-15-20-23-32-23-44a23 23 0 1 1 46 0c0 12-8 24-23 44Z" fill="#292b27" />
                <circle cx="285" cy="193" r="6" fill="#f4f1e8" />
                <rect x="20" y="374" width="188" height="42" rx="2" fill="#f5f2e9" />
                <text x="35" y="391" fill="#777568" fontSize="9" letterSpacing="2" fontFamily="Arial">CABINET RANGUEIL</text>
                <text x="35" y="407" fill="#292b27" fontSize="11" fontFamily="Arial">1 avenue de Rangueil</text>
              </svg>
              <span className="map-open">Ouvrir le plan ↗</span>
            </a>
            <div className="cabinet-info">
              <h3>1 avenue de Rangueil<br />31400 Toulouse</h3>
              <p className="muted-copy">À environ 300 m du métro et de la gare Saint-Agne.</p>
              <div className="hours-block"><p className="small-cap">Consultations · au cabinet ou en ligne</p><div className="hours-grid"><div><h4>Au cabinet</h4><p>Lundi <span>9h–14h</span></p><p>Mardi <span>9h–19h</span></p><p>Jeudi <span>9h–19h</span></p></div><div><h4>En ligne</h4><p>Lundi <span>14h–18h</span></p><p>Vendredi <span>9h–17h</span></p></div></div></div>
              <div className="price-row"><div><p className="small-cap">Tarifs</p><p>Séance individuelle · 1h</p><small>50 € pour étudiants, demandeurs d’emploi et personnes en difficulté.</small></div><strong>60 €</strong></div>
              <div className="contact-row"><a className="button button-dark" href="tel:+33662628971">Prendre rendez-vous <span aria-hidden="true">↗</span></a><div><a href="tel:+33662628971">06 62 62 89 71</a><a href="mailto:contact@sophienardari.com">contact@sophienardari.com</a></div></div>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <p className="small-cap">Une première rencontre</p>
          <h2>Et si vous faisiez<br /><em>le premier pas ?</em></h2>
          <p>Une première rencontre permet de faire connaissance, d’échanger sur vos besoins et de définir ensemble l’accompagnement qui pourrait vous convenir.</p>
          <div className="closing-contact"><a className="button button-light" href="mailto:contact@sophienardari.com">Me contacter <span aria-hidden="true">↗</span></a><a href="tel:+33662628971">06 62 62 89 71</a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><a className="footer-brand" href="#accueil">Sophie Nardari<span>Psycho-somato &amp; art-thérapeute<br />Toulouse — Cabinet Rangueil</span></a><nav aria-label="Navigation de pied de page">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><div className="footer-contact"><span>Premier contact</span><a href="tel:+33662628971">06 62 62 89 71</a><a href="mailto:contact@sophienardari.com">contact@sophienardari.com</a></div></div>
        <div className="footer-bottom"><span>© 2025 Sophie Nardari</span><span className="concept-note">Concept de refonte — proposition SABAN CORP · Site non officiel</span></div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
