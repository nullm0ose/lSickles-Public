import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground">
      <header className="w-full">
        <Header />
      </header>

      <main className="flex-1 w-full">
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 max-w-[100vw] mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}