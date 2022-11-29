import React from 'react'
import ExternalLinkIconComponent from '../components/ExternalLinkIconComponent'

const FooterSection = () => {
  return (
    <footer>
        <div className="social-media-icons">
            <ExternalLinkIconComponent link="https://facebook.com" icon="fa-brands fa-facebook-f" />
            <ExternalLinkIconComponent link="https://instagram.com" icon="fa-brands fa-instagram" />
            <ExternalLinkIconComponent link="https://twitter.com" icon="fa-brands fa-twitter" />
            <ExternalLinkIconComponent link="https://google.com" icon="fa-brands fa-google" />
            <ExternalLinkIconComponent link="https://linkedin.com" icon="fa-brands fa-linkedin" />
        </div>
        <p>© 2022 Fixxo. All Rights Reserved</p>
    </footer>
  )
}

export default FooterSection