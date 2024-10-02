# Web Scraper

This project is a web scraper for ikman.lk that uses Puppeteer integrated with Express.js backend. It allows users to search for listings based on a provided keyword and returns the scraped data as a JSON response via an API endpoint.

## Features

- Search ikman.lk for listings based on a provided keyword.
- Scrape the following details from each listing:
  - Title
  - Price
  - Location
  - Listing URL
  - Date Posted
- Return the scraped data in JSON format via an API endpoint.

## Prerequisites

Before running this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

First, clone this repository to your local machine using Git.

```bash
git clone https://github.com/ThisaraJayas/Web-Scrapper.git
```

### 2. Install Dependencies
It is required to run npm install to install all dependencies before running the project to avoid any crashes or issues. You can do this using the following command:
```bash
npm install
```

### 3. Start the Server
Start the Express.js server by running the following command:
```bash
npm start