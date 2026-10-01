import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./email-signup.module.scss"

const EmailSignup = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mailchimpUrl
        }
      }
    }
  `)

  return (
    <div className={styles.signupSection}>
      <h2 className="section-heading">¡Suscribite para recibir novedades!</h2>
      <form
        className={styles.form}
        action={data.site.siteMetadata.mailchimpUrl}
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <fieldset className={styles.formFieldset}>
          <div className="cf">
            <label className="clip" htmlFor="email-address">
              Email Address
            </label>
            <input
              className={styles.formInputEmail}
              placeholder="Dirección de Email"
              type="text"
              name="EMAIL"
              id="email-address"
            />
            <input
              className={styles.formSubmit}
              type="submit"
              name="subscribe"
              value="Suscribirse"
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default EmailSignup
