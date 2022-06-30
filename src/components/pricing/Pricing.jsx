import React from 'react'

function Pricing() {
    return (
    <>
        <section id="pricing">
                   <div class="product" id="tenor">
                       <div class="level">
                        Tenor Trombone
                       </div>
                       <h2>$600</h2>
                       <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum.</li>
                       </ol>
                       <button class="btn">Select</button>
                   </div>
                   <div class="product" id="bass">
                       <div class="level">
                        Bass Trombone
                       </div>
                       <h2>$900</h2>
                       <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum.</li>
                       </ol>
                       <button class="btn">Select</button>
                   </div>
                   <div class="product" id="valve">
                        <div class="level">
                        Valve Trombone
                        </div>
                        <h2>$1200</h2>
                        <ol>
                            <li>Plays similar to a Trumpet</li>
                            <li>Great for Jazz Bands</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum.</li>
                        </ol>
                       <button class="btn">Select</button>
                   </div>
        </section>
    </>
  )
}

export default Pricing;