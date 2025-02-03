import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData]= useContext(AuthContext)
    // console.log(authData.employees)

    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>
            <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between rounded'>
                <h3 className='w-1/5 text-lg font-medium'>new task</h3>
                <h2 className='w-1/5 text-lg font-medium'>employee name </h2>
                <h5 className='w-1/5 text-lg font-medium'>active task</h5>
                <h5 className='w-1/5 text-lg font-medium'>completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>failed</h5>
            </div>

            <div className='  '>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-emerald-500 border-2 mb-2  py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-600'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask