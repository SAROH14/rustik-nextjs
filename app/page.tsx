import Link from "next/link";
import { JewlryCard } from "./ui/Product Card/Card";


export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold">Jewelry Store</h1>
        <p className="text-xl mt-4">Discover our latest collection</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sample Product */}
        <JewlryCard></JewlryCard>
        {/* Add more products here */}
      </div>
    </div>
  );
}
