import React from 'react'

function Hero() {
    return (
    <>
        <section id="hero">
            <div>
                <h2>Handcrafted, home-made masterpieces</h2>
                <form id="form" action="https://www.freecodecamp.com/email-submit">
                    <label for=""></label>
                    <input id="email" type="email" name="email" placeholder="Enter your email address" required=""/>
                    <label for=""></label>
                    <input id="submit" class="btn" type="submit" value="Get started"/>                                          
                </form>
            </div>
        </section>
    </>
    )
}

export default Hero; 