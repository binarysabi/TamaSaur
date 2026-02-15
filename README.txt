# Tama-Saur: Prehistoric Overlay Timer (RAWR!!)

A pixel-art Pomodoro timer that floats on your screen. The dino roams your entire monitor while you work.

## Quick Start (No Installation needed)
If you just want to use the timer without touching the code:
* **Go to the Releases section** on the right side of this GitHub page.
* **Download** the `TamaSaur_Windows.zip` file.
* **Unzip** the folder and run `TamaSaur.exe`.

---

## Features
* **Overlay Mode**: The dino roams your entire screen.
* **Draggable**: Move the shell by grabbing the **PREHISTORIC TIMER** label.
* **Resizable**: Scale the shell using the handle at the bottom right.
* **Egg Mechanic**: The dino leaves an egg behind every 3rd jump.

---

## Design your own Dino (Modding)
You can change the character's look without any programming knowledge:

1. **Open your TamaSaur folder** and navigate to:
   `resources/app/assets/`
2. **Replace the files**: You will see several `.png` files. To change the character, simply replace these files with your own art. Keep the file names **exactly** the same:
   * **Animation.png**: Idle and Walking animation.
   * **Animation_vorne.png**: Walking from the screen.
   * **Animation_hinten.png**: Walking to the screen.
   * **Animation_carry.png**: When you pick up the dino.

> **Tip**: Use **Piskel** (piskelapp.com) to create your sprites. When exporting as a PNG spritesheet, ensure you choose **Rows: 1** so the animation frames are lined up correctly.

3. **Restart** the `TamaSaur.exe` to see your new character.

---

## Developer Setup
If you want to modify the code itself:
1. **Install Node.js**.
2. **Clone this repo** and run: `npm install`
3. **Use**: `npm start` to test the app.
4. **Build**: `npm run pack-win` to build your own `.exe` file.

**Have fun!**
