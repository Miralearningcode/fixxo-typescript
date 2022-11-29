import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const CategoriesView = () => {
  return (
    <>
      <NavigationBarSection />
      <BreadcrumbSection currentPage= "Categories" />
      <FooterSection />
    </>
  )
}

export default CategoriesView