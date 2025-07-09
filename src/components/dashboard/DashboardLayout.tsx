
import InfoCard from "./InfoCard";
import ProfileCard from "./ProfileCard";
import PaymentCard from "./PaymentCard";
import RecentOrdersTable from "./RecentOrdersTable";
import { Orders } from "./RecentOrdersTable";



export const mockOrders: Orders[] = [
  {
    id: "123456",
    status: "COMPLETED" as const,
    date: "July 6, 2025",
    total: "$219.00",
    items: 2,
  },
  {
    id: "123457",
    status: "IN PROGRESS" as const,
    date: "July 5, 2025",
    total: "$89.99",
    items: 1,
  },
  {
    id: "123458",
    status: "CANCELED" as const,
    date: "July 2, 2025",
    total: "$149.99",
    items: 3,
  },
  {
    id: "123459",
    status: "COMPLETED" as const,
    date: "June 28, 2025",
    total: "$299.00",
    items: 4,
  },
];


export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
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

        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Payment Option</h4>
            <button className="text-blue-600 hover:underline text-sm">Add Card →</button>
          </div>
          <div className="flex gap-4">
            <PaymentCard name="Kevin Gilbert" last4="3814" amount="$95,400.00" type="visa" />
            <PaymentCard name="Kevin Gilbert" last4="1761" amount="$87,583.00" type="mastercard" />
            

          </div>
          <RecentOrdersTable orders={mockOrders} showLimit={3} />
        </div>
      </main>
    </div>
  );
}
