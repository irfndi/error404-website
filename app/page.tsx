import styles from './page.module.css'

export default function Home() {
  const tokenAddress = "YOUR_TOKEN_ADDRESS_HERE"; // Replace with actual token address

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Error404
        </h1>
        <h2 className={styles.subtitle}>The Lost Meme of the Internet</h2>

        <p className={styles.description}>
          Embrace the nostalgia of the early internet with Error404, the meme coin that celebrates broken links and forgotten corners of the web. 
          It's not just a coin, it's a digital artifact.
        </p>

        <div className={styles.grid}>
          <a href={tokenAddress} className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Token Address &rarr;</h2>
            <p>Click to view on explorer (Add address later)</p>
          </a>
        </div>
      </main>
    </div>
  );
}
