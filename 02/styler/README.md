# Expo React Native Project Structure Explained (Beginner Friendly)

This guide explains the folder structure created when you run:

```bash
npx create-expo-app@latest
```

Expo is a framework/toolchain built on top of React Native that makes mobile app development easier.

---

# What is Expo?

Expo helps you build React Native apps faster without manually handling:
- Android Studio setup
- Xcode setup
- Native code configuration

Expo provides:
- Easier development
- Faster testing
- Built-in features
- Better beginner experience

---

# Big Picture

An Expo project contains:

```txt
React Components
+
Expo SDK
+
React Native
+
Configuration Files
+
Assets
```

---

# Default Expo Folder Structure

```txt
my-app/
│
├── app/
├── assets/
├── node_modules/
├── .expo/
├── app.json
├── package.json
├── babel.config.js
├── tsconfig.json
├── expo-env.d.ts
└── ...
```

---

# Modern Expo Uses App Router

New Expo apps usually use:

```txt
app/
```

folder instead of:

```txt
App.js
```

This is called:

```txt
Expo Router
```

Similar to Next.js routing.

---

# Full App Flow

```txt
Expo starts app
       ↓
app/index.tsx loads
       ↓
Components render
       ↓
Styles applied
       ↓
UI appears on screen
```

---

# Example Structure

```txt
my-app/
│
├── app/
│   ├── index.tsx
│   ├── _layout.tsx
│   └── profile.tsx
│
├── assets/
├── node_modules/
├── app.json
└── package.json
```

---

# 1. app/

MOST IMPORTANT folder.

Contains:
- Screens/pages
- Navigation
- Layouts

Think of it as:

```txt
Main application folder
```

---

# Example

```txt
app/
│
├── index.tsx
├── about.tsx
└── profile.tsx
```

Automatically creates routes:

```txt
/            → index.tsx
/about       → about.tsx
/profile     → profile.tsx
```

---

# 2. app/index.tsx

Home screen of app.

Example:

```tsx
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
```

---

# Meaning

```txt
Main screen shown when app opens
```

---

# 3. app/_layout.tsx

Very important file.

Controls:
- Navigation structure
- Shared layouts
- Headers
- Tabs
- Stack navigation

Think of it as:

```txt
Root layout of app
```

---

# Example

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
```

---

# Meaning

```txt
"Use stack navigation for all screens"
```

---

# 4. assets/

Contains static files.

Examples:
- Images
- Fonts
- Icons
- Splash screens

---

# Example Structure

```txt
assets/
│
├── images/
├── fonts/
└── icons/
```

---

# Example Image

```txt
assets/images/logo.png
```

Used like:

```tsx
<Image source={require('../assets/images/logo.png')} />
```

---

# 5. node_modules/

Contains all installed packages/libraries.

Created automatically after:

```bash
npm install
```

Contains:
- React
- Expo
- React Native
- Navigation libraries
- Axios
- etc.

---

# 6. .expo/

Expo-generated temporary files.

Contains:
- Development settings
- Cache
- Local machine data

Usually ignored in Git.

---

# 7. app.json

Very important Expo configuration file.

Controls:
- App name
- Splash screen
- App icon
- Version
- Orientation

---

# Example

```json
{
  "expo": {
    "name": "MyApp",
    "slug": "my-app",
    "version": "1.0.0"
  }
}
```

---

# Important Fields

| Field | Meaning |
|---|---|
| name | App display name |
| slug | Unique Expo identifier |
| version | App version |
| orientation | Portrait/Landscape |
| icon | App icon |
| splash | Splash screen |

---

# 8. package.json

Project information + dependencies.

Contains:
- Installed packages
- Scripts
- Versions

---

# Example

```json
{
  "dependencies": {
    "expo": "~53.0.0",
    "react": "...",
    "react-native": "..."
  }
}
```

---

# Important Scripts

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

---

# Running App

## Start Expo

```bash
npm start
```

or

```bash
npx expo start
```

---

## Run Android

```bash
npm run android
```

---

## Run iOS

```bash
npm run ios
```

---

## Run Web

```bash
npm run web
```

Expo supports web too.

---

# 9. babel.config.js

Babel configuration.

Babel converts modern JavaScript into compatible JavaScript.

Example:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

---

# 10. tsconfig.json

TypeScript configuration.

Controls:
- Type checking
- Compiler rules
- JSX behavior

---

# 11. expo-env.d.ts

Type definitions for Expo environment.

Helps TypeScript understand Expo APIs.

---

# 12. .gitignore

Tells Git which files NOT to upload.

Usually ignores:
- node_modules
- .expo
- cache files

---

# Expo Router Concept

Expo Router uses file-based routing.

Meaning:

```txt
File name = Route
```

Example:

```txt
app/profile.tsx
```

becomes:

```txt
/profile
```

---

# Nested Routes Example

```txt
app/
│
├── index.tsx
├── profile/
│   ├── index.tsx
│   └── settings.tsx
```

Routes become:

```txt
/                  → Home
/profile           → Profile
/profile/settings  → Settings
```

---

# Dynamic Routes

Example:

```txt
app/user/[id].tsx
```

Matches:

```txt
/user/1
/user/2
```

---

# Example

```tsx
import { useLocalSearchParams } from 'expo-router';

const { id } = useLocalSearchParams();
```

---

# Recommended Real Project Structure

As app grows:

```txt
src/
│
├── components/
├── screens/
├── hooks/
├── services/
├── utils/
├── constants/
├── context/
├── redux/
└── styles/
```

---

# Meaning of Each Folder

| Folder | Purpose |
|---|---|
| components | Reusable UI |
| screens | App pages |
| hooks | Custom hooks |
| services | API calls |
| utils | Helper functions |
| constants | Fixed values |
| context | React Context |
| redux | Global state |
| styles | Shared styles |

---

# Expo vs React Native CLI

| Feature | Expo | React Native CLI |
|---|---|---|
| Beginner Friendly | ✅ Easy | ❌ Harder |
| Native Code Access | Limited | Full |
| Android Studio Required | ❌ No | ✅ Yes |
| Xcode Required | ❌ No | ✅ Yes |
| Easier Setup | ✅ Yes | ❌ More setup |
| Faster Development | ✅ Yes | Medium |

---

# Expo App Architecture

```txt
Your React Components
        ↓
Expo SDK
        ↓
React Native
        ↓
Native Android/iOS APIs
        ↓
Mobile Device
```

---

# How Expo App Runs

## Step 1

Run:

```bash
npx expo start
```

---

## Step 2

Expo Dev Server starts.

---

## Step 3

QR code appears.

---

## Step 4

Open Expo Go app on phone.

---

## Step 5

Scan QR code.

---

## Step 6

App loads instantly on phone.

---

# Most Important Files For Beginners

Focus mainly on:

```txt
app/
app/index.tsx
app/_layout.tsx
package.json
app.json
assets/
```

---

# Simple Mental Model

```txt
app/           → Screens/pages
assets/        → Images/fonts
package.json   → Dependencies
app.json       → Expo configuration
node_modules/  → Installed libraries
```

---

# Beginner Learning Order

Learn in this order:

1. JSX
2. Components
3. Props
4. State
5. Styling
6. Expo Router
7. Navigation
8. API calls
9. State management
10. Animations

---

# Final Beginner Advice

Expo is best for beginners because:
- Easier setup
- Faster testing
- Less native configuration
- Better development experience

Start by learning:
- Components
- Styling
- Navigation
- Expo Router
- API calls

Do not worry about native Android/iOS code initially.

---
# Understanding Expo `app/` Folder (Beginner Friendly)

When you create an Expo app using:

```bash
npx create-expo-app@latest
```

Expo Router creates an `app/` folder automatically.

This folder controls:
- Screens
- Navigation
- Tabs
- Layouts
- Routes

---

# Big Idea

In Expo Router:

```txt
File name = Route (screen/page)
```

Example:

```txt
app/index.tsx
```

becomes:

```txt
/
(Home Screen)
```

---

# Typical Expo Router Structure

```txt
app/
│
├── _layout.tsx
├── index.tsx
├── explore.tsx
├── modal.tsx
│
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── explore.tsx
```

---

# Understanding Each File

---

# 1. `_layout.tsx`

MOST IMPORTANT FILE.

Controls:
- Navigation structure
- Shared layouts
- Headers
- Tabs
- Stack navigation

Think of it as:

```txt
Parent wrapper for screens
```

---

# Why `_layout.tsx` Exists

Without layout:

```txt
Each screen isolated
```

With layout:

```txt
All screens connected through navigation
```

---

# Example

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
```

---

# Meaning

```txt
"Use Stack Navigation"
```

---

# What is Stack Navigation?

Screens open like stack of cards:

```txt
Home
  ↓
Profile
  ↓
Settings
```

Press back:

```txt
Settings → Profile → Home
```

---

# Visual Flow

```txt
_layout.tsx
      ↓
Controls navigation
      ↓
Screens render inside it
```

---

# 2. `index.tsx`

Home screen.

---

# Why named `index.tsx`?

In routing systems:

```txt
index = default/home page
```

---

# Example

```tsx
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
```

---

# Route Created

```txt
/
```

(Home page)

---

# Mental Model

```txt
index.tsx = homepage
```

---

# 3. `explore.tsx`

Another screen/page.

Example:

```tsx
import { View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <View>
      <Text>Explore Screen</Text>
    </View>
  );
}
```

---

# Route Created

```txt
/explore
```

---

# Navigation Flow

```txt
Home → Explore
```

---

# 4. `modal.tsx`

Creates a modal screen.

---

# What is Modal?

A modal is a popup-like screen.

Example:
- Login popup
- Payment popup
- Alert popup

---

# Visual Example

```txt
Main Screen
    ↓
Modal opens above it
```

---

# Example

```tsx
import { View, Text } from 'react-native';

export default function ModalScreen() {
  return (
    <View>
      <Text>Modal Screen</Text>
    </View>
  );
}
```

---

# Route Created

```txt
/modal
```

---

# Usually Configured in `_layout.tsx`

Example:

```tsx
<Stack.Screen
  name="modal"
  options={{ presentation: 'modal' }}
/>
```

---

# Meaning

```txt
"Open this screen as popup modal"
```

---

# 5. `(tabs)/` Folder

VERY IMPORTANT.

This creates:

```txt
Bottom Tab Navigation
```

---

# Why Parentheses `( )`?

Folders inside parentheses:

```txt
(tabs)
```

are:

```txt
Route groups
```

They organize routes but DO NOT affect URL.

---

# Example

```txt
app/
│
├── (tabs)/
│   ├── index.tsx
│   └── explore.tsx
```

Routes become:

```txt
/
and
/explore
```

NOT:

```txt
/tabs/explore
```

---

# What `(tabs)` Does

Creates bottom navigation like:

```txt
[ Home ] [ Explore ]
```

at bottom of app.

---

# Visual

```txt
-----------------
|               |
|   Screen      |
|               |
-----------------
| Home | Explore |
-----------------
```

---

# 6. `(tabs)/_layout.tsx`

Controls tab navigation.

VERY IMPORTANT FILE.

---

# Example

```tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return <Tabs />;
}
```

---

# Meaning

```txt
"Use Bottom Tab Navigation"
```

---

# Visual Flow

```txt
Tabs Layout
      ↓
Shows tab bar
      ↓
Loads screens inside tabs
```

---

# 7. `(tabs)/index.tsx`

Home tab screen.

---

# Route

```txt
/
```

---

# Example

```tsx
export default function HomeTab() {
  return (
    <Text>Home Tab</Text>
  );
}
```

---

# 8. `(tabs)/explore.tsx`

Explore tab screen.

---

# Route

```txt
/explore
```

---

# Example

```tsx
export default function ExploreTab() {
  return (
    <Text>Explore Tab</Text>
  );
}
```

---

# Full Tabs Flow

```txt
(tabs)/_layout.tsx
         ↓
Creates tab navigation
         ↓
index.tsx + explore.tsx
become tabs
```

---

# Complete Navigation Architecture

```txt
Root _layout.tsx
        ↓
Stack Navigation
        ↓
(tabs)/_layout.tsx
        ↓
Tab Navigation
        ↓
index.tsx / explore.tsx
```

---

# Real Visual Structure

```txt
Stack Navigation
│
├── Tabs
│     ├── Home
│     └── Explore
│
└── Modal
```

---

# How Navigation Actually Works

---

# Root Layout

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="modal"
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}
```

---

# Meaning

## `(tabs)`

```txt
Main tab navigation
```

---

## `modal`

```txt
Popup modal screen
```

---

# Tabs Layout Example

```tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
}
```

---

# Meaning

```txt
Create 2 bottom tabs:
- Home
- Explore
```

---

# Important Concept

Expo Router automatically creates routes from files.

You DO NOT manually create navigation screens like older React Navigation.

---

# Old React Navigation

```tsx
<Stack.Screen name="Home" component={HomeScreen} />
```

---

# Expo Router

Simply create:

```txt
home.tsx
```

Done.

---

# Dynamic Routes

Example:

```txt
app/user/[id].tsx
```

Matches:

```txt
/user/1
/user/2
/user/100
```

---

# Access Parameter

```tsx
import { useLocalSearchParams } from 'expo-router';

const { id } = useLocalSearchParams();
```

---

# Nested Routes Example

```txt
app/
│
├── profile/
│   ├── index.tsx
│   └── settings.tsx
```

Creates:

```txt
/profile
/profile/settings
```

---

# Route Groups

Example:

```txt
(auth)
(tabs)
(admin)
```

Used for:
- Organizing app
- Different layouts
- Different navigations

---

# Real Project Example

```txt
app/
│
├── _layout.tsx
│
├── (auth)/
│   ├── login.tsx
│   └── signup.tsx
│
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── explore.tsx
│   └── profile.tsx
│
└── modal.tsx
```

---

# Meaning

| Folder/File | Purpose |
|---|---|
| _layout.tsx | Main navigation |
| (tabs) | Bottom tab group |
| (auth) | Authentication screens |
| index.tsx | Home screen |
| explore.tsx | Explore screen |
| modal.tsx | Popup modal |

---

# Simple Mental Model

```txt
_layout.tsx  → Navigation controller
index.tsx    → Home page
explore.tsx  → Explore page
modal.tsx    → Popup screen
(tabs)       → Bottom navigation
```

---

# Beginner Advice

Learn in this order:

1. index.tsx
2. _layout.tsx
3. Tabs
4. Stack navigation
5. Dynamic routes
6. Nested routes
7. Modals

Focus first on:
- Creating screens
- Navigation
- Passing data
- Layouts

---