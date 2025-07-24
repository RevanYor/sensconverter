# Gaming Sensitivity Converter

A web-based tool to convert mouse sensitivity settings between popular shooter games. Built with vanilla JavaScript, Tailwind CSS, and Node.js.

## Supported Games

- VALORANT
- Counter-Strike 2
- Apex Legends
- Overwatch 2
- Rainbow Six Siege
- Fortnite
- Call of Duty: Warzone
- Battlefield 2042
- PUBG: Battlegrounds
- Destiny 2
- Grand Theft Auto V

## Features

- Convert sensitivity settings between any supported games
- Modern, responsive gaming-themed UI
- Real-time conversion
- Supports decimal sensitivity values
- Game information cards

## How It Works

The converter uses the cm/360° method to ensure accurate sensitivity conversion between games. This means it calculates how many centimeters of mouse movement are required to perform a 360-degree turn in-game, then converts this value between different game sensitivity scales.

## Technical Details

- **Frontend**: Vanilla JavaScript with Tailwind CSS for styling
- **Backend**: Node.js with Express for serving static files
- **No database required**: All conversion factors are stored in the frontend code

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or want to add support for more games.

## License

MIT License - feel free to use this project however you'd like! 