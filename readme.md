# `terminal-profile`

Node.js library for managing the macOS Terminal.app’s profile (aka theme)

## Install

```sh
npm install terminal-profile
```

## Usage

```javascript
import {
	setTerminalDefaultProfile,
	setTerminalProfile,
} from "terminal-profile";

await setTerminalProfile("One Dark");

await setTerminalDefaultProfile("gruvbox-dark");
```

## API

### `setTerminalProfile`

```typescript
function setTerminalProfile(profile: string): Promise<void>;
```

Update all of Terminal’s windows and tabs to the `profile` profile

### `setTerminalDefaultProfile`

```typescript
function setTerminalDefaultProfile(profile: string): Promise<void>;
```

Update Terminal&rsquo;s default profile to `profile`

## Acknowledgements

Thanks to [Jimmy Bosse](https://github.com/jbosse) for his [Stack Overflow answer](https://stackoverflow.com/a/66080297/4411309)

## Related

- [auto-terminal-profile](https://github.com/ptrkcsk/auto-terminal-profile) - Automatically switch the macOS Terminal profile based on the system-wide dark / light appearance mode

## Acknowledgements

Thanks to [Jimmy Bosse](https://github.com/jbosse) for his [Stack Overflow answer](https://stackoverflow.com/a/66080297/4411309)
