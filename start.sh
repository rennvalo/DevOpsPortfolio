#!/bin/bash

# Portfolio Website Startup Script
# This script installs dependencies and starts the development server

echo "🚀 Starting Renn Valo Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the server
echo "🌐 Starting server on http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

npm run dev
