import { ShoppingCart, X, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "./CartContext";

const CartFloat = () => {
    const { items, toggleItem, clearCart, drawerOpen, setDrawerOpen } = useCart();

    const handleFinalize = () => {
        if (items.length === 0) return;

        const productList = items.map((i) => `- ${i.name}`).join("\n");
        const message = encodeURIComponent(
            `Olá! Tenho interesse nos seguintes produtos:\n${productList}\n\nGostaria de mais informações sobre disponibilidade e valores.`
        );
        window.open(`https://wa.me/595986110216?text=${message}`, "_blank");
        clearCart();
        setDrawerOpen(false);
    };

    if (!drawerOpen) return null;

    return (
        <div className="fixed inset-0 z-[60]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        <ShoppingCart size={20} />
                        Carrinho ({items.length})
                    </h2>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Fechar carrinho"
                        className="p-1 rounded-lg hover:bg-muted transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center text-muted-foreground py-12">
                            <ShoppingCart size={48} className="mx-auto mb-4 opacity-30" />
                            <p className="font-medium">Seu carrinho está vazio</p>
                            <p className="text-sm mt-1">Selecione produtos para continuar</p>
                        </div>
                    ) : (
                        <ul className="space-y-3">
                            {items.map((item) => (
                                <li
                                    key={item.name}
                                    className="flex items-center justify-between bg-card rounded-lg p-4 border border-border"
                                >
                                    <span className="font-medium text-sm">{item.name}</span>
                                    <button
                                        onClick={() => toggleItem(item.name)}
                                        aria-label={`Remover ${item.name}`}
                                        className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border space-y-3">
                    {items.length === 0 ? (
                        <button
                            disabled
                            className="w-full px-6 py-3.5 rounded-lg bg-muted text-muted-foreground font-bold text-sm cursor-not-allowed"
                        >
                            Selecione ao menos um produto
                        </button>
                    ) : (
                        <button
                            onClick={handleFinalize}
                            className="w-full px-6 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            Finalizar Pedido via WhatsApp
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartFloat;
