# FridgeMate – Troubleshooting Guide

This guide covers common issues you may encounter when setting up or running FridgeMate.

## 1. Installation Issues

### Dependencies are missing

**Problem:** The application reports missing packages or dependencies.

**Solution:**

Run the following command from the mobile application directory:

```bash
npm install
```

## 2. Expo Development Server Issues

### Development server fails to start

**Problem:** Expo does not start correctly.

**Solution:**

1. Navigate to the mobile application directory.
2. Run:

```bash
npx expo start --clear
```

This clears the Expo development cache and restarts the server.

### Expo Go compatibility issues

**Problem:** Expo Go reports that the project is incompatible with the installed version.

**Solution:**

- Check the Expo SDK version specified in `package.json`.
- Make sure your development environment supports that SDK version.
- Run `npx expo-doctor` to check for dependency compatibility issues.

## 3. Network and Connection Issues

### QR code fails to connect

**Problem:** Expo Go cannot connect to the development server.

**Solution:**

- Confirm your computer and mobile device are connected to the same Wi-Fi network.
- Temporarily disable any VPN connection.
- Restart the Expo development server.

## 4. Dependency Compatibility Issues

**Problem:** Packages are outdated or incompatible with the installed Expo SDK.

**Solution:**

Run:

```bash
npx expo install --fix
```

Then check the project:

```bash
npx expo-doctor
```

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Node.js Documentation](https://nodejs.org/docs/)

**Project:** FridgeMate  
**Repository:** https://github.com/jayswifty750/Fridgemate