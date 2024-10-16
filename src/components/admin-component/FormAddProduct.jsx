import axios from 'axios';
import React,{useState} from 'react'

const FormAddProduct = () => {
    const [formData, setFormData] = useState({
        
        name: "",
        srNumber: "",
        model: ""
        
      });

      const [file,setFile] = useState(null)
    


      const handleChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }else{

            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = new FormData()
        payload.append(
            "image",file
        )
        payload.append(
            "name",formData.name
        )
        payload.append(
            "srNumber",formData.srNumber
        )
        payload.append(
            "model",formData.model
        )
       await axios.post("http://localhost:8077/api/part",payload,{
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded"
        }
       })

        console.log("Form Data:", formData);
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Add Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                {/* Image */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
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
              {/* Part Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Part Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
    
              {/* Serial number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Serial number
                </label>
                <input
                  type="text"
                  name="srNumber"
                  value={formData.srNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              {/* Model type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Model Type
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
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

export default FormAddProduct