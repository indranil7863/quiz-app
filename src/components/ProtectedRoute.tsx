'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // User is not logged in, redirect to login
      router.replace('/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // Don't show the protected content until we've verified the token
  if (!authorized) return <p>Loading...</p>; 

  return <>{children}</>;
}