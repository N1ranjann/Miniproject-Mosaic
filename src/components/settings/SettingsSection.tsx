import { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div className="metric-card">
      <h3 className="section-title">{title}</h3>
      <div className="divide-y divide-border">
        {children}
      </div>
    </div>
  );
}
