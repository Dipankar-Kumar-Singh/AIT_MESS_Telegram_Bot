# AIT MESS BOT 🤖 Telegram Bot 
## College Mess Querying Telegram Bot

This Telegram bot project aims to provide students with information on daily menus for college mess and different canteens. It allows users to query the available food options and obtain detailed menu information. The bot is developed using TypeScript and the Telegraf library, built on top of the Telegram API 2.0.

Yotube Link | Bot Link 
--- | ---
[![](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/f2953e07-1bb5-4361-9b67-d4ef95f6ff0e)](https://youtu.be/iM2LnCbgQbM) | [![](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/85a14b97-cef9-40a8-8241-502492166fa2)](https://t.me/AIT_Mess_bot)


# Use Now 
![505f3ce3-d1ca-41c3-b3d5-60c5b97a13ee](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/e14d44c1-0ec2-44f3-8414-d3c99fee5183)

![Mess-Bot-mockup](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/30defce8-abe0-4a88-a6d1-335901676b19)


## Features

- Query college mess menus and canteen options through a Telegram bot interface.
- Interactive inline keyboard options for easy selection of mess or canteen.
- Custom intent detection system based on a lite version of an inverted index map.
- Efficient indexing and search functionality to identify user intents from queries.
- Accurate and relevant responses by mapping user queries to specific menu items or information.
- Integration of Telegram API 2.0 functionalities for seamless communication.

Support Natural Language query | Inline Keyboard Support 
--- | ---
![](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/b6c99c41-c949-47a1-a215-7cd517214821) | ![](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/46fbc9e9-a0c1-41e4-a9aa-f3cd61ba6695)

First Interaction - Bot Start | Food Court - OAC Menu  
--- | ---
 ![start](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/9ab3941d-5c09-4b63-a86b-00ab3775c5d2) | ![OAC](https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot/assets/66475186/81a82d70-74fc-48c8-8ecc-02276f10836e)

## Getting Started

To get started with the College Mess Querying Telegram Bot, follow these steps:

1. Clone the repository: `git clone https://github.com/Dipankar-Kumar-Singh/AIT_MESS_Telegram_Bot`
2. Install dependencies: `npm install`
3. Configure the bot token: Replace `BOT_TOKEN` in `.env` file with your Telegram bot token.
4. Build the TypeScript code: `npm run build` or 'tsc'
5. Start the bot: `npm start`

## Usage

- Start a conversation with the bot on Telegram.
- Use the provided inline keyboard options to select a mess or canteen.
- Alternatively, type natural language queries to inquire about specific menu items.
- The bot will respond with relevant menu information or clarifying questions if required.


## Tech Stack

The AIT Mess Querying Telegram Bot is built using the following technologies and libraries:

- TypeScript: A statically typed superset of JavaScript that enhances code maintainability and scalability.
- Telegraf: A modern and powerful Telegram Bot API framework for Node.js.
- Telegram API: Version 2.0 of the Telegram Bot API, used for seamless communication between the bot and users.
- Lite Inverted Index Map: A custom lightweight version of an inverted index map, inspired by Elasticsearch, for efficient intent detection.
- Node.js: A JavaScript runtime environment that enables server-side execution of JavaScript code.
- npm: A package manager for installing and managing project dependencies.

## Backend Communication

The College Mess Querying Telegram Bot utilizes the long polling method for backend communication. In this approach, the main server will be Telegram's own server, which maintains a long queue to process messages by default. The bot's own server is responsible for handling incoming requests and processing them accordingly. This setup ensures efficient and reliable communication between the bot and Telegram users.

## Continuous Integration and Deployment

To streamline the development process, this project has leveraged GitHub Actions for continuous integration and deployment (CI/CD). A GitHub Actions workflow has been set up to automatically build and deploy the bot from any push to the main branch. This allows for smooth and automated deployment to a Virtual Private Server (VPS) or other hosting environment.

## Contributing

Contributions to the College Mess Querying Telegram Bot project are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the [LICENSE](LICENSE).

## Acknowledgments

- The Telegraf library for simplifying Telegram bot development.
- Inspiration from Elasticsearch for the custom intent detection approach.
- The Telegram API documentation for valuable resources.
