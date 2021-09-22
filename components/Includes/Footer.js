import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row footer-list">
            <div className="col-lg-10 mx-auto text-center">
              <Link href="/">
                <a>
                  <img
                    src="/assets/images/brand_logo.png"
                    className="img-fluid brand-logo"
                    alt=""
                  />
                </a>
              </Link>
              <ul>
                <li>
                  <Link href="/staticpages/terms-condition">
                    <a>Terms of Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/staticpages/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/staticpages/About">
                    <a>About Us </a>
                  </Link>
                </li>
                <li>
                  <Link href="/staticpages/faq">
                    <a>faqs </a>
                  </Link>
                </li>
                <li>
                  <Link href="/staticpages/contact-us">
                    <a> Contact Us </a>
                  </Link>
                </li>
                <li>
                  <Link href="/staticpages/tell-a-friend">
                    <a> Tell a Friend </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <p>© ISNA Matrimonials 2021 All Copyrights are reserved</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <ul>
                <li>
                  <Link href="https://web.facebook.com/?_rdc=1&_rdr">
                    <a>Facebook</a>
                  </Link>
                </li>
                <li>-</li>
                <li>
                  <Link href="https://twitter.com/login">
                    <a>Twitter</a>
                  </Link>
                </li>
                <li>-</li>
                <li>
                  <Link href="https://www.pinterest.com/login/">
                    <a>Pinterest</a>
                  </Link>
                </li>
                <li>-</li>
                <li>
                  <Link href="https://www.instagram.com/accounts/login/?">
                    <a>Instagram</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
