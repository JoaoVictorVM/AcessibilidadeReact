import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={} />
      </div>

      <div className={styles.nav}>
        <a href="">{/* svg github */}</a>
      </div>

      <div className={styles.content}>
        <h2>Desenvolvendo uma web acessível</h2>
        <h4>
          Protocolos e diretrizes orientam o desenvolvimento de tecnologias
          acessiveis, mas e preciso olhar para alem de tudo isso
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam
          expedita eos rerum vel sapiente voluptatem! Eaque ratione possimus
          laborum recusandae sint aut doloremque eum alias, esse rem cum
          nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam
          dolorem, at quos facere, similique, esse nihil sit sed asperiores
          magnam ducimus sint modi ipsam numquam labore officia. Labore, ullam.
        </p>
        <h3>O que e acessibilidade, afinal?</h3>
      </div>
    </div>
  );
}
