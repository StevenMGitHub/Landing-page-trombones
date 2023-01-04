import React from 'react'

function Pricing() {
    return (
    <>
        <section id="pricing">
                   <div className="product" id="tenor">
                       <div className="level">
                        Tenor Trombone
                       </div>
                       <h2>$600</h2>
                       <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum.</li>
                       </ol>
                       <button className="btn">Select</button>
                   </div>
                   <div className="product" id="bass">
                       <div className="level">
                        Bass Trombone
                       </div>
                       <h2>$900</h2>
                       <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum.</li>
                       </ol>
                       <button className="btn">Select</button>
                   </div>
                   <div className="product" id="valve">
                        <div className="level">
                        Valve Trombone
                        </div>
                        <h2>$1200</h2>
                        <ol>
                            <li>Plays similar to a Trumpet</li>
                            <li>Great for Jazz Bands</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum.</li>
                        </ol>
                       <button className="btn">Select</button>
                   </div>
        </section>
    </>
  )
}

export default Pricing;