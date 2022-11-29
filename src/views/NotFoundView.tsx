import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import PageNotFound from '../assets/images/page-not-found.jpg'

const NotFoundView: React.FC = () => {
  return (
    <>
      <NavigationBarSection />
        <div className="not-found-view">
          <img src={PageNotFound} alt="404 - Page Not Found" />
        </div>
        <div style={ { position: "fixed", bottom: "0"} }></div>
        <FooterSection />
    </>
  )
}

export default NotFoundView