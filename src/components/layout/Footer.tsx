export default function Footer() {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="w-full bg-neutral-900">
        <div className="py-6 border-t border-neutral-700 container">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <p className="text-xs text-neutral-400">© 2025 CV. Laksana.</p>
            </div>
            {/* End Col */}

            {/* List */}
            <ul className="flex flex-wrap items-center">
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs underline hover:decoration-2 focus:outline-hidden focus:decoration-2 text-neutral-500 hover:text-neutral-400" href="#">
                  X (Twitter)
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs underline hover:decoration-2 focus:outline-hidden focus:decoration-2 text-neutral-500 hover:text-neutral-400" href="#">
                  Dribbble
                </a>
              </li>
              <li className="inline-block pe-4 text-xs">
                <a className="text-xs underline-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 text-neutral-500 hover:text-neutral-400" href="#">
                  Github
                </a>
              </li>
              <li className="inline-block">
                {/* Dark Mode */}
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-theme-click-value="dark"
                >
                  <span className="sr-only">Dark</span>
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-theme-click-value="light"
                >
                  <span className="sr-only">Light</span>
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>
                {/* End Dark Mode */}
              </li>
            </ul>
            {/* End List */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
}
