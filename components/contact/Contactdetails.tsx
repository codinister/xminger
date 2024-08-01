'use client'



import Contactbox from "./Contactbox"

const Contactdetails = () => {
  return (
    <div className="contactdetails">
    <div>
      <Contactbox desc="Danyame-Kumasi" url="#" fa="map-marker" />
      <Contactbox desc="+233 (0) 322 023 430" url="#" fa="phone" />
      <Contactbox desc="+233 (0) 501 685 788" url="#" fa="phone" />
      <Contactbox
        desc="info@xmingeradvertising.com"
        url="#"
        fa="envelope"
      />
    </div>

    <div>
      <Contactbox
        desc="Facebook"
        url="https://web.facebook.com/xmingeradvertising"
        fa="facebook"
      />
      <Contactbox
        desc="Instagram"
        url="https://www.instagram.com/xminger_advertising.gh/"
        fa="instagram"
      />
      <Contactbox
        desc="Youtube"
        url="https://www.youtube.com/@xmingeradvertising7690"
        fa="youtube"
      />
    </div>
  </div>
  )
}

export default Contactdetails