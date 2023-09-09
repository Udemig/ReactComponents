import NavLink from '../NavLink/NavLink';
import './Navbar.css'
function Navbar() {
  return (
    <nav>
<NavLink menuTitle={'Ana Sayfa'} />
<NavLink menuTitle={'Kurslar'}/>
<NavLink menuTitle={'Başaranlar'} active={true}/>
<NavLink menuTitle={'İletişim'}/>

    </nav>
  );
}

export { Navbar };
