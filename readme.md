# `terminal-profile`

Manage macOS Terminal.app profile

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

## Acknowledgements

Thanks to [Jimmy Bosse](https://github.com/jbosse) for his [Stack Overflow answer](https://stackoverflow.com/a/66080297/4411309)

## Related

- [auto-terminal-profile](https://github.com/ptrkcsk/auto-terminal-profile) - Automatically switch the macOS Terminal profile based on the system-wide dark / light appearance mode
