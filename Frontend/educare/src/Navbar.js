/* ul = onordered lists */
import './Navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        EduCare
      </Link>
      <ul> 
        <CustomLink to="/HomePage">HomePage</CustomLink>
        <CustomLink to="/LandingPage">LandingPage</CustomLink>
        <CustomLink to="/ReportsPage">ReportsPage</CustomLink>
      </ul>
    </nav>  
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}