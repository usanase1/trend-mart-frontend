import Sidebar from "./Sidebar";
import InfoCard from "./InfoCard";
import ProfileCard from "./ProfileCard";
import PaymentCard from "./PaymentCard";
import RecentOrdersTable from "./RecentOrdersTable";


const orders = [
  { id: '96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 05:18', total: '$1,500', items: 5 },
  { id: '71667167', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '$80', items: 11 },
  { id: '95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160', items: 3 },
];
export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-xl font-semibold m-3">Hello, Kevin</h2>
        <p className="text-sm text-gray-600 w-1/2 m-3">
          From your account dashboard, you can view <span className="text-blue-600 underline">Recent Orders</span>, manage{" "}
          <span className="text-blue-600 underline">Shipping and Billing Addresses</span> and edit your{" "}
          <span className="text-blue-600 underline">Password</span> and{" "}
          <span className="text-blue-600 underline">Account Details</span>.
        </p>

      
        <div className="flex flex-row">
        <div className="grid grid-cols-2 gap-4">
          <ProfileCard
            title="Account Info"
            name="Kevin Gilbert"
            email="kevin.gilbertgr@gmail.com"
            phone="+1-202-555-0118"
          />
          <ProfileCard
            title="Billing Address"
            name="Kevin Gilbert"
            email="kevin.gilbert@gmail.com"
            address="East Tejturi Bazar, Road No. 1320, Flat 5D, Dhaka-1200"
            phone="+1-202-555-0118"
          />
        </div>

          <div className="flex flex-col gap-4">
          <InfoCard title="Total Orders" value="154" color="bg-[#EAF6FE] text-blue-800" />
          <InfoCard title="Pending Orders" value="5" color="bg-[#FFF3EB] text-yellow-800" />
          <InfoCard title="Completed Orders" value="149" color="bg-[#EAF7E9] text-green-800" />
        </div>
        </div>

        {/* Payment section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Payment Option</h4>
            <button className="text-blue-600 hover:underline text-sm">Add Card →</button>
          </div>
          <div className="flex gap-4">
            <PaymentCard name="Kevin Gilbert" last4="3814" amount="$95,400.00" type="visa" />
            <PaymentCard name="Kevin Gilbert" last4="1761" amount="$87,583.00" type="mastercard" />
            

          </div>
          <RecentOrdersTable orders={orders} showLimit={3} />
        </div>
      </main>
    </div>
  );
}
