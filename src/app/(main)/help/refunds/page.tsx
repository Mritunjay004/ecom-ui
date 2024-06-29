/* eslint-disable react/no-unescaped-entities */
import React from "react"

const RefundsAndCancellations = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Cancellation & Refund Policy
          </h2>

          <div className="mb-6">
            <p className="text-sm text-gray-600 text-center">
              Last updated on 27-06-2024 22:24:08
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <p>
              M/S GUPTA TRADERS believes in helping its customers as far as
              possible, and has therefore a liberal cancellation policy. Under
              this policy:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                Cancellations will be considered only if the request is made
                immediately after placing the order. However, the cancellation
                request may not be entertained if the orders have been
                communicated to the vendors/merchants and they have initiated
                the process of shipping them.
              </li>

              <li>
                M/S GUPTA TRADERS does not accept cancellation requests for
                perishable items like flowers, eatables etc. However,
                refund/replacement can be made if the customer establishes that
                the quality of product delivered is not good.
              </li>

              <li>
                In case of receipt of damaged or defective items please report
                the same to our Customer Service team. The request will,
                however, be entertained once the merchant has checked and
                determined the same at his own end. This should be reported
                within 2 days of receipt of the products.
              </li>

              <li>
                In case you feel that the product received is not as shown on
                the site or as per your expectations, you must bring it to the
                notice of our customer service within 2 days of receiving the
                product. The Customer Service Team after looking into your
                complaint will take an appropriate decision.
              </li>

              <li>
                In case of complaints regarding products that come with a
                warranty from manufacturers, please refer the issue to them.
              </li>

              <li>
                In case of any Refunds approved by M/S GUPTA TRADERS, it'll take
                6-8 days for the refund to be processed to the end customer.
              </li>
            </ul>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            For any questions or concerns regarding our Cancellation & Refund
            Policy, please contact our Customer Service team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RefundsAndCancellations
