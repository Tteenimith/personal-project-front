import React, { useState } from 'react'

const FormAddModel = () => {
        const [data,setData] = useState({name:""})

        const handleChange = (e) => {
            if (e.target.files) {
                setFile(e.target.files[0])
            }else{
    
                setFormData({
                    ...Data,
                    [e.target.name]: e.target.value,
                });
            }
          };

          const handleSubmit = (e) => {
            e.preventDefault()
          }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Model
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                {/* Image */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="file"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              
                

    
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      );
}

export default FormAddModel