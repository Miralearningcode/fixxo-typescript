import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MapSection from '../sections/MapSection'
import NavigationBarSection from '../sections/NavigationBarSection'

const ContactsView: React.FC = () => {
  // window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <NavigationBarSection />
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection /> 
    </>
  )
}

export default ContactsView