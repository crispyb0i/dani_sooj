import Head from "next/head"
import styles from "@/styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Dani Sooj</title>
				<meta name="description" content="Dani Sooj" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Dani Sooj</h1>
				<p className={styles.subTitle}>(Under Construction)</p>
			</main>
		</>
	)
}
