# React Native Project Structure Explained
This guide explains the folder structure created when you run:

```bash
npx @react-native-community/cli@latest init MyProjectName
```

---

# Example App Explanation

Example App Code:

```tsx
import {
    StyleSheet,
    Text,
    View,
    useColorScheme
} from 'react-native'

import React from 'react'

function AppPro(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark'

    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World !
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    whiteText: {
        color: '#FFFFFF'
    },

    darkText: {
        color: '#000000'
    }
})

export default AppPro
```

---

# What This App Does

Your app:

- Detects whether the phone theme is dark/light
- Shows `"Hello World!"`
- Centers text on screen
- Changes text color based on theme

---

# Full Flow of App

```txt
index.js → starts app
       ↓
AppRegistry loads AppPro
       ↓
AppPro component renders UI
       ↓
Styles are applied
       ↓
Text appears on screen
```

---

# Understanding the Example App

---

# 1. Imports

```tsx
import {
    StyleSheet,
    Text,
    View,
    useColorScheme
} from 'react-native'
```

These are built-in React Native components/hooks.

---

## View

```tsx
<View></View>
```

Think of `View` like a container or `<div>` in HTML.

Used for:
- Layout
- Grouping UI
- Styling

---

## Text

```tsx
<Text>Hello</Text>
```

Used to display text on mobile screen.

React Native requires all text inside `<Text>` component.

---

## StyleSheet

Used to create styles.

Similar to CSS.

Example:

```tsx
const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})
```

---

## useColorScheme

Detects device theme.

Returns:

```txt
"dark"
or
"light"
```

Example:

```tsx
const theme = useColorScheme()
```

---

# 2. Component

```tsx
function AppPro(): JSX.Element
```

Creates a React component.

A component is:

```txt
Reusable UI function
```

---

# 3. Detecting Dark Mode

```tsx
const isDarkMode = useColorScheme() === 'dark'
```

Explanation:

## Step 1

```tsx
useColorScheme()
```

returns:

```txt
"dark"
or
"light"
```

---

## Step 2

```tsx
=== 'dark'
```

Checks if theme is dark.

---

## Final Result

```tsx
const isDarkMode = true
```

or

```tsx
const isDarkMode = false
```

---

# 4. Returning UI

```tsx
return(
    <View style={styles.container}>
```

This renders the UI.

---

# 5. Container Styling

```tsx
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
```

---

## flex: 1

Means:

```txt
Take full screen height
```

---

## alignItems: 'center'

Centers content horizontally.

---

## justifyContent: 'center'

Centers content vertically.

---

# Result

Text becomes perfectly centered.

---

# 6. Conditional Styling

```tsx
<Text style={isDarkMode ? styles.whiteText : styles.darkText}>
```

Uses ternary operator:

```tsx
condition ? trueValue : falseValue
```

---

## Meaning

If dark mode:

```tsx
styles.whiteText
```

Else:

```tsx
styles.darkText
```

---

# 7. Styles

```tsx
const styles = StyleSheet.create({
```

Creates style object.

---

## White Text

```tsx
whiteText: {
    color: '#FFFFFF'
}
```

White color.

---

## Dark Text

```tsx
darkText: {
    color: '#000000'
}
```

Black color.

---

# 8. Export

```tsx
export default AppPro
```

Allows component to be imported in other files.

---

# 9. index.js Entry File

Example:

```js
import AppPro from './AppPro'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);
```

---

# What index.js Does

```txt
Starts the React Native app
```

---

# AppRegistry

```js
AppRegistry.registerComponent(appName, () => AppPro);
```

Meaning:

```txt
"Launch AppPro component"
```

---

# React Native Project Structure

```txt
MyProjectName/
│
├── android/
├── ios/
├── node_modules/
├── App.tsx
├── index.js
├── package.json
├── app.json
├── babel.config.js
├── metro.config.js
├── tsconfig.json
└── ...
```

---

# 1. android/

Contains Android native app code.

Used when app runs on Android.

Contains:
- Java/Kotlin
- Gradle
- Android SDK configs
- APK build settings

---

## Important Android Files

### android/app/

Actual Android app module.

Contains:
- Permissions
- App icon
- Native code

---

### AndroidManifest.xml

Controls:
- Internet permission
- Camera permission
- Notifications
- App configuration

---

### MainActivity.java / MainActivity.kt

Android app entry screen.

Launches React Native app.

---

### MainApplication.java

Registers React Native packages.

---

# 2. ios/

Contains iOS native code.

Used for:
- Xcode
- Swift/Objective-C
- iPhone builds

---

## Important iOS Files

### ios/MyProjectName.xcworkspace

Opened in Xcode.

Used for:
- Running iOS app
- Building app
- Publishing to App Store

---

### Info.plist

iOS configuration file.

Controls:
- Permissions
- App settings

---

# 3. node_modules/

Contains installed packages/libraries.

Created after:

```bash
npm install
```

Contains:
- React
- React Native
- Axios
- Redux
- Navigation libraries

---

# 4. App.tsx

Main application component.

Usually where beginners start coding.

---

# 5. index.js

Entry point of app.

Starts React Native application.

---

# 6. package.json

Very important file.

Contains:
- Dependencies
- Scripts
- Project information

---

## Example Scripts

```json
"scripts": {
  "android": "react-native run-android",
  "ios": "react-native run-ios",
  "start": "react-native start"
}
```

---

# 7. app.json

Contains app metadata.

Example:

```json
{
  "name": "MyProjectName",
  "displayName": "MyProjectName"
}
```

---

# 8. babel.config.js

Babel configuration.

Babel converts modern JavaScript into compatible JavaScript.

---

# 9. metro.config.js

Metro bundler configuration.

Metro:
- Combines files
- Optimizes code
- Serves JS bundle

---

# 10. tsconfig.json

TypeScript configuration.

Controls:
- Type checking
- Compiler settings

---

# 11. .gitignore

Tells Git which files NOT to upload.

Usually ignores:
- node_modules
- build files
- cache

---

# 12. README.md

Documentation file.

Contains:
- Setup instructions
- Commands
- Notes

---

# 13. package-lock.json

Locks exact dependency versions.

Ensures same versions across all systems.

---

# React Native Architecture

```txt
JavaScript Code
       ↓
React Native Bridge
       ↓
Native Android/iOS APIs
       ↓
Mobile UI
```

---

# How React Native App Runs

## Step 1

Run:

```bash
npx react-native run-android
```

---

## Step 2

Metro bundler starts.

---

## Step 3

Android project builds.

---

## Step 4

App installs on device/emulator.

---

## Step 5

index.js runs.

---

## Step 6

App.tsx renders UI.

---

# Recommended Folder Structure for Real Projects

```txt
src/
│
├── components/
├── screens/
├── navigation/
├── services/
├── redux/
├── hooks/
├── utils/
├── assets/
├── constants/
└── styles/
```

---

# Folder Meaning

| Folder | Purpose |
|---|---|
| components | Reusable UI |
| screens | App pages |
| navigation | Navigation setup |
| services | API calls |
| redux | Global state |
| hooks | Custom hooks |
| utils | Helper functions |
| assets | Images/fonts |
| constants | Fixed values |
| styles | Shared styles |

---

# Beginner Focus

Focus mainly on:

```txt
App.tsx
index.js
package.json
src/
```

Do not worry about:
- android/
- ios/
- Gradle
- Xcode

in the beginning.

---

# Useful Commands

## Start Metro

```bash
npm start
```

---

## Run Android App

```bash
npx react-native run-android
```

---

## Run iOS App

```bash
npx react-native run-ios
```

---

# Final Beginner Advice

Learn in this order:

1. JSX
2. Components
3. Props
4. State
5. Styling
6. Navigation
7. API calls
8. State management
9. Native modules

Focus mainly on:
- Components
- React concepts
- UI building

---