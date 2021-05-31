import React from 'react'
import styles from './cards.module.css'
import '../card1.svg'
import '../card2.svg'
import '../card3.svg'
import '../card4.svg'


const cards = [
    { img: "card1.svg", name: "Privacy Policy Generator", content: `Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.` },
    { img: "card2.svg", name: "Terms & Conditions Generator", content: `Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.` },
    { img: "card3.svg", name: "Domain Name Generator", content: `Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.` },
    { img: "card4.svg", name: "Invoice Generator", content: `Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.` }
]



export default function Cards() {
    return (
        <div className={styles.card}>
            <p className={styles.products}>Try our other free products</p>


            <div>

                <div className={styles.carditems}>
                    {cards.map((card) => (
                        <div className={styles.carditemlist}>
                            <img className={styles.img} src={card.img} alt="" />
                            <p className={styles.titlename}>{card.name}</p>
                            <p className={styles.desc}>{card.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
