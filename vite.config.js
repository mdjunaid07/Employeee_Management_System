import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  
  base: "Employee_Management_System", // Replace with your actual GitHub repo name
  plugins: [react()],
})
