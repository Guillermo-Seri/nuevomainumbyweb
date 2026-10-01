import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            facebook
          }
          mailchimpUrl
        }
      }
    }
  `)

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerColumnName}>
          <img src="/images/logo-hotel-mainumby-negro.png" alt="Hotel Mainumby - Chajari E.R" className={styles.footerLogo} />
          <p>Hotel boutique en el corazón de Chajarí.<br/>Entre Ríos, Argentina.</p>
          <p style={{marginTop: "0.8rem", fontSize: "0.74rem"}}>
            <a href="mailto:hotelmainumbyreservas@gmail.com" style={{color: "rgba(253,251,247,0.7)", textDecoration: "none"}}>hotelmainumbyreservas@gmail.com</a><br/>
            <a href="https://wa.me/5493416941201" style={{color: "rgba(253,251,247,0.7)", textDecoration: "none"}}>+54 9 341 694 1201</a>
          </p>
        </div>
        <div className={styles.footerColumnLinks}>
          <Link to="/" className={styles.navItem}>Principal</Link>
          <Link to="/blog" className={styles.navItem}>Chajarí</Link>
          <Link to="/about" className={styles.navItem}>Nosotros</Link>
          <div>
            <a href={data.site.siteMetadata.mailchimpUrl} target="__blank" className="nav-link">Suscribirse</a>
            <span style={{color: "rgba(253,251,247,0.25)", margin: "0 0.6rem"}}>|</span>
            <a href="/rss.xml" className="nav-link">RSS</a>
            <span style={{color: "rgba(253,251,247,0.25)", margin: "0 0.6rem"}}>|</span>
            <a href="/sitemap.xml" className="nav-link">Sitemap</a>
          </div>
        </div>
        <div className={styles.footerColumnSocial}>
          <a href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={`https://www.facebook.com/${data.site.siteMetadata.social.facebook}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href={`https://wa.me/5493416941201/?text=Consulta%20desde%20el%20sitio%0Ahttps%3A%2F%2Fhotelmainumby.com%0A----------------------------%0A%0A`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={`mailto:hotelmainumbyreservas@gmail.com`} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <div className={styles.footerBottom}>
          © {new Date().getFullYear()} Hotel Mainumby — Donde el protagonista sos vos. Chajarí, Entre Ríos.
        </div>
      </footer>
    </div>
  )
}

export default Footer
