import styles from './slogans.module.css'
import React from 'react'
import '../x.svg'

//dummy data for slogans
const slogans = [
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:'Review the facts cool is the best.'},
    {slogan:'Review the facts cool is the best.'},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
    {slogan:`There is no Sore it will Not Heal, No cool it will not Subdue. `},
    {slogan:"coziness building for tomorrow"},
]

export default function Slogans() {
    return (
        <div className={styles.sloganwrapper}>
            {slogans.map((slo) => (
            <div className={styles.slogan}>
                {slo.slogan}
            </div>  
            ))}
        </div>
    )
}
