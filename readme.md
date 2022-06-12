# `terminal-profile`

Mange macOS Terminal.app profile

## Install

```sh
npm install terminal-profile
```

## Usage

```javascript
import { setTerminalProfile } from "terminal-profile";

await setTerminalProfile("One Dark");
```

## API

### `setTerminalProfile(profile)`

Update all of Terminal&rsquo;s windows and tabs to the `profile` profile.
