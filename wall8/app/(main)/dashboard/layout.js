import React from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const Dashboard = () => {
    return (
        <div className='px-5 '>
            <h1 className='text-6xl font-bold gradient-title mb-5'>
                Dashboard Page</h1>
                <suspense fallback={<BarLoader/>}>
                <DashboardPage/>
                </suspense>
            
        </div>
    )
}

export default Dashboard