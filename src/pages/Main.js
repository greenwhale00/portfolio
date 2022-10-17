import React from 'react'
import '../css/Detail.scss'
import Header from './Header'

const Main = () => {
    return (
        <section className='Main'>
            <Header />
            <div className="intro">
                <p>Hey, I'm <span>김혜림</span>.</p>
                <p>Next Front End developer.</p>
            </div>
        </section>
    )
}

export default Main