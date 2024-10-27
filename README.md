# IMDB Automation Test

This project contains an automated test for IMDb using Cypress.

## Project Structure

- `cypress/`: Contains all Cypress-related files and folders.
- `cypress/e2e/`: Contains end-to-end tests.
- `cypress/support/`: Contains support files for tests.
- `node_modules/`: Contains project dependencies (ignored in Git).
- `package.json`: Contains project metadata and dependencies.
- `README.md`: This file.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Git installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
   ```bash
   cd <project-directory>

3. Install dependencies:
   ```bash
   npm install

### Running tests

1. Start cypress
   ```bash
   npx cypress open

2. Run tests locally in Cypress Window using Google Chrome

   Choose E2E testing and start E2E testing in Chrome.

3. Run the tests

   Click on 01_imdb.cy.js in the specs section inside the cypress/e2e folder.

### Running tests in headed mode and with Allure report

1. Start test runner with a imdb headed script (Cypress should be closed)
   ```bash
   npm run imdb:headed

2. After runner is finished, check test results with Allure report
   ```bash
   npm run report:allure

3. Clean Allure results (Optional)
   ```bash
   npm run clean:allure

### Running tests in headless mode and with Allure report

1. Start test runner with a imdb headless script (Cypress should be closed)
   ```bash
   npm run imdb:headless

2. After run is finished then test results are displayed in the cypress terminal

3. Check test results with Allure report
   ```bash
   npm run report:allure

4. Clean Allure results (Optional)
   ```bash
   npm run clean:allure
