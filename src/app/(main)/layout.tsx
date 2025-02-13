import LayoutComponent from "@/components/UI/layouts/Layout"
import Navbar from "@/components/UI/organisms/navbar/Navbar"

function Layout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <LayoutComponent>
      <Navbar colorBg="secondary-navigation"/>
      {children}
    </LayoutComponent>
  )
}

export default Layout
