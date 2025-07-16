export default function EditProfilePage() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-lg">
      <h1 className="text-xl font-semibold mb-4">Edit Profile</h1>
      <form className="space-y-4">
        <input className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="Full Name" />
        <input className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="Email" />
        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white">Save Changes</button>
      </form>
    </div>
  );
}