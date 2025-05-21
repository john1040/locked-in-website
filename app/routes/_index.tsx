import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h1 className="text-4xl font-bold">Locked In</h1>
      <p className="text-lg">A simple Pomodoro timer to help you stay focused.</p>
      <Link to="/privacy-policy">
        <Button>Privacy Policy</Button>
      </Link>
    </div>
  );
}
