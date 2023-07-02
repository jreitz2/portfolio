const Navbar = ({ scrollToSection }) => {
    return ( 
        <nav>
      <ul>
        <li>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
     );
}
 
export default Navbar;