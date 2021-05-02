import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
    return (
        <Layout>
            <div className="error-wrapper">
                <h1>
                    Sorry, this path does not exist{' '}
                    <span role="img" aria-label="emoji">
                        😞
                    </span>
                </h1>
                <p className="">
                    <Link className="" to="/">
                        Go back
                    </Link>
                </p>
            </div>
        </Layout>
    )
}
