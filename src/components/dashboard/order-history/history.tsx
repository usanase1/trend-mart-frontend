import RecentOrdersTable from "../RecentOrdersTable";
import { mockOrders } from "../mockOrders";

export default function OrderHistory(){
return(
    <RecentOrdersTable orders={mockOrders}/>
)
}