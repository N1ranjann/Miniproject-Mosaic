import { Shield } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-8 transition-theme">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="admin-badge">
          <Shield className="w-4 h-4" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}
