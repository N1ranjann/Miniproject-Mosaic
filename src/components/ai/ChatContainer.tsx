import { MessageSquare } from "lucide-react";

export function ChatContainer() {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-primary/10">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-medium text-foreground">Chat Assistant</h3>
      </div>
      
      <div className="placeholder-container h-96" id="chat-container">
        <div className="text-center">
          <MessageSquare className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            Chat widget will be embedded here
          </p>
        </div>
      </div>
    </div>
  );
}
