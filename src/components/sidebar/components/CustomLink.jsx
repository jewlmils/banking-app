import {Link,useMatch,useResolvedPath} from 'react-router-dom'


export function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : "custom-link"}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }