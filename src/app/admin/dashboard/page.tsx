// app/admin/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<{ email: string, name :string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('admin');
    if (!stored) {
      router.push('/admin/login');
    } else {
      setAdmin(JSON.parse(stored));
    }
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
      {admin && <p className="text-gray-700">Logged in as: {admin.email}</p>}
    </div>
  );
}
