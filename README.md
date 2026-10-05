# Card Match

Cardmaker matching cards, done on the iPad, with data.

- Student tabs, each with their own card sets, reinforcement and progress.
- Matching-to-sample: the sample card at the top, an array of 1 to 5 choices below; the student taps the match.
- All the Cardmaker relationships (picture, word, letter case, number, quantity, number word, shape, color, non-identical pairs) and distractor rules.
- Pictures from ARASAAC or Global Symbols (enter your Global Symbols key in Settings; it is saved only on the iPad, never in these files).
- Data: first-try accuracy per session and per target, prompted sessions, errorless trials, mastery criterion per card set, copy to a spreadsheet.
- Reinforcement: sparkles, bubbles, draw, numbers, letters, on FR, VR, FI, VI or end-of-session schedules.
- Hold the lock in the corner for 3 seconds to leave a session.

## Sync between devices

Card Match can keep home, school and the iPad in sync through a **second, private** GitHub repository (for example `CardMatch-data`) that only holds data. Setup is in the app under **⚙️ Settings, sync and backup → Sync between devices**, with step-by-step instructions for making the private repo and a fine-grained token limited to it (Contents: Read and write).

- The token is saved only on each device. It is never stored in this repo, the data repo, or backups.
- The app refuses to sync to a public repository.
- Sessions from every device are kept; for edits to the same card set, the newest one wins.
- Without internet, everything still works and syncs the next time it can.

Without sync, data stays on each device; **Export backup / Import backup** moves it by hand.

## Put it on GitHub Pages

1. Create a new public repository (for example `CardMatch`).
2. Upload every file in this folder to the top level.
3. **Settings → Pages**: *Deploy from a branch*, `main`, `/ (root)`, save.
4. It's live at `https://YOUR-USERNAME.github.io/CardMatch/` in a minute or two.

On the iPad: open it in Safari, **Share → Add to Home Screen**, and use Guided Access.

## Updating

Replace `index.html` and change `cardmatch-v1` in `sw.js` to `cardmatch-v2` so iPads pick up the new version.

ARASAAC pictograms: Sergio Palao, ARASAAC (arasaac.org), Government of Aragón, CC BY-NC-SA.
