
import { useState } from 'react';
import { Head } from '@inertiajs/react';
import LandlordLayout from '@/Layouts/LandlordLayout';

export default function LandlordWelcome() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LandlordLayout>
      <Head title="Welcome" />
        {/* ==================== HERO SECTION ==================== */}
        <section className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                <div className="flex items-center space-x-2 mb-6">
                    <span className="px-3 py-1 bg-purple-100 text-[#2719FF] text-sm rounded-full">New Release</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Streamline Sales,<br />
                    Maximize Growth
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Unlock the full potential of your business with our comprehensive ecommerce management platform. From inventory tracking to sales analytics, we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="px-8 py-3 bg-[#2719FF] text-white rounded-lg hover:bg-[#1f14e6] font-medium">
                    Start Free Trial
                    </button>
                    <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                    Watch Demo
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="text-sm text-gray-600">
                    <span className="font-medium">2000+</span> happy customers
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2">
                <div className="relative">
                    <img src="https://ext.same-assets.com/3931784768/1634150553.png" alt="Dashboard Preview" className="w-full h-auto rounded-2xl shadow-2xl" />
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* ==================== WHAT SETS US APART SECTION ==================== */}
        <section className="px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines powerful features with intuitive design to deliver unmatched value for your business.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Experience blazing-fast performance with our optimized infrastructure.</p>
                </div>
                <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#2719FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Get instant insights into your business performance with live data.</p>
                </div>
                <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Integration</h3>
                <p className="text-gray-600">Seamlessly connect with all your favorite tools and platforms.</p>
                </div>
                <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Friendly Interface</h3>
                <p className="text-gray-600">Intuitive design that makes complex tasks simple and enjoyable.</p>
                </div>
            </div>
            </div>
        </section>

        {/* ==================== SIMPLIFY YOUR WORKFLOW SECTION ==================== */}
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Simplify Your Workflow</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Streamline your operations with our comprehensive suite of tools designed to eliminate complexity and boost productivity.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2719FF] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Orders</h3>
                        <p className="text-gray-600">Monitor all orders from placement to delivery with real-time updates.</p>
                    </div>
                    </div>
                    <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2719FF] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Inventory</h3>
                        <p className="text-gray-600">Keep track of stock levels and automate reordering processes.</p>
                    </div>
                    </div>
                    <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2719FF] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                        <p className="text-gray-600">Gain insights with comprehensive reporting and data visualization.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <span className="text-sm text-gray-500">Last 7 days</span>
                    </div>
                    <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-900">Order #12345 completed</span>
                        </div>
                        <span className="text-sm text-gray-500">2h ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-900">New customer registered</span>
                        </div>
                        <span className="text-sm text-gray-500">4h ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-900">Low stock alert</span>
                        </div>
                        <span className="text-sm text-gray-500">6h ago</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* ==================== STREAMLINE YOUR OPERATIONS SECTION ==================== */}
        <section className="px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Streamline Your Operations</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful tools designed to optimize every aspect of your ecommerce business.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Analytics</h3>
                <p className="text-gray-600 mb-4">Track your sales performance with detailed analytics and reporting tools.</p>
                <button className="text-[#2719FF] font-medium hover:text-[#1f14e6]">Learn More →</button>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inventory Management</h3>
                <p className="text-gray-600 mb-4">Maintain optimal stock levels with automated inventory tracking and alerts.</p>
                <button className="text-[#2719FF] font-medium hover:text-[#1f14e6]">Learn More →</button>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Management</h3>
                <p className="text-gray-600 mb-4">Build stronger relationships with comprehensive customer data and insights.</p>
                <button className="text-[#2719FF] font-medium hover:text-[#1f14e6]">Learn More →</button>
                </div>
            </div>
            </div>
        </section>

        {/* ==================== INTEGRATIONS SECTION ==================== */}
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expand Your Reach with Integrations</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Connect with your favorite tools and platforms to create a seamless workflow that works for your business.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">Shopify</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">Stripe</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">PayPal</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">WooCommerce</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">Mailchimp</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">Slack</span>
                    </div>
                </div>
                <button className="px-6 py-3 bg-[#2719FF] text-white rounded-lg hover:bg-[#1f14e6] font-medium">
                    View All Integrations
                </button>
                </div>
                <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Integration Dashboard</h3>
                    <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Shopify Store</span>
                        </div>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Connected</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Stripe Payments</span>
                        </div>
                        <span className="text-xs text-[#2719FF] bg-purple-100 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Email Marketing</span>
                        </div>
                        <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Syncing</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* ==================== PRICING SECTION ==================== */}
        <section className="px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Plans for Every Need</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business size and requirements.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-1">$0</div>
                    <p className="text-gray-600">Perfect for getting started</p>
                </div>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 100 orders/month
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic analytics
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email support
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Core integrations
                    </li>
                </ul>
                <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                    Get Started
                </button>
                </div>
                <div className="bg-[#2719FF] text-white rounded-2xl p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Pro</h3>
                    <div className="text-3xl font-bold mb-1">$49</div>
                    <p className="text-blue-100">Perfect for growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 1,000 orders/month
                    </li>
                    <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced analytics
                    </li>
                    <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support
                    </li>
                    <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All integrations
                    </li>
                    <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom reporting
                    </li>
                </ul>
                <button className="w-full px-6 py-3 bg-white text-[#2719FF] rounded-lg hover:bg-gray-50 font-medium">
                    Start Free Trial
                </button>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-1">Custom</div>
                    <p className="text-gray-600">For large-scale operations</p>
                </div>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited orders
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Enterprise analytics
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 phone support
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom integrations
                    </li>
                    <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated account manager
                    </li>
                </ul>
                <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                    Contact Sales
                </button>
                </div>
            </div>
            </div>
        </section>

        {/* ==================== FAQ SECTION ==================== */}
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">All Your Questions, Answered</h2>
                <p className="text-xl text-gray-600">
                Find answers to the most common questions about our platform.
                </p>
            </div>
            <div className="space-y-4">
                {[
                {
                    question: "What kind of analytics does DriFlux provide?",
                    answer: "Our platform provides comprehensive analytics including sales performance, customer behavior, inventory tracking, and revenue insights with real-time dashboards and custom reports."
                },
                {
                    question: "Is there a limit to the number of users?",
                    answer: "User limits depend on your plan. The Free plan supports 1 user, Pro supports up to 5 users, and Enterprise offers unlimited users with advanced permissions management."
                },
                {
                    question: "How does DriFlux help with inventory management?",
                    answer: "DriFlux offers automated inventory tracking, low stock alerts, demand forecasting, and integration with major suppliers to streamline your inventory management process."
                },
                {
                    question: "Can I customize my dashboard?",
                    answer: "Yes! Our platform offers fully customizable dashboards where you can add, remove, and rearrange widgets to match your specific business needs and preferences."
                },
                {
                    question: "Does DriFlux support multi-store management?",
                    answer: "Absolutely! You can manage multiple stores from a single dashboard, with consolidated reporting and cross-store inventory management capabilities."
                }
                ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200">
                    <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                    onClick={() => toggleFaq(index)}
                    >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>
                    {openFaq === index && (
                    <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* ==================== FINAL CTA SECTION ==================== */}
        <section className="px-6 py-16 bg-[#2719FF]">
            <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                    Take Control of Your E-Commerce Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Join thousands of businesses that trust DriFlux to power their ecommerce operations. Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-3 bg-white text-[#2719FF] rounded-lg hover:bg-gray-50 font-medium">
                    Start Free Trial
                    </button>
                    <button className="px-8 py-3 border border-blue-400 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Schedule Demo
                    </button>
                </div>
                </div>
                <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-blue-100">Total Revenue</span>
                        <span className="text-white font-semibold">$124,590</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-blue-100">Orders This Month</span>
                        <span className="text-white font-semibold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-blue-100">Growth Rate</span>
                        <span className="text-green-300 font-semibold">+23.5%</span>
                    </div>
                    <div className="mt-6 h-2 bg-white/20 rounded-full">
                        <div className="h-2 bg-white rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-blue-100 text-sm">75% to monthly goal</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
      </LandlordLayout>
    );
}
