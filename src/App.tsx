import 'tailwindcss'
import Router from './routes/router'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
      <Router />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '10px 14px',
            backgroundColor: '#4c6ef5',
            color: '#f8f9fa'
          }
        }}
      />
    </>
  )
}
