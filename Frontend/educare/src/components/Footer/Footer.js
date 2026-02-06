import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='site-footer'>
            <div className='inside'>
                <nav className='footer-nav'>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/muc-dai-4b2a24211/" title="Socials" target="_blank" className="LinkColor" rel="noreferrer">{t("footer.imprint")}</a></li>
                        <li> <a href="https://sites.hm.edu/mucdai/" title="Contact" target="_blank" className="LinkColor" rel="noreferrer">{t("footer.contact")}</a></li>
                        <li> <a href="https://www.hm.edu/datenschutz/index.de.html" title="Policy" target="_blank" className="LinkColor" rel="noreferrer">{t("footer.about")}</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}