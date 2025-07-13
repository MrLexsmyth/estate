import React from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Optional: Add Admin Sidebar or Navbar */}
      <main className="min-h-screen bg-gray-100 p-4">
        {children}
      </main>
    </div>
  )
}
