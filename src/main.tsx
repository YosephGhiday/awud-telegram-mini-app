import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/css/wind.css";
import { SpinnerProvider } from "@/context/SpinnerContext.tsx";
import { ModalProvider } from "@/context/ModalContext.tsx";
import { AuthProvider } from "@/context/AuthContext.tsx";
import RenderModal from "@/components/RenderModal.tsx";
import RenderSpinner from "@/components/RenderSpinner.tsx";
import { ToastContainer } from "react-toastify";
import { register } from "swiper/element/bundle";
import { SavingProvider } from "./context/SavingContext.tsx";

import App from "./App.tsx";

register();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpinnerProvider>
      <ModalProvider>
        <AuthProvider>
          <SavingProvider>
            <RenderSpinner />
            <RenderModal />
            <ToastContainer />
            <App />
          </SavingProvider>
        </AuthProvider>
      </ModalProvider>
    </SpinnerProvider>
  </StrictMode>
);
