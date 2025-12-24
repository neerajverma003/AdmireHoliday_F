import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    
    server: {
      host: true,            // allow network access
      allowedHosts: ['.loca.lt']  // allow any LocalTunnel hostname
    },
    // Explicitly define the env variables
    define: {
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL)
    }
  };
});