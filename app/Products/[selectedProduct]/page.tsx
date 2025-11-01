import TheHeader from "@/components/ui/theHeader";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function ItemPage({
  params,
}: {
  params: Promise<{ selectedProduct: string }>;
}) {
  const { selectedProduct } = await params;

  const product: Product = await fetch(
    `https://fakestoreapi.com/products/${selectedProduct}`
  ).then((res) => res.json());

  return (
    <div className="min-h-screen bg-[#393E46] text-[#F3F2EC]">
      <TheHeader />

      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain rounded shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#1E93AB]">{product.title}</h1>
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-[#F3F2EC]">{product.description}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm bg-[#1E93AB] text-[#F3F2EC] rounded">
            {product.category}
          </span>

          <button className="mt-6 px-6 py-3 bg-[#1E93AB] text-[#F3F2EC] font-bold rounded hover:bg-opacity-80 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
