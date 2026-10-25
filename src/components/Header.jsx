function Header({ children }) {
  return (
    <header className="page-header">
      <div className="page-header__text">
        <h1>Lead Dashboard</h1>
        <p className="page-header__subtitle">Campaign performance at a glance</p>
      </div>
      {children}
    </header>
  )
}

export default Header