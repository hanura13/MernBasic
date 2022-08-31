import React from 'react'
import './footer.scss'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram } from '../../../assets'

const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

function MyFooter() {
  return (
    <div>
        <div className="footer">
            <div>
                {/* <img src={LogoSundev}/> */}
            
            </div>
            <div className="sosial-wrapper">
                <Icon src={ICFacebook} />
                <Icon src={ICInstagram} />
                <Icon src={ICTelegram} />
                <Icon src={ICDiscord} />
                <Icon src={ICGithub} />
            
            </div>
        </div>
        <div className="copyright">
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default MyFooter;