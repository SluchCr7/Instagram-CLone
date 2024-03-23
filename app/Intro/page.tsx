import React from 'react'
import styles from './page.module.css'
import Image from "next/image"
const page = () => {
  return (
    <div className={styles.page_intro}>
        <Image
            src={"/instagram.png"}
            alt="Vercel Logo"
            className={styles.img_Logo}
            width={80}
            height={80}
        />
        <div className={styles.page_intro_text}>
        <span className={styles.page_intro_text_span}>From</span>
        <div className={styles.span_meta_logo}>
          <Image
              src={"/meta.png"}
              alt="Vercel Logo"
              className={styles.img_Logo_meta}
              width={80}
              height={80}
          />
          <h1 className={styles.page_intro_text_h1}>Meta</h1>
        </div>
        </div>
    </div>
  )
}

export default page