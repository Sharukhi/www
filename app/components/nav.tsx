import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  'http://photos.sharukhi.xyz/': {
    name: 'Photos',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-2 mb-[-20px] fade md:overflow-auto scroll-pr-6 md:relative border-[#e0e0e0] dark:border-[#222222] border-2 rounded-lg"
          id="nav"
        >
          <div className="flex items-center">
            <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="m-2"
            >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 7.75h-12m6-6v12m-3.5-2.5l7-7m0 7l-7-7"/>
            </svg>
            </a>
          </div>
          <div className="flex flex-row space-x-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}