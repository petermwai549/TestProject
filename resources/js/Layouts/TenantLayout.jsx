// Layouts/LandlordLayout.jsx
import LandlordNavbar from './Navigation/LandlordNavbar';
import LandlordFooter from './Navigation/LandlordFooter';
import { Head, Link, useForm,usePage } from '@inertiajs/react';

function TenantLayout({ children }) {
  const { tenant } = usePage().props; // Access tenant from shared data
  return (
    <div className="min-h-screen bg-white ">
      <LandlordNavbar />
      <main>{children}</main>
      <LandlordFooter />
    </div>
  );
}

export default TenantLayout;