import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { slugify } from '../utils/helpers';
import { navItemLength } from '../ecommerce.config';
import LayoutFooter from '../layouts/footer';
import LayoutHeader from '../layouts/header';

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    categories = categories.slice(0, navItemLength)
  }
  console.log("Layout:",categories)


  return (
    <div>

      {/* header */}
      <nav>
        <div className="flex justify-center">
          <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/">
                <a aria-label="Home">
                  <img src="/logo.png" alt="logo" width="90" height="28" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              <Link href="/">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  ">
                  Home
                  </p>
                </a>
              </Link>
              {
                categories.map((category, index) => (
                  <Link
                    href={`/category/${slugify(category)}`}
                    key={index}
                  >
                    <a aria-label={category}>
                      <p className="
                          sm:mr-8 sm:mb-0
                          mb-4 text-left text-smaller mr-4
                        ">
                        {
                        category.charAt(0).toUpperCase() + category.slice(1)
                        }
                        {
                          console.log('layout.js-category',category)
                        }
                      </p>
                    </a>
                  </Link>
                ))
              }
              <Link href="/categories">
                <a aria-label="All categories">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  ">
                  All
                  </p>
                </a>
              </Link>
            </div>
          </div>

        </div>
      </nav>
      
      {/* main content */}
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>

      <LayoutFooter />

      {/* <ToastContainer autoClose={3000} /> */}
    </div>
  )
}