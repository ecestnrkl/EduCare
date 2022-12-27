import './Footer.css';

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='inside'>
                <nav className='footer-nav'>
                    <ul>
                        <li><a href="https://www.instagram.com/" title="Socials" target="_blank" className="LinkColor" rel="noreferrer">Impressum</a></li>
                        <li> <a href="https://www.instagram.com/" title="Contact" target="_blank" className="LinkColor" rel="noreferrer">Kontakt</a></li>
                        <li> <a href="https://www.instagram.com/" title="Policy" target="_blank" className="LinkColor" rel="noreferrer">Über uns</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}