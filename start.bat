@echo off
REM Portfolio Website Startup Script for Windows
REM This script installs dependencies and starts the development server

echo.
echo Starting Renn Valo Portfolio Website...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install Node.js first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo npm version:
npm --version
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Start the server
echo Starting server on http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev
