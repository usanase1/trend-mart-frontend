'use client';

import { Eye, Trash2 } from 'lucide-react';

const users = [
  { id: 1, name: 'John B', address: 'Kigali', email: 'john23@gmail.com', phone: '0788001122' },
  { id: 2, name: 'Alex G', address: 'Musanze', email: 'alex@gmail.com', phone: '0788223344' },
  { id: 3, name: 'John B', address: 'Huye', email: 'john@gmail.com', phone: '0788556677' },
  { id: 4, name: 'Alex Y', address: 'Rubavu', email: 'alex@gmail.com', phone: '0788990011' },
  { id: 5, name: 'Derick H', address: 'Kigali', email: 'derick@gmail.com', phone: '0788776655' },
  { id: 6, name: 'John R', address: 'Muhanga', email: 'john@gmail.com', phone: '0788332211' },
];

export default function UsersPage() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
      <div className="flex justify-end mb-4">
  <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-full w-fit">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 12 8.6c.41 0 .8.16 1.09.44l.06.06a2 2 0 1 1 2.83 2.83l-.06.06c-.27.27-.43.66-.43 1.07z"/>
    </svg>

    <div className="relative inline-block w-10 align-middle select-none">
      <div className="bg-gray-600 rounded-full w-10 h-4 flex items-center px-1">
        <div className="bg-white w-3 h-3 rounded-full shadow transform translate-x-0 transition-transform duration-300"></div>
      </div>
    </div>
  </div>
</div>

      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search Users"
          className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm w-full sm:w-64"
        />
        <div className="flex gap-2">
          <input type="date" className="bg-gray-800 border border-gray-700 px-2 py-1 rounded text-sm" />
          <input type="date" className="bg-gray-800 border border-gray-700 px-2 py-1 rounded text-sm" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-800 text-gray-400">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.address}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.phone}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white p-1 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <span>
          Rows per page:{' '}
          <select className="bg-gray-900 border border-gray-700 rounded px-1 ml-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </span>
        <span>1–6 of 24</span>
      </div>
    </div>
  );
}
