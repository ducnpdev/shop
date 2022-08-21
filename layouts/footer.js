
import Link from 'next/link';

const LayoutFooter = () => {
    return (
        <footer className="flex justify-center">
            <div className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300">
                <span className="block text-gray-700 text-xs">Copyright © 2021 JAMstack Ecommerce. All rights reserved.</span>
                <div className="
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          ">
                    <Link href="/admin">
                        <a aria-label="Admin panel">
                            <p className="text-sm font-semibold">Admins</p>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default LayoutFooter;