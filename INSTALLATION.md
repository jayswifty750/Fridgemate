# Installation Guide

This guide explains how to set up and run the FridgeMate mobile application locally.

## Prerequisites

Before getting started, make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/go) on your iOS or Android device
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

## 1. Clone the Repository

Open your terminal and clone the repository:

```bash
git clone https://github.com/jayswifty750/Fridgemate.git
```

Navigate into the project directory:

```bash
cd Fridgemate/fridgemate
```

## 2. Install Dependencies

Install the required project dependencies:

```bash
npm install
```

## 3. Start the Development Server

Start the Expo development server:

```bash
npx expo start
```

To clear the development cache if necessary:

```bash
npx expo start --clear
```

## 4. Open the Application

Once the development server starts:

1. Make sure your computer and mobile device are connected to the same Wi-Fi network.
2. Open Expo Go on your mobile device.
3. Scan the QR code displayed in your terminal.
4. Wait for FridgeMate to load.

**Note:** Use an Expo Go version compatible with the Expo SDK specified in `package.json`. If your installed Expo Go version does not support the project's SDK, you may need a compatible development environment.

## Troubleshooting

### Dependencies are missing

If the application fails to start because of missing dependencies, run:

```bash
npm install
```

### Expo cache issues

Try restarting the development server with:

```bash
npx expo start --clear
```

### Connection problems

- Confirm that both devices are connected to the same Wi-Fi network.
- Temporarily disable VPN connections.
- Try restarting the Expo development server.

### Dependency compatibility issues

Check the installed dependencies using:

```bash
npx expo-doctor
```

For additional information, visit the [Expo Documentation](https://docs.expo.dev/).

---

**Project:** FridgeMate  
**Repository:** [GitHub - FridgeMate](https://github.com/jayswifty750/Fridgemate)