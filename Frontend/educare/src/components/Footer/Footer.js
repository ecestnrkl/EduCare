import './Footer.css';

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='inside'>
                <nav className='footer-nav'>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/muc-dai-4b2a24211/" title="Socials" target="_blank" className="LinkColor" rel="noreferrer">Impressum</a></li>
                        <li> <a href="https://sites.hm.edu/mucdai/" title="Contact" target="_blank" className="LinkColor" rel="noreferrer">Kontakt</a></li>
                        <li> <a href="https://www.hm.edu/datenschutz/index.de.html" title="Policy" target="_blank" className="LinkColor" rel="noreferrer">Über uns</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}