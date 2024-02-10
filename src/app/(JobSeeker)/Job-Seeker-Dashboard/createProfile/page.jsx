'use client'
import Input from '@/components/JobSeekerDashboard/Input/Input'
import { cartContext } from '@/utils/Cart/CartContext'
import { useContext } from 'react'

const CreateProfile = () => {
  const {isClicked} = useContext(cartContext)
  return (
    <div className={`pt-10 pl-20 pr-5 ${isClicked ? 'lg:pl-24' : 'lg:pl-80'}`}>
      <h1>Create your profile</h1>
   
      {/* Input field for name, skill, email, address, dist, country, phone */}
      <div className='mt-4'>
      <Input placeholder={'Your Name'}
      name='name'
      type='text'
      className='w-full md:w-3/4 lg:w-full'
      />
      </div>
    </div>
  )
}

export default CreateProfile

