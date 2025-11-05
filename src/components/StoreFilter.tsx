import { Button } from "@/components/ui/button";
import { Package, ShoppingBag, Store } from "lucide-react";

interface StoreFilterProps {
  activeStore: string;
  onStoreChange: (store: string) => void;
}

const stores = [
  { id: "all", name: "All Stores", icon: Package },
  { id: "amazon", name: "Amazon", icon: ShoppingBag },
  { id: "myntra", name: "Myntra", icon: Store },
  { id: "meesho", name: "Meesho", icon: Package },
];

export const StoreFilter = ({ activeStore, onStoreChange }: StoreFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {stores.map((store) => {
        const Icon = store.icon;
        return (
          <Button
            key={store.id}
            variant={activeStore === store.id ? "default" : "outline"}
            onClick={() => onStoreChange(store.id)}
            className="gap-2 transition-all"
          >
            <Icon className="w-4 h-4" />
            {store.name}
          </Button>
        );
      })}
    </div>
  );
};
