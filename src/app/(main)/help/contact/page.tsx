import React from "react"

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h2>

          <div className="mb-6">
            <p className="text-sm text-gray-600 text-center">
              Last updated on 27-06-2024 22:23:05
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Merchant Legal Entity Name
              </h3>
              <p className="text-gray-600">M/S GUPTA TRADERS</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Registered Address
              </h3>
              <p className="text-gray-600">
                parnala, dhar road, parnalla billawar, Jammu, Jammu and Kashmir,
                PIN: 184203
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Operational Address
              </h3>
              <p className="text-gray-600">
                parnala, dhar road, parnalla billawar, Jammu, Jammu and Kashmir,
                PIN: 184203
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">Telephone: 8448102860</p>
              <p className="text-gray-600">Email: streetpahadi@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            You may contact us using the information above. We look forward to
            hearing from you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
