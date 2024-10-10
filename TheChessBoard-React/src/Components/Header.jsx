import '../css/Header.css';
import { Outlet, Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <section>
        <nav className='nav'>
          <ul className='mainnavbar'>
            <li>
              <Link to='/HowIBecameMe'>The Story So Far</Link>
            </li>
            <li>
              <Link to='/ThroughMyLens'>Through My Lens</Link>
            </li>
            <li>
              <Link to='/' className='mainnavlink'>
                B-Roll
              </Link>
            </li>
            <li>
              <Link to='/Snowboarding'>Snowboarding</Link>
            </li>
            <li>
              <Link to='/Chess'>Chess</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet />
    </div>
  );
}
