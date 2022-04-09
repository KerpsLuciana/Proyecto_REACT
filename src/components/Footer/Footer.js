import './Footer.css';

function Footer() {
    return (
    <footer className="footer">
        <div className="footer__hijo">
            <div> 
            <h4>Ayuda</h4>
            </div>
            <div>
            <h4>Términos y condiciones</h4>
            </div>
            <div>
            <h4>Faqs</h4>
            </div>
        </div>
        <div className="footer__hijo">
        <div>
            <h4>Buscanos en nuestras redes sociales</h4>
            </div>
            <div>
            <img className="FooterImg" src="../img/whatsapp (1).png" alt="WhatsApp" width="40px" height="40px"/>
            <img className="FooterImg" src="../img/instagram (3).png" alt="Instagram" width="40px" height="40px"/>
            <img className="FooterImg" src="../img/facebook (1).png" alt="Facebook" width="40px" height="40px"/>
            </div>
        </div>
        <div className="footer__hijo">
            <div>
            <h4>Email:</h4>
            <p>flexrappi@gmail.com</p>
            </div>
            <div>
            <h4>Domicilio:</h4>
            <p>Moises lebenshon 2423</p>
            </div>
            <div>
            <h4>Teléfono:</h4>
            <p>+5491154897740</p>
            </div>
        </div>
    </footer>
    )
}


export default Footer;

