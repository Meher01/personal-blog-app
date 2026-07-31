import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-pink-600 mb-4">Admin Dashboard 🛠️</h1>
      <p className="text-lg font-semibold text-pink-400">Choose an admin section to continue.</p>
      <br/>

      <div className="grid gap-5 md:grid-rows-3 pr-300 ">
        <Link
          href="/admin/addProduct"
          className="border border-black border-3 gap-3 font-medium px-3 py-2 hover:bg-pink-100" style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '5px', cursor: 'pointer' }}>
          <h2 className="text-2xl font-medium text-pink-600">Add Product</h2>
          <p className="text-xl text-pink-400">Create a new blog entry.</p>
        </Link>

        <Link
          href="/admin/bloglist"
          className="border border-black border-3 gap-3 font-medium px-3 py-2 hover:bg-pink-100" style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '5px', cursor: 'pointer' }}>
          <h2 className="text-2xl font-medium text-pink-600">Blog List</h2>
          <p className="text-xl text-pink-400">View and manage existing blogs.</p>
        </Link>

        <Link
          href="/admin/subscriptions"
          className="border border-black border-3 gap-3 font-medium px-3 py-2 hover:bg-pink-100" style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '5px', cursor: 'pointer' }}>
          <h2 className="text-2xl font-medium text-pink-600">Subscriptions</h2>
          <p className="text-xl text-pink-400">Manage email subscribers.</p>
        </Link>
      </div>
    </div>
  );
}
