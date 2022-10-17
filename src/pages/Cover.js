import React from 'react';
import '../css/Detail.scss'
import Header from './Header';

const Cover = () => {
    return (
        <section className='Cover'>
            <Header />
            <div className='front'>

                <div className="circle"></div>

                <div className="tit">
                    <div className="text">
                        <p className='first'>Kim Hye Lim's</p>
                        <p className='second'>PORTFOLIO</p>
                    </div>
                </div>
                {/* <div className="circle">
                    <span>dot</span>
                </div> */}
            </div >
        </section>
    )
}

export default Cover