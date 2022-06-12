import {runAppleScript} from 'run-applescript';

/**
 * @param {string} profile
 * @return {Promise<void>}
 */
export async function setTerminalProfile(profile) {
	await runAppleScript(`tell application "Terminal"
	set current settings of tabs of windows to settings set "${profile}"
end tell`);
}
