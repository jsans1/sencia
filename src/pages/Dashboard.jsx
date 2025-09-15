import { useNavigate, useOutletContext } from 'react-router-dom'
import HomepageNoLog from '../components/HomepageNoLog'

const Dashboard = () => {
  const navigate = useNavigate()
  const { handleAdd } = useOutletContext() || {}

  const handlePlusClick = () => {
    if (handleAdd) handleAdd()
  }

  const handleBackClick = () => {
    // Handle back navigation if needed
    console.log('Back clicked')
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
      <div className="w-full max-w-[393px] min-h-screen relative">
        <HomepageNoLog 
          onPlusClick={handlePlusClick} 
          onBackClick={handleBackClick} 
        />
      </div>
    </div>
  )
}

export default Dashboard 