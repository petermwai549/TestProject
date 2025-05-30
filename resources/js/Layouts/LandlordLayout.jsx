// Layouts/LandlordLayout.jsx
import LandlordNavbar from './Navigation/LandlordNavbar';
import LandlordFooter from './Navigation/LandlordFooter';

function TenantLayout({ children }) {
  return (
    <div className="min-h-screen bg-white ">
      <LandlordNavbar />
      <main>{children}</main>
      <LandlordFooter />
    </div>
  );
}

export default TenantLayout;