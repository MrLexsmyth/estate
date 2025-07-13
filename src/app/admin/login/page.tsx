'use client';


import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../../../utils/axios';


interface AxiosError {
  response?: {
    data?: {
      msg?: string;
    };
  };
}

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/admin-login', form);

      // Save token and admin to localStorage
      localStorage.setItem('adminToken', res.data.token);
      localStorage.setItem('admin', JSON.stringify(res.data.admin));

      setMessage('Login successful!');
      router.push('/admin/dashboard'); // 👈 Redirect to admin dashboard
    } catch (err: unknown) {
      const error = err as AxiosError;
      setMessage(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="w-full h-[400px] flex flex-col md:flex-row">
     
     
      {/* Form section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 pt-16 md:pt-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-2 w-full mb-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border p-2 w-full mb-4"
          />

          <button type="submit" className="bg-[#00aeff] text-white px-4 py-2 rounded w-full">
            Login
          </button>

          <p className="mt-3 text-sm text-gray-700">{message}</p>
        </form>
      </div>
    </div>
  );
}
