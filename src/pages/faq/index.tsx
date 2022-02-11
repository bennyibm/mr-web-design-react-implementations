import React from "react";
import styles from "./faq-page.module.css";
import { BreadcrumbHero } from '../../components';

export default function FaqPage() {
    return(
        <main className={styles.faqPage}>
            <BreadcrumbHero title="faq" />
            <section className={styles.container}>
                <h1 className="heading">frequently asked <span>question</span></h1>
                <div className={styles.content}>
                    <div className={styles.col}>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                    </div>
                    <div className={styles.col}>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                        <details>
                            <summary>question</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet quis eius dolor dicta perspiciatis nisi, voluptate, eum expedita minima ipsum cumque saepe consequuntur facilis temporibus aliquid accusantium? Praesentium, similique.</p>
                        </details>
                    </div>
                </div>
            </section>
        </main>
    )
};
