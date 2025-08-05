import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}