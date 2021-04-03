import Header from "./Header/Header"

const Layout = ({children}) => { 
   return (
      <div className="min-h-screen container mx-auto">
         <Header />
         {children}
      </div>
   )
}

export default Layout