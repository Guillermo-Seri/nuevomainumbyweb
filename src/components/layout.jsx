import React, { useEffect, useState } from "react"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"
import styles from "./layout.module.scss"

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <button
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${styles.backToTop} ${visible ? styles.backToTopVisible : ""}`}
    >
      ↑
    </button>
  )
}

const Layout = props => {
  const { children, layoutFullWidth, isArticle, title, description, image, author, pathName, datePublished, transparentHeader } = props

  // Reveal on scroll
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [children])

  return (
    <>
      <SEO isArticle={isArticle} title={title} description={description} image={image} author={author} pathName={pathName} datePublished={datePublished}/>
      <Header transparent={transparentHeader} />
      {layoutFullWidth ? (
        <section className={transparentHeader ? styles.layoutTransparent : styles.layout}>{children}</section>
      ) : (
        <section className={styles.layoutNarrow}>{children}</section>
      )}
      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout
