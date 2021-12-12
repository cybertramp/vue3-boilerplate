import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  server:{
    proxy:{
      /*
       If you want to use proxy for development
       Then use below options
      */ 

      // '/api':{
      //   'target':'http://sample:port',
      //   changeOrigin: true,
      //   secure: false,
      // }
    },
  }
})
