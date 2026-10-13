import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
);
