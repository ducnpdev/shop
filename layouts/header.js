import Link from 'next/link';
import { slugify } from '../utils/helpers';


const LayoutHeader = ({ categories }) => {
  console.log('header.js: categories:',categories)

  return (
    <nav>
      <div className="flex justify-center">
        <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
          <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
            <Link href="/">å
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
                      {category.charAt(0).toUpperCase() + category.slice(1)}
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
  )
}

export default LayoutHeader;
