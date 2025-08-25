import Link from 'next/link'
import React from 'react'

const Button = ({ link, cn, text }) => {
    return (
        <Link href={link} className={`${cn} primary-button`}>
            {text}
        </Link>
    )
}

export default Button