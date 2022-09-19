import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
        voluptatem recusandae laboriosam nemo officiis quisquam aperiam dolorem
        libero omnis optio quaerat accusamus aliquid, amet dicta doloremque
        dolorum sed quis ratione.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
