import { CartItem } from "./cart";

export type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  items: CartItem[];
  showQuantity?: boolean;
  showSubtotal?: boolean;
  viewPageHref: string;
  emptyMessage: string;
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
  onRemove: (id: string) => void;
  onActionClick?: (item: CartItem) => void;
  actionButtonText?: string;
  totalAmount?: number;
};
