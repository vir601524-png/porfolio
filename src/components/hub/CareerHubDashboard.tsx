import { auth } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function CareerHubDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      <h1 className="text-3xl font-bold">Virginia Career Intelligence Hub</h1>
      <p>Welcome to your professional control center.</p>
    </div>
  );
}
