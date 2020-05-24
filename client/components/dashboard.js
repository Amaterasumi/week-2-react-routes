import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <div>
        <Link to="/dashboard/profile/d8a9d949-d1f3-4999-9c60-fb9eeb53af33">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
