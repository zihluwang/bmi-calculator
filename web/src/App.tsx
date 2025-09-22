import { Outlet, Link } from "react-router-dom"
import { useMemo, useEffect } from "react"
import { useTranslation } from "react-i18next"
import moment from "moment"
import LanguageSwitcher from "@/components/language-switcher"

/**
 * Main application component that serves as the root layout.
 * Uses React Router's Outlet to render child routes.
 */
export default function App() {
  const today = useMemo(() => moment(), [])
  const { t } = useTranslation()

  // Update document title when language changes
  useEffect(() => {
    document.title = t("app.pageTitle")
  }, [t])

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">{t("app.title")}</h1>
            </div>
            <nav className="flex items-center space-x-8">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {t("navigation.home")}
                </Link>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {t("navigation.about")}
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {t("navigation.contact")}
                </Link>
              </div>
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 h-full">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t flex-shrink-0">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            {t("app.copyright", { year: today.year() })}
          </p>
        </div>
      </footer>
    </div>
  )
}
