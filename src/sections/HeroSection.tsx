import LeftImg from '../assets/images/placeholder-main-left.png'
import RightImg from '../assets/images/placeholder-main-right.png'

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
        <div className="container">
            <div className="hero-image-left"> 
                <img src={LeftImg} alt="placeholder-image" />
            </div> 
            <div className="hero-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <a href="#" className="btn btn-lg btn-theme">
                    <span className="btn-theme-left-border"></span>
                    SHOP NOW
                    <span className="btn-theme-right-border"></span>
                </a> 
            </div>
            <div className="hero-image-right">
                <img src={RightImg} alt="placeholder-image" />
            </div>
        </div>
    </section>
  )
}

export default HeroSection