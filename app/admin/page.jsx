import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-pink-600 mb-4">Admin Dashboard 🛠️</h1>
      <p className="text-lg font-bold">Choose an admin section to continue.</p>

      <div className="grid gap-5 mt-6 md:grid-cols-3">
        <Link
          href="/admin/addProduct"
          className="border border-black gap-3 font-medium rounded-xl p-6 hover:bg-pink-100 transition"
          style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', cursor: 'pointer' }}>
          <h2 className="text-lg font-bold">Add Product</h2>
          <p className="text-md font-bold">Create a new blog entry.</p>
        </Link>

        <Link
          href="/admin/bloglist"
          className="border border-black gap-3 font-medium rounded-xl p-6 hover:bg-pink-100 transition"
          style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', cursor: 'pointer' }}>
          <h2 className="text-lg font-bold">Blog List</h2>
          <p className="text-md font-bold">View and manage existing blogs.</p>
        </Link>

        <Link
          href="/admin/subscriptions"
          className="border border-black gap-3 font-medium rounded-xl p-6 hover:bg-pink-100 transition"
          style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', cursor: 'pointer' }}>
          <h2 className="text-lg font-bold">Subscriptions</h2>
          <p className="text-md font-bold">Manage email subscribers.</p>
        </Link>
      </div>
    </div>
  );
}
