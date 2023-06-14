# AIT MESS BOT -- Telegram Bot 
## College Mess Querying Telegram Bot

This Telegram bot project aims to provide students with information on daily menus for college mess and different canteens. It allows users to query the available food options and obtain detailed menu information. The bot is developed using TypeScript and the Telegraf library, built on top of the Telegram API 2.0.

## Features

- Query college mess menus and canteen options through a Telegram bot interface.
- Interactive inline keyboard options for easy selection of mess or canteen.
- Custom intent detection system based on a lite version of an inverted index map.
- Efficient indexing and search functionality to identify user intents from queries.
- Accurate and relevant responses by mapping user queries to specific menu items or information.
- Integration of Telegram API 2.0 functionalities for seamless communication.

## Getting Started

To get started with the College Mess Querying Telegram Bot, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/college-mess-bot.git`
2. Install dependencies: `npm install`
3. Configure the bot token: Replace `BOT_TOKEN` in `.env` file with your Telegram bot token.
4. Build the TypeScript code: `npm run build` or 'tsc'
5. Start the bot: `npm start`

## Usage

- Start a conversation with the bot on Telegram.
- Use the provided inline keyboard options to select a mess or canteen.
- Alternatively, type natural language queries to inquire about specific menu items.
- The bot will respond with relevant menu information or clarifying questions if required.

## Contributing

Contributions to the College Mess Querying Telegram Bot project are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the [ISC License]().

## Acknowledgments

- The Telegraf library for simplifying Telegram bot development.
- Inspiration from Elasticsearch for the custom intent detection approach.
- The Telegram API documentation for valuable resources.