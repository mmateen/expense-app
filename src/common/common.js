const baseUrl = process.env.NODE_ENV === 'production' 
? 'https://expense-app-server-seven.vercel.app'
: 'http://localhost:4000';

export default baseUrl;