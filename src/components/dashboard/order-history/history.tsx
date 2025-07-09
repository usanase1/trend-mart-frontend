import RecentOrdersTable from "../RecentOrdersTable";
import { mockOrders } from "../DashboardLayout";

export default function OrderHistory(){
return(
    <RecentOrdersTable orders={mockOrders}/>
)
}