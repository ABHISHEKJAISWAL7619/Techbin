import React from 'react'

const Otp = () => {
  return (
    <div className="mb-6">
    <label className="block text-sm font-medium mb-1">OTP</label>
    <input
      type="text"
      placeholder="Enter OTP"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  )
}

export default Otp
