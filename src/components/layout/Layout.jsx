import { Outlet } from 'react-router-dom'

const Layout = ({ handleAdd }) => {
  return (
    <div className="app-main-container">
      <main className="app-main-inner">
        <Outlet context={{ handleAdd }} />
      </main>
    </div>
  )
}

export default Layout 