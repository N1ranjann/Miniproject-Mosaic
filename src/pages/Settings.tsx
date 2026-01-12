import { MainLayout } from "@/components/layout/MainLayout";
import { SettingsSection } from "@/components/settings/SettingsSection";
import { SettingsRow } from "@/components/settings/SettingsRow";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RotateCcw } from "lucide-react";

export default function Settings() {
  return (
    <MainLayout title="Settings">
      <div className="max-w-2xl space-y-6">
        {/* Appearance */}
        <SettingsSection title="Appearance">
          <SettingsRow
            label="Theme"
            description="Toggle between light and dark mode"
          >
            <ThemeToggle />
          </SettingsRow>
        </SettingsSection>

        {/* Store Settings */}
        <SettingsSection title="Store">
          <SettingsRow
            label="Active Store"
            description="Select the store to display data for"
          >
            <Select>
              <SelectTrigger className="w-48" id="store-selector">
                <SelectValue placeholder="Select store" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="placeholder" disabled>
                  No stores configured
                </SelectItem>
              </SelectContent>
            </Select>
          </SettingsRow>
        </SettingsSection>

        {/* Notifications */}
        <SettingsSection title="Notifications">
          <SettingsRow
            label="Push Notifications"
            description="Receive alerts for important events"
          >
            <Switch id="notification-toggle" />
          </SettingsRow>
          
          <SettingsRow
            label="Email Reports"
            description="Get weekly analytics summaries"
          >
            <Switch id="email-reports-toggle" />
          </SettingsRow>
        </SettingsSection>

        {/* Dashboard */}
        <SettingsSection title="Dashboard">
          <SettingsRow
            label="Reset Layout"
            description="Restore dashboard to default configuration"
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              id="reset-layout-btn"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </SettingsRow>
        </SettingsSection>
      </div>
    </MainLayout>
  );
}
