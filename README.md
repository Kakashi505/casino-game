# Crytpo Casino Scissors, Crash, Mines, Turtle, Plinko, Dice, Slot Game

A modern cryptocurrency gaming platform supporting multiple blockchains and featuring various exciting games.

## 🎮 Supported Games

- **Scissors Game**: Classic multiplayer scissors game
- **Crash Game**: Multiplayer crash betting game
- **Mines**: Strategic mining game
- **Turtle Race**: Multiplayer racing game
- **Plinko**: Classic plinko betting game
- **Dice**: Traditional dice rolling game
- **Slot**: Classic slot machine game

## 💰 Supported Cryptocurrencies

- Bitcoin (BTC)
- Ethereum (ETH)
- Binance Smart Chain (BSC)
- Solana (SOL)
- USDT (Multiple chains)

## 🏗 Project Structure

The project is divided into three main components:

### Frontend (Port: 8800)

- User interface for games
- Wallet integration
- Real-time game updates
- User dashboard

### Admin Panel (Port: 9000)

- Game management
- User management
- Transaction monitoring
- Platform statistics

### Backend Services

Multiple microservices architecture:

- Main Server (Port: 5000)
- Admin Service (Port: 6100)
- Scissors Service (Port: 5200)
- User Chat Service (Port: 4900)
- Management Service (Port: 4000)
- Other game-specific services

## 🚀 Getting Started

### Prerequisites

- Node.js v16 (Backend)
- Node.js v14 (Frontend & Admin)
- MongoDB
- Crypto wallet (MetaMask, TrustWallet, etc.)

### Backend Setup

```bash
cd backend
npm install

# Start individual services
npm start              # Main server
npm run scissors       # Scissors game service
npm run crash         # Crash game service
npm run chatroom      # Chat service
npm run manage        # Management service
# ... other services
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Admin Panel Setup

```bash
cd admin
npm install
npm start
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in each directory (backend, frontend, admin) with appropriate configurations:

```env
# Backend .env example
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
TATUM_API_KEY=your_tatum_api_key
WEB3_PROVIDER=your_web3_provider_url
```

## 🔐 Security Features

- JWT authentication
- 2FA support
- Secure wallet integration
- Rate limiting
- DDoS protection

## 💻 Technical Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **Blockchain Integration**: Web3.js, Ethers.js, TronWeb
- **Payment Processing**: Tatum

## 🌐 API Integration

The platform integrates with multiple blockchain networks through:

- Web3 providers
- Tatum API
- Native blockchain nodes

## 📦 Features

- Multi-currency wallet support
- Real-time game updates
- Live chat system
- User authentication
- Transaction history
- Game history
- Admin dashboard
- Analytics and reporting
- Automated payout system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📝 License

This project is licensed under the ISC License.
