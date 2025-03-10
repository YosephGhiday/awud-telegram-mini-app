import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/css/wind.css";
import App from "./App.tsx";
import { SpinnerProvider } from "@/context/SpinnerContext.tsx";
import { ModalProvider } from "@/context/ModalContext.tsx";
import { AuthProvider } from "@/context/AuthContext.tsx";
import RenderModal from "@/components/RenderModal.tsx";
import RenderSpinner from "@/components/RenderSpinner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpinnerProvider>
      <ModalProvider>
        <AuthProvider>
          <RenderSpinner />
          <RenderModal />
          <App />
        </AuthProvider>
      </ModalProvider>
    </SpinnerProvider>
  </StrictMode>
);
