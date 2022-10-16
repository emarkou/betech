import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "ΑΦΜ",
    // url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "801680916"
  },
  {
    text: "ΔΟΥ",
    // url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "ΚΑΛΛΙΘΕΑΣ"
  },
  {
    text: "ΓΕΜΗ",
    // url: "https://www.gatsbyjs.com/plugins",
    description:
      "161386808000",
  },
  {
    text: "ΑΡ. ΜΗΤΡΩΟΥ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "69282",
  },
  {
    text: "ΚΥΡ. ΚΑΔ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ ΜΗΧΑΝΙΚΩΝ ΚΑΙ ΣΥΝΑΦΕΙΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ ΠΑΡΟΧΗΣ ΤΕΧΝΙΚΩΝ ΣΥΜΒΟΥΛΩΝ",
  },
  {
    text: "ΔΕΥΤΕΡΕΥΟΝ ΚΑΔ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "ΧΟΝΔΡΙΚΟ ΕΜΠΟΡΙΟ ΑΛΛΩΝ ΜΗΧΑΝΗΜΑΤΩΝ ΚΑΙ ΕΞΟΠΛΙΣΜΟΥ, ΛΙΑΝΙΚΟ ΕΜΠΟΡΙΟ ΟΙΚΙΑΚΩΝ ΣΥΣΚΕΥΩΝ ΣΕ ΕΞΕΙΔΙΚΕΥΜΕΝΑ ΚΑΤΑΣΤΗΜΑΤΑ",
  },
  {
    text: "ΔΙΑΧΕΡΙΣΤΗΣ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "ΜΠΕΡΗΣ ΘΕΜΙΣΤΟΚΛΗΣ ΤΟΥ ΧΑΡΑΛΑΜΠΟΥ",
  },
  {
    text: "ΕΤΑΙΡΙΚΟ ΚΕΦΑΛΑΙΟ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "2.000,000 ΕΥΡΩ ΠΟΥ ΔΙΑΙΡΕΙΤΑΙ ΣΕ 100 ΕΤΑΙΡΙΚΑ ΜΕΡΙΔΙΑ ΚΕΦΑΛΑΙΟΥΧΙΚΩΝ ΕΙΣΦΟΡΩΝ ΟΝΟΜΑΣΤΙΚΗΣ ΑΞΙΑΣ 20,00 ΕΥΡΩ ΤΟ ΚΑΘΕΝΑ",
  },
  {
    text: "ΕΤΑΙΡΟΙ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "ΜΠΕΡΗΣ ΘΕΜΙΣΤΟΚΛΗΣ ΤΟΥ ΧΑΡΑΛΑΜΠΟΥ",
  },
  {
    text: "ΕΠΙΚΟΙΝΩΝΙΑ",
    // url: "https://www.gatsbyjs.com/cloud",
    description:
      "2109404934",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        <b>BETECH ΜΟΝΟΠΡΟΣΩΠΗ ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ δ.τ. BETECH ΜΟΝ.Ι.Κ.Ε.</b>
      </h1>
      <p className={styles.intro}>
        {/* <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))} */}
        {/* <br /> */}
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <p className={styles.listItemLink}>{link.text}</p>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
