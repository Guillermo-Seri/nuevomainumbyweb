import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"

import styles from "./header.module.scss"

const Header = ({ transparent = false }) => {
  const data = useStaticQuery(graphql`
    query {
      siteMetadata: site {
        siteMetadata {
          social {
            instagram
            facebook
          }
        }
      }
    }
  `)

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock scroll when drawer open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const wrapperClass = [
    styles.headerWrapper,
    scrolled ? styles.scrolled : "",
    transparent ? styles.transparent : "",
  ].join(" ")

  return (
    <>
      <div className={wrapperClass}>
        <header className={styles.header}>
          <nav className={styles.navMain}>
            <Link to="/" className={styles.brand} aria-label="Hotel Mainumby - Inicio" onClick={() => setMenuOpen(false)}>
              <img src='/images/logo-hotel-mainumby-negro.png' alt='Hotel Mainumby - Chajari E.R' className={styles.brandLogo} />
            </Link>

            <div className={styles.navItemList}>
              <Link to="/" className={styles.navItem} activeClassName={styles.navItemActive}>Principal</Link>
              <Link to="/blog" className={styles.navItem} activeClassName={styles.navItemActive} partiallyActive={true}>Chajarí</Link>
              <Link to="/about" className={styles.navItem} activeClassName={styles.navItemActive}>Nosotros</Link>
              <a href={`https://www.instagram.com/${data.siteMetadata.siteMetadata.social.instagram}`} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={`https://www.facebook.com/${data.siteMetadata.siteMetadata.social.facebook}`} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href={`https://wa.me/5493416941201/?text=Consulta%20desde%20el%20sitio%0Ahttps%3A%2F%2Fhotelmainumby.com%0A----------------------------%0A%0A`} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </nav>
        </header>
      </div>

      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.open : ""}`} aria-hidden={!menuOpen}>
        <Link to="/" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Principal</Link>
        <Link to="/blog" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Chajarí</Link>
        <Link to="/about" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Nosotros</Link>
        <div className={styles.mobileSocial}>
          <a href={`https://www.instagram.com/${data.siteMetadata.siteMetadata.social.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href={`https://www.facebook.com/${data.siteMetadata.siteMetadata.social.facebook}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href={`https://wa.me/5493416941201/?text=Consulta%20desde%20el%20sitio`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </>
  )
}

export default Header
