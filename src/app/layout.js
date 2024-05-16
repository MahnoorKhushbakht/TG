import "./globals.css";
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header>
          <NavBar/>
        </header>
        <main style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <footer style={{ margintop: 'auto' }}>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}