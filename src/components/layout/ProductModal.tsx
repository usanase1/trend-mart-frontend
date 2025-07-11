"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ProductModalProps } from "@/types/modal";

export default function ProductModal({
  isOpen,
  onClose,
  title,
  icon,
  items,
  showQuantity = false,
  showSubtotal = false,
  viewPageHref,
  emptyMessage,
  onIncrement,
  onDecrement,
  onRemove,
  onActionClick,
  actionButtonText,
  totalAmount,
}: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      <div className="fixed top-4 right-4 w-full max-w-sm bg-white rounded-lg shadow-xl z-50">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-bold text-lg">
              {title} ({items.length})
            </h3>
          </div>
          <Button onClick={onClose} variant="outline" size="sm">
            <X size={20} />
          </Button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">{emptyMessage}</div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 border-b pb-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>

                    {showQuantity && onIncrement && onDecrement && (
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() => onDecrement(item.id)}
                            variant="outline"
                            size="sm"
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            onClick={() => onIncrement(item.id)}
                            variant="outline"
                            size="sm"
                          >
                            +
                          </Button>
                        </div>
                        <span className="font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    )}

                    {onActionClick && (
                      <Button
                        onClick={() => onActionClick(item)}
                        className="mt-2 bg-orange-500 text-white hover:bg-orange-600 text-xs px-3 py-1"
                      >
                        {actionButtonText}
                      </Button>
                    )}

                    <Button
                      onClick={() => onRemove(item.id)}
                      variant="outline"
                      size="sm"
                      className="mt-2 text-red-500"
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border-t flex flex-col gap-3">
          {showSubtotal && (
            <div className="flex justify-between font-bold text-lg mb-2">
              <span>Sub-Total:</span>
              <span>${totalAmount?.toFixed(2)} USD</span>
            </div>
          )}
          <Link
            href={viewPageHref}
            onClick={onClose}
            className="border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium text-center"
          >
            VIEW {title.toUpperCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}
