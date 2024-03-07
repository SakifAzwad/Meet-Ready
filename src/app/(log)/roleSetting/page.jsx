'use client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const RoleSetting = () => {
  // Getting user email from session
  const session = useSession()
  const router = useRouter()

  const email = session?.data?.user?.email
  
  const postData = async(role) => {
    try {
      const res = await axios.patch(`/api/register?email=${email}`, {role})
      return res
    } catch (error) {
      console.log(error)
    throw error;
    }
  }

  // tanstack query

  const {data, mutateAsync} = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
// todo show toast
      if(data.data === "User role updated to jobSeeker"){
        // todo show toast
        toast.success('User role updated to jobSeeker')
        router.push('/Job-Seeker-Dashboard')
      }else if(data.data === "User role updated to employer"){
        // complete
        toast.success('User role updated to employer')
        router.push('/dashboard')
      } else{
        // todo show toast
        toast.error('An error occurred')
        // console.log("An error occurred")
      }
    }
  })

  // On click function

  const handleClick = async (e, role) => {
    e.preventDefault()
    console.log(role)
    mutateAsync(role)
    // try {
    //   const res = await fetch(`/api/register?email=${email}`,{
    //     method:'PATCH',
    //     headers:{
    //       'Content-Type': "application/json",
    //     },
    //     body: JSON.stringify({role})
    //   })
    //   // .then(res => res.json())
    //   // .then(data => console.log(data))
    //   const data = await res.json()
    //   console.log(data)
    //   // console.log(res.data)
    // } catch (error) {
    //   console.log('onclick error', error)
    // }
  }


  return (
    <div className='flex justify-center flex-col items-center bg-purple-200 min-h-screen space-y-4'>
      <h1 className='font-semibold text-black text-lg mx-10 text-justify'>Your role is neither Employer nor Job Seeker. You cannot got to the dashboard now. Please click any button to set your role.</h1>

    <form onSubmit={handleClick}>
    <button 
      onClick={(e) => handleClick(e, 'employer')}
      className="bg-purple-500 hover:bg-purple-700 py-2 px-8 text-white rounded-lg text-base btn glass">Employer</button>

      <button 
      onClick={(e) => handleClick(e, 'jobSeeker')}
  className="bg-purple-500 hover:bg-purple-700 py-2 px-8 text-base text-white rounded-lg btn glass">Job Seeker</button>
    </form>

     



    </div>
  )
}

export default RoleSetting