import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>TILLIT AI · Sample Documentation</div>
          <h1 className={styles.title}>Supply chain traceability<br />for Shopify merchants</h1>
          <p className={styles.desc}>
            A sample documentation site for the TILLIT AI Shopify app.
            Browse the pages below to see how the app works.
          </p>
          <Link className={styles.btn} to="/intro">Get Started →</Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link className={styles.card} to="/dashboard">
            <div className={styles.cardIcon}>📊</div>
            <div className={styles.cardTitle}>Supply Chain Dashboard</div>
            <div className={styles.cardDesc}>Your main overview screen — analytics, product list, batch data, and verification health.</div>
          </Link>
          <Link className={styles.card} to="/billing">
            <div className={styles.cardIcon}>💳</div>
            <div className={styles.cardTitle}>Billing & Subscription</div>
            <div className={styles.cardDesc}>View your current plan, track usage, compare plans, and see billing history.</div>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
