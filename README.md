# Personal Portfolio

A "creative code" portfolio site built with React, TypeScript, and Tailwind CSS.

## Features

- **Parchment Theme:** A unique aesthetic blending classical document style with modern technical schematics.
- **ASCII Portrait:** A custom React component that converts an image into a high-fidelity ASCII representation.
- **Typewriter Effect:** Headers and text reveal themselves with a mechanical typing animation.
- **Interactive Grid:** A background grid system with a "flashlight" reveal effect that follows the mouse and leaves a fading trail.
- **Command Menu:** A fully functional command palette (accessible via `Cmd+K` or the search bar) for navigation and quick actions.
- **Responsive Design:** Fully responsive layout that adapts to mobile and desktop screens.

## Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Command Menu:** [cmdk](https://github.com/pacocoursey/cmdk)

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```

## Customization

- **Content:** Edit `src/data.ts` to update your profile, experience, and links.
- **Portrait:** Replace `public/me.jpg` with your own photo.
- **Theme:** Adjust colors and grid settings in `src/index.css`.

## License

MIT
