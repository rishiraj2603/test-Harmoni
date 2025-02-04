export function DiscoverSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Discover Your Next Favorite Item</h2>
        <p className="mb-8">Browse our exclusive collection and find the perfect product tailored just for you.</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition-colors">Shop</button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">Learn More</button>
        </div>
      </div>
    </section>
  );
}
