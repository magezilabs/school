'use client';
import { useRouter } from 'next/navigation';
const ErrorPage: React.FC = () => {
  const router = useRouter();
  
  const handleRetry = () => {
    router.push('/'); // Redirects user back to the homepage
  };

  return (
    <div className="error-page my-60 text-center text-2xl">
      <h1>Cornerstone says Something went wrong</h1>
      <p>But we are working on it. Please we are sorry.</p>
      <button onClick={handleRetry} className="retry-button text-green-500 hover:z-10">Try Again</button>
    </div>
  );
};

export default ErrorPage;
