import '../App.css'
// Icons are now in public directory, using direct paths

const MobileNav = ({ active = 'Explore', onNav, onAdd }) => {
  const handleClick = (page) => {
    if (onNav) onNav(page);
  };
  return (
    <div className="mobile-nav-wrapper">
      <nav className="mobile-nav">
        <button className={active === 'Home' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Home')}>
          <img src="/home.svg" alt="Home" className="mobile-nav-icon" style={{opacity: active === 'Home' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Home</span>
        </button>
        <button className={active === 'Explore' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Explore')}>
          <img src="/compass.svg" alt="Explore" className="mobile-nav-icon" style={{opacity: active === 'Explore' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Explore</span>
        </button>
        <button className={active === 'Add' ? 'mobile-nav-item add-btn' : 'mobile-nav-item add-btn'} onClick={onAdd}>
          <span className="mobile-nav-icon" style={{opacity: 1}}>＋</span>
        </button>
        <button className={active === 'Care' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Care')}>
          <img src="/heart.svg" alt="Care" className="mobile-nav-icon" style={{opacity: active === 'Care' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Care</span>
        </button>
        <button className={active === 'Loris' ? 'mobile-nav-item active' : 'mobile-nav-item'} onClick={() => handleClick('Loris')}>
          <img src="/user.svg" alt="Loris" className="mobile-nav-icon" style={{opacity: active === 'Loris' ? 1 : 0.5}} />
          <span className="mobile-nav-label">Loris</span>
        </button>
      </nav>
    </div>
  )
}

export default MobileNav 