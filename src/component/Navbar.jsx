import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link href={"/watchlist"} >
                <button>watchlist</button>
            </Link>
        </div>
    )
}

export default Navbar