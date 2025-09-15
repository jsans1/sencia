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
    <HomepageNoLog 
      onPlusClick={handlePlusClick} 
      onBackClick={handleBackClick} 
    />
  )
}

export default Dashboard 