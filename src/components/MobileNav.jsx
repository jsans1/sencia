import '../App.css'
import homeIcon from '../assets/home.svg';
import compassIcon from '../assets/compass.svg';
import heartIcon from '../assets/heart.svg';
import userIcon from '../assets/user.svg';

const MobileNav = ({ active = 'Explore', onNav, onAdd }) => {
  const handleClick = (page) => {
    if (onNav) onNav(page);
  };
  return (
    <div className="mobile-nav-wrapper">
      <nav className="mobile-nav">
        <button className={active === 'Home' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Home')}>
          <img src={homeIcon} alt="Home" className="mobile-nav-icon" style={{opacity: active === 'Home' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Home</span>
        </button>
        <button className={active === 'Explore' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Explore')}>
          <img src={compassIcon} alt="Explore" className="mobile-nav-icon" style={{opacity: active === 'Explore' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Explore</span>
        </button>
        <button className={active === 'Add' ? 'mobile-nav-item add-btn' : 'mobile-nav-item add-btn'} onClick={onAdd}>
          <span className="mobile-nav-icon" style={{opacity: 1}}>＋</span>
        </button>
        <button className={active === 'Care' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Care')}>
          <img src={heartIcon} alt="Care" className="mobile-nav-icon" style={{opacity: active === 'Care' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Care</span>
        </button>
        <button className={active === 'Loris' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Loris')}>
          <img src={userIcon} alt="Loris" className="mobile-nav-icon" style={{opacity: active === 'Loris' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Loris</span>
        </button>
      </nav>
    </div>
  )
}

export default MobileNav 