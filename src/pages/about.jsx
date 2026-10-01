import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AboutContent from "../components/about-content"
import Gallery from "../components/gallery"

import styles from "./about.module.scss"

const photos = [
  {
    src: "https://i.ibb.co/LxNZCqC/hotel-mainumby-2.png",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/KwwCF7T/hotel-mainumby.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://i.ibb.co/YdFvfSV/Escaleras-Hotel-Mainumby.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/z4d8NTL/Escaleras-primer-piso-2.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://i.ibb.co/JBj2q8z/Desayunador.jpg",
    width: 4,
    height: 4
  },
  {
      src: "https://i.ibb.co/mcZgYVr/Escaleras.jpg",
      width: 4,
      height: 4
    },
  {
    src: "https://i.ibb.co/hFp4qzn/Habitacion-premium-4.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://i.ibb.co/WPWQSCD/Habitacion-premium-5.jpg",
    width: 4,
    height: 4
  },
  {
      src: "https://i.ibb.co/890gzMD/Habitacion-premium-1.png",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/n8R6sL1/Habitacion-premium-2.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/VYZtw50/Habitacion-secundaria-premium.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/ZSqLYHx/Habitacion-premium-3.jpg",
      width: 4,
      height: 4
    },
  {
    src: "https://i.ibb.co/gV5cfRz/Ban-o-premium-1.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://i.ibb.co/KsGgFcw/Ban-o-premium-4.png",
    width: 4,
    height: 4
  }, 
    {
      src: "https://i.ibb.co/x29HYY7/Ban-o-premium-3.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://i.ibb.co/JBKDhL4/Ban-o-premium-2.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/VLgkBy5/Ban-o-premium-4.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/Bg0tS58/Habitacion-superior-7.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/4f977pr/Habitacion-superior-9.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/TM25dHS/Habitacion-superior-1.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/C8RcSH3/Habitacion-superior-2.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/tcVGmr9/Habitacion-superior-3.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/C884tGm/Habitacion-superior-4.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/VW0CGcZ/Habitacion-superior-5.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/vmmZPZL/Ban-o-superior-1.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/c858h8J/Ban-o-superior-2.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/tZxcScS/Ban-o-superior-3.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/dKpKxQR/Habitacion-estandar-1.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/qRQx7R3/Habitacion-estandar-2.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/FH5QCBG/Habitacion-estandar-3.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/z83Nppf/Habitacion-estandar-4.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/D4nTz7f/Habitacion-estandar-5.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/DCb1Sn0/Habitacion-estandar-6.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/Yh3gkC2/Ban-o-estandar-1.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/Zdh0Y43/Ban-o-estandar-2.jpg",
      width: 4,
      height: 4
    }
];

const AboutPage = ({ data }) => {
  return (
    <Layout title="Nosotros" pathName="/about">
      <h1 className="page-heading">Sobre nosotros</h1>

      <AboutContent
        heading={data.aboutSectionOne.frontmatter.heading}
        copy={data.aboutSectionOne.html}
        image={data.aboutSectionOne.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionOne.frontmatter.imageAlt}
      />

      <AboutContent
        heading={data.aboutSectionTwo.frontmatter.heading}
        copy={data.aboutSectionTwo.html}
        image={data.aboutSectionTwo.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionTwo.frontmatter.imageAlt}
      />

      <AboutContent
        heading={data.aboutSectionThree.frontmatter.heading}
        copy={data.aboutSectionThree.html}
        image={data.aboutSectionThree.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionThree.frontmatter.imageAlt}
      />

      {/*<AboutContent
      //  heading={data.aboutSectionFive.frontmatter.heading}
      //  copy={data.aboutSectionFive.html}
      //  image={data.aboutSectionFive.frontmatter.image.childImageSharp.fluid}
      //  imageAlt={data.aboutSectionFive.frontmatter.imageAlt}
      />*/}

      <section className={styles.finalSectionWrapper}>
        <div>
          <h2 className="section-heading">¡Gracias por visitarnos!</h2>
          <h2 className="section-heading">Contacto:</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.aboutSectionFinal.html,
            }}
          ></div>
        </div>
      </section>

    <Gallery photos={photos} />

    </Layout>
  )
}

export const query = graphql`
  query {
    aboutSectionOne: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-1" }
      }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionTwo: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "about-2" } }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionThree: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-3" }
      }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionFive: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-5" }
      }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionFinal: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-final" }
      }
    ) {
      html
    }
  }
`

export default AboutPage
