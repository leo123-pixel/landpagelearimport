import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
    name: string;
};

type CartContextType = {
    items: CartItem[];
    toggleItem: (name: string) => void;
    isInCart: (name: string) => boolean;
    clearCart: () => void;
    drawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleItem = (name: string) => {
        setItems((prev) =>
            prev.some((i) => i.name === name)
                ? prev.filter((i) => i.name !== name)
                : [...prev, { name }]
        );
    };

    const isInCart = (name: string) => items.some((i) => i.name === name);

    const clearCart = () => setItems([]);

    return (
        <CartContext.Provider value={{ items, toggleItem, isInCart, clearCart, drawerOpen, setDrawerOpen }}>
            {children}
        </CartContext.Provider>
    );
};
