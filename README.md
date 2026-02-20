# 🔐 Auth Flow Practice

A modern **React Native + Expo** mobile application demonstrating authentication flow patterns. Built with **TypeScript**, **React Navigation**, **Zustand**, and **NativeWind (Tailwind CSS)** for a seamless authentication experience.

---

## 💻 Source Code

🔗 **GitHub Repository:** [https://github.com/aniltanriverdiler/auth-flow-practice.git](https://github.com/aniltanriverdiler/auth-flow-practice.git)

---

## ✨ Features

### 🔐 Authentication
- ✅ **Login Screen** – Beautiful login interface with email and password inputs
- ✅ **Protected Routes** – Automatic navigation based on authentication state
- ✅ **State Management** – Zustand store for managing user authentication state
- ✅ **Social Login** – Google and Apple sign-in buttons (UI ready)
- ✅ **Password Visibility Toggle** – Show/hide password functionality
- ✅ **Forgot Password** – Password recovery option

### 🎨 Design & UI
- 🌈 **Modern UI** – Styled with **NativeWind (Tailwind CSS)** for React Native
- ✨ **Blur Effects** – Beautiful blur backgrounds using Expo Blur
- 📱 **Responsive Design** – Optimized for iOS and Android devices
- 🎨 **Dark Theme Support** – Automatic theme switching based on system preferences
- 🖼️ **Background Images** – Grid pattern background for visual appeal
- 🎯 **Safe Area Handling** – Proper safe area support for all devices

### 📱 Navigation
- 🧭 **React Navigation** – Static navigation configuration
- 🔄 **Conditional Navigation** – Auth stack vs main app navigation
- 📋 **Bottom Tab Navigator** – Tab-based navigation for main app
- 🗺️ **Deep Linking** – Automatic deep link and URL handling
- 🚫 **404 Handling** – NotFound screen for unmatched routes

### 📱 Mobile Features
- 📱 **Cross-Platform** – Works on both iOS and Android
- ⚡ **Fast Performance** – Optimized React Native components
- 🎯 **Native Feel** – Uses native components for authentic mobile experience
- 🔄 **State Persistence** – Auth state management with Zustand
- 🌓 **Theme Support** – Light/dark mode based on system appearance

---

## 📂 Project Structure

```
auth-flow-practice/
├─ src/
│  ├─ navigation/
│  │  ├─ screens/
│  │  │  ├─ auth/
│  │  │  │  └─ LoginScreen.tsx      # Login screen component
│  │  │  ├─ Home.tsx                # Home screen
│  │  │  ├─ Profile.tsx             # Profile screen
│  │  │  ├─ Settings.tsx            # Settings screen
│  │  │  ├─ Updates.tsx             # Updates screen
│  │  │  └─ NotFound.tsx            # 404 screen
│  │  └─ index.tsx                  # Navigation configuration
│  ├─ store/
│  │  └─ auth.ts                     # Zustand auth store
│  ├─ constants.ts                   # App constants (colors, etc.)
│  ├─ types.d.ts                     # TypeScript type definitions
│  └─ App.tsx                        # Root app component
├─ assets/                           # Static assets (images, icons)
├─ app.json                          # Expo configuration
├─ package.json                      # Dependencies and scripts
├─ tsconfig.json                     # TypeScript configuration
├─ tailwind.config.js                # Tailwind CSS configuration
├─ metro.config.js                   # Metro bundler configuration
├─ babel.config.js                   # Babel configuration
├─ global.css                        # Global styles
└─ README.md                         # Project documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`) or use `npx expo`
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Expo Development Build (required - cannot run with Expo Go)

### Installation Steps

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/aniltanriverdiler/auth-flow-practice.git
cd auth-flow-practice
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Start the development server:**
```bash
npm start
# or
npx expo start --dev-client
```

4️⃣ **Run on your device:**
- **iOS:** Press `i` in the terminal or run `npm run ios`
- **Android:** Press `a` in the terminal or run `npm run android`
- **Web:** Press `w` in the terminal or run `npm run web`

### Available Scripts

- `npm start` - Start Expo development server with dev client
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser

---

## 🏗️ Tech Stack

- ⚛️ **React Native 0.81.4** – Cross-platform mobile framework
- 🟦 **TypeScript ~5.9.2** – Type-safe development
- ⚛️ **React 19.1.0** – Latest React version
- 🚀 **Expo ~54.0.7** – Development platform and tooling
- 🎨 **NativeWind ^4.2.1** – Tailwind CSS for React Native
- 🎨 **Tailwind CSS 3.4.19** – Utility-first CSS framework
- 🧭 **React Navigation ^7.1.17** – Navigation library
  - `@react-navigation/native-stack` – Native stack navigator
  - `@react-navigation/bottom-tabs` – Bottom tab navigator
  - `@react-navigation/elements` – Navigation elements
- 🗃️ **Zustand ^5.0.9** – Lightweight state management
- ✨ **Expo Blur ~15.0.8** – Blur effects
- 🛡️ **React Native Safe Area Context ^5.4.0** – Safe area handling
- ⚡ **React Native Reanimated ~4.1.1** – High-performance animations
- 📦 **@expo/vector-icons** – Icon library (Feather, FontAwesome6 icons)
- 🔗 **Expo Linking ~8.0.8** – Deep linking support

---

## 🎮 How to Use

1️⃣ **Start the App** – Run `npm start` to launch the Expo development server  
2️⃣ **Open on Device** – Use Expo Development Build (iOS/Android) or simulator  
3️⃣ **Login Screen** – Enter your credentials:
   - Email address
   - Password (with show/hide toggle)
   - Or use social login buttons (Google/Apple)
4️⃣ **Authentication** – Tap "Sign in" button to authenticate  
5️⃣ **Protected Routes** – After login, navigate to protected screens  
6️⃣ **Logout** – Use logout button to return to login screen  

---

## 📱 Screens

### 🔐 Login Screen

- **Email Input** – Text input field with mail icon
- **Password Input** – Secure password field with show/hide toggle
- **Sign In Button** – Primary action button for authentication
- **Forgot Password** – Password recovery option
- **Social Login** – Google and Apple sign-in buttons
- **Beautiful UI** – Blur effects and grid background pattern

### 🏠 Home Screen

- **Main Feed** – Primary content screen
- **Logout Button** – Sign out functionality
- **Tab Navigation** – Bottom tab bar integration

### 📄 Other Screens

- **Profile** – User profile screen
- **Settings** – App settings screen
- **Updates** – Updates/notifications screen
- **NotFound** – 404 error screen for unmatched routes

---

## 🔄 Authentication Flow

The app implements a conditional navigation pattern:

1. **Unauthenticated State** – Shows `AuthNavigation` with login screen
2. **Authenticated State** – Shows `Navigation` with protected routes
3. **State Management** – Zustand store manages user authentication state
4. **Automatic Navigation** – App automatically switches between auth and main navigation based on auth state

### Auth Store Structure

```typescript
{
  user: { token: string } | null,
  setUser: (user: User) => void
}
```

---

## 📌 Technical Notes

- **Cross-Platform** – Built with React Native for iOS and Android support
- **Expo SDK** – Uses Expo SDK 54 for development and deployment
- **NativeWind Styling** – Tailwind CSS utilities for React Native components
- **TypeScript** – Full type safety throughout the application
- **Static Navigation** – React Navigation static configuration for type safety
- **State Management** – Zustand for lightweight and efficient state management
- **Blur Effects** – Expo Blur for modern UI effects
- **Deep Linking** – Automatic deep link handling with Expo Linking
- **Theme Support** – Automatic light/dark mode based on system preferences
- **Performance Optimized** – Uses React Native optimizations and native components
- **Development Build** – Requires Expo Development Build (cannot use Expo Go)

---

## 🔮 Future Enhancements

- ✅ **Backend Integration** – Connect to authentication API
- 🔒 **Secure Storage** – Store tokens securely using Expo SecureStore
- 📧 **Email Verification** – Email verification flow after signup
- 🔐 **Password Strength** – Password strength indicator
- 📱 **Biometric Authentication** – Face ID / Touch ID support
- 🎨 **Custom Themes** – More theme customization options
- 🌍 **Internationalization** – Multi-language support
- 📊 **Analytics** – Track authentication events
- 🔄 **Token Refresh** – Automatic token refresh mechanism
- 📝 **Signup Flow** – User registration screen
- 🔐 **Two-Factor Authentication** – 2FA support
- 📱 **Remember Me** – Persistent login option

---

## 🤝 Contributing

💡 Have an idea or found a bug?

- 🍴 **Fork the repository**
- 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
- 💻 **Make your changes** and test thoroughly on both iOS and Android
- 📝 **Commit your changes** (`git commit -m 'Add amazing feature'`)
- 🚀 **Push to the branch** (`git push origin feature/amazing-feature`)
- 🔄 **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Test on both iOS and Android platforms
- Ensure responsive design for different screen sizes
- Update documentation as needed
- Use TypeScript for type safety
- Follow React Native best practices
- Maintain consistent styling with NativeWind/Tailwind
- Test authentication flow thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Expo Team** – For the amazing React Native development platform
- **React Navigation Team** – For the powerful navigation solution
- **Zustand** – For the lightweight state management library
- **NativeWind** – For bringing Tailwind CSS to React Native
- **React Native Community** – For the incredible cross-platform framework
- **Open Source Community** – For the amazing libraries and tools
- **All Contributors** – Who help make this project better

---

## 📚 Resources

- [React Navigation Documentation](https://reactnavigation.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Native Documentation](https://reactnative.dev/)
