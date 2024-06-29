import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import SubmitSpinner from "../components/submit-spinner"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className="relative bg-white small:min-h-screen">
        <SubmitSpinner />
        <div className="h-16 bg-white">
          <nav className="flex items-center justify-between h-full border-b content-container">
            <Link
              href="/cart"
              className="flex items-center flex-1 text-gray-700 uppercase text-small-semi gap-x-2 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="hidden mt-px uppercase small:block txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base">
                  Back to shopping cart
                </span>
                <span className="block mt-px small:hidden">Back</span>
              </>
            </Link>
            <Link
              href="/"
              className="uppercase txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base"
            >
              Pahadi Street
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-4">
          <MedusaCTA />
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
