
import Sidebar from "./components/Sidebar";
import Navbar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
     <>
     <Navbar/>
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
    <Footer/>
    </>
  );
}
