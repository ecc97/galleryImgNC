import LayoutComponent from "@/components/UI/layouts/Layout"

function Layout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <LayoutComponent>
      {children}
    </LayoutComponent>
  )
}

export default Layout
