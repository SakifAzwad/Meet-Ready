import React from 'react'
import CardPrice from './CardPrice'
import FeatureTable from './FeatureTable'
import CallosalApointment from './CallosalApointment'


const PlanPrice = () => {
    return (
        <div className='items-center'>
            <div>
                <h1 className='text-center text-4xl font-bold text-amber-300'>All Plans Include A 30-Day Money Back Guarantee</h1>
            </div>
            <div className='w-full justify-center mt-6 flex mx-auto'><div className="flex flex-row w-1/2 justify-around items-center">
                <div className="form-control w-52">
                    <label className="cursor-pointer label">
                        <span className="label-text text-2xl">Billed monthly</span>
                        
                    </label>
                </div>
                <div className="form-control w-52">
                    <label className="cursor-pointer label">
                        <span className="label-text text-2xl">Billed annually</span>
                        <input type="checkbox" className="toggle toggle-secondary" checked />
                    </label>
                </div>
                <div className="form-control w-52">
                    <label className="cursor-pointer label">
                    <button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Save 20%</button>
                        
                    </label>
                </div>
            </div></div>
            <div className='flex flex-row items-center'>
                <CardPrice popularity="Free" ></CardPrice>
                <CardPrice popularity='Premium' dolar='$' amount={9} svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#0095FF', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /></linearGradient></defs><g><path d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z" style={{ fill: 'url(#skyGradient)' }}/><path d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z" style={{ fill: '#1976d2' }}/></g></svg>} time='month'></CardPrice>
                <CardPrice popularity='Enterprise' learn='learn More'></CardPrice>
            
            
            </div>
            <FeatureTable></FeatureTable>
            <CallosalApointment/>
        </div>
    )
}

export default PlanPrice;
