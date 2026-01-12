import { LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Logout() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center transition-theme">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <LogOut className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Logged Out
        </h1>
        
        <p className="text-muted-foreground mb-8">
          You have been successfully logged out of MOSAIC.
        </p>
        
        <Link to="/">
          <Button className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
