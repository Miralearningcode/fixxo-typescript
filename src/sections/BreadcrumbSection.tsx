import { NavLink } from 'react-router-dom'


interface BreadcrumbProps {
  currentPage: string
}

const BreadcrumbSection: React.FC<BreadcrumbProps> = ({currentPage}) => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul className="breadcrumb-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>{currentPage}</li>
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection