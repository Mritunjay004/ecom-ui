"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"

const FooterNav = () => {
  const { collections } = useCollections()
  // const { product_categories } = useProductCategories()

  return (
    <div className="w-screen border-t border-ui-border-base">
      <div className="flex flex-col content-container">
        <div className="flex flex-col items-start justify-between py-40 gap-y-6 xsmall:flex-row">
          <div>
            <Link
              href="/"
              className="uppercase txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base"
            >
              Pahadi Street
            </Link>
          </div>

          <div className="grid grid-cols-3 text-small-regular gap-x-10 md:gap-x-16">
            {/* {product_categories && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <Link
                          className={clsx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                        {children && (
                          <ul className="grid grid-cols-1 gap-2 ml-3">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    className="hover:text-ui-fg-base"
                                    href={`/${child.handle}`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )} */}

            {collections && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clsx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Help</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Store Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full mb-16 text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Gupta Traders. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
