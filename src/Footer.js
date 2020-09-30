import Link from "next/link";

export const Footer = () => (
  <footer className="footer-content">
    <div className="footer-content-info">
      <Link href="/">
        <a id="footer-content-info--logo">
          <strong>U</strong>ri<strong>V</strong>ida
        </a>
      </Link>
      <h5 className="footer-content-info--contacto">
        Contacto<a name="contacto" id="contacto"></a>
      </h5>
      <div className="footer-content-info-texto">
        <p className="footer-content-info-texto--tel">urivida@gmail.com</p>
        <p className="footer-content-info-texto--email">+54 9 2616 53-4910</p>
        <a href="https://www.facebook.com/UriVida-107667067719867">
          <span
            id="footer-content-info-texto--redes"
            className="iconify"
            data-icon="bx-bxl-facebook-square"
            data-inline="false"
          ></span>
        </a>
        <a href="https://www.instagram.com/uri.vida/?igshid=1unwqzfkcj9ra">
          <span
            id="footer-content-info-texto--redes"
            className="iconify"
            data-icon="carbon-logo-instagram"
            data-inline="false"
          ></span>
        </a>
      </div>
    </div>
    <div>
      <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
        <img
          className="icono-osdepym"
          src="/osdepym.png"
          alt=""
          width="50"
          height="50"
        />
      </a>
    </div>
  </footer>
);
