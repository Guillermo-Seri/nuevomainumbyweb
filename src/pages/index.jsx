import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Button from "../components/button"
import BlogList from "../components/blog-list"
import FeaturedTagList from "../components/featured-tag-list"
import EmailSignup from "../components/email-signup"
import AboutContent from "../components/about-content"

import styles from "./index.module.scss"

const Hero = ({ title, subtitle, leftImage, leftAlt, rightImage, rightAlt }) => {
  const [active, setActive] = useState(0)
  const images = [
    { fluid: leftImage, alt: leftAlt },
    { fluid: rightImage, alt: rightAlt },
  ]

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % images.length), 5200)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}>
        {images.map((img, i) => (
          <div key={i} className={`${styles.heroBgItem} ${i === active ? styles.active : ""}`}>
            <Img fluid={img.fluid} alt={img.alt} style={{ height: "100%" }} imgStyle={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>Hotel Boutique • Chajarí</div>
        <h1 className={styles.heroTitle}>
          {title.split(" ").map((w, i) => i === 1 ? <em key={i}>{w} </em> : w + " ")}
        </h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <a href="#bienvenida" className={styles.heroCta}>Descubrir el hotel —</a>
      </div>
      <div className={styles.heroDots} aria-hidden>
        {images.map((_, i) => (
          <button key={i} className={`${styles.heroDot} ${i === active ? styles.active : ""}`} onClick={() => setActive(i)} aria-label={`Ver imagen ${i+1}`} />
        ))}
      </div>
      <div className={styles.heroScroll}>Deslizar</div>
    </section>
  )
}

const IndexPage = ({ data }) => {
  let featuredTags = data.tagDetails.frontmatter.tag_details.filter(obj => {
    return obj.featured === true && obj.featured_image
  })

  return (
    <Layout layoutFullWidth transparentHeader title="Principal">
      <Hero
        title={data.heroSectionMarkdown.frontmatter.title}
        subtitle={data.heroSectionMarkdown.frontmatter.subtitle}
        leftImage={data.heroSectionMarkdown.frontmatter.leftImage.childImageSharp.fluid}
        leftAlt={data.heroSectionMarkdown.frontmatter.leftImageAlt}
        rightImage={data.heroSectionMarkdown.frontmatter.rightImage.childImageSharp.fluid}
        rightAlt={data.heroSectionMarkdown.frontmatter.rightImageAlt}
      />

      {/* Main Feature - editorial */}
      <section id="bienvenida" className={`${styles.mainFeatureSection} reveal`}>
        <div className={styles.divider} />
        <h2 className="section-heading">
          {data.mainFeatureSectionMarkdown.frontmatter.heading}
        </h2>
        <div
          className="reveal reveal-delay-1"
          dangerouslySetInnerHTML={{ __html: data.mainFeatureSectionMarkdown.html }}
        />
        <div className="reveal reveal-delay-2" style={{ marginTop: "2rem" }}>
          <Button
            linkUrl={data.mainFeatureSectionMarkdown.frontmatter.linkUrl}
            linkText={data.mainFeatureSectionMarkdown.frontmatter.linkText}
          />
        </div>
      </section>

      {/* Latest Posts */}
      <section className={styles.latestPostsSection}>
        <div className={styles.innerNarrow}>
          <h2 className="section-heading reveal">Historias y novedades</h2>
          <p className="reveal" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 3rem", color: "var(--color-text-muted)" }}>
            Descubrí Chajarí, nuestras termas y todo lo que hace especial tu estadía.
          </p>
          <div className="reveal reveal-delay-1">
            <BlogList data={data.latestPosts} />
          </div>
        </div>
      </section>

      {/* Featured Tags */}
      {featuredTags.length > 0 && (
        <section className={`${styles.featuredTagsSection} reveal`}>
          <FeaturedTagList tags={featuredTags} />
        </section>
      )}

      {/* Subscribe */}
      <section className={styles.subscribeSection}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <EmailSignup />
        </div>
      </section>

      {/* About Me Blurb */}
      <section className={`${styles.aboutMeSection} reveal`}>
        <AboutContent
          heading={data.aboutSectionMarkdown.frontmatter.heading}
          copy={data.aboutSectionMarkdown.html}
          image={data.aboutSectionMarkdown.frontmatter.image.childImageSharp.fluid}
          imageAlt={data.aboutSectionMarkdown.frontmatter.imageAlt}
          imageFirst={false}
          button={{ text: "Conocé nuestra historia", url: "/about" }}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    latestPosts: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "post" } }
        published: { eq: true }
      }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM Do, YYYY")
            tags
            excerpt
            image {
              childImageSharp {
                fluid(maxWidth: 750, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageAlt
          }
          id
        }
      }
    }

    tagDetails: markdownRemark(
      frontmatter: { type: { eq: "data" }, name: { eq: "tags" } }
    ) {
      frontmatter {
        tag_details {
          name
          description
          featured
          featured_image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          featured_image_alt
        }
      }
    }

    heroSectionMarkdown: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "index-hero" } }
    ) {
      frontmatter {
        title
        subtitle
        leftImage {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        leftImageAlt
        rightImage {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        rightImageAlt
      }
      html
    }

    mainFeatureSectionMarkdown: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "index-main-feature" }
      }
    ) {
      frontmatter {
        heading
        linkUrl
        linkText
      }
      html
    }


    aboutSectionMarkdown: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "index-about" } }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
  }
`


export default IndexPage
