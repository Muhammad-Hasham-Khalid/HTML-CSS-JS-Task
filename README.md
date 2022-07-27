# MK Frontend Code Challenge

The goal of this challenge is to build a custom dropdown radio selector, populated with data from a server endpoint. This test is designed to be a quick assessment of intermediate CSS selectors and your knowledge of Javascript. We hope that you will take whatever approach you feel best showcases the skills you would like us to know about.

## Instructions

In the `/mockups` directory you will find 10 images that show the various states of the dropdown selector. The app you deliver should account for each of these states.

Install dependencies using yarn with `yarn install`.

Start the server by running `yarn dev`.

> _NOTE:_ You may use npm instead of yarn if you wish.

Open a browser and navigate to `http://localhost:3000` to view the given `index.html` file.

You will find the data for building the app at `http://localhost:3000/api/data.json`. **DO NOT** Modify the data.json file.

## App Acceptance Criteria

### Behavior

- All content (both the dropdown and the card) should be populated by making a request to the given data.json endpoint.
- Upon load, the dropdown should be filled with the `All Photos` selection, and the `All Photos` card should be visible.
- Opening the filter flips the arrow and turns it orange.
- Filter dropdown closes when clicked outside the filter.
- 100% of options and dropdown area is clickable.
- Selecting a radio option changes the current selection text.
- Selecting a radio option changes the currently shown card to match the dropdown selection.
- Changing the selection should not cause a page refresh to update the current selection or the card.

#### Testing

We expect the code you write to have tests included. It is up to you to decide which tests would be most valuable if this were an app that were to be deployed in a production environment. Jest is pre-configured with a simple example test. You may switch to a different test framework if you desire.

### Styling

- Adheres closely to the designed files
- The site works on both a mobile size and a desktop size layout.
- The breakpoint between the layouts should be 800px.
- Style details (border radius, colors, spacing) are applied correctly.

#### Filter

- Filter is responsive to different display sizes.
- Default browser radio buttons are replaced with styled alternatives.
- Filter and options borders line up correctly.
- User selection is disabled.
- Browser focus outlines are disabled.

#### Card

- Card is responsive to different display sizes.
- The image height is 150px on mobile and 250px on desktop..
- The card title is 24px on mobile and 32px on desktop.

## Technology

- **DO NOT** use any pre-built UI elements from frameworks like Material UI, Bootstrap, Foundation, MUI, etc.
- Browser Support: Edge+, Last 2 Chrome, Firefox, & Safari
- You may utilize any code bundling service (e.g., webpack, vite, parcel, etc.)
- You may utilize any local server if you prefer not to use Express

> _NOTE_ If you do change from the given Express server, you must still be able to make a request to `/api/data.json` to populate the dropdown.

# Bonus Points

While not required, here are some ideas on how you can showcase your skills further.

- BEM class names
- SCSS / PostCSS
- Craft a loading state for the control

# Delivery Instructions

- Write a short README.md file (replacing this one) that includes instructions on running your app as well as describing any decisions you made during the project that you'd like us to know about.
- Create a .zip archive of your files and email them to `david@thetigerclan.com` with the subject line `Frontend Challenge Completed`.

# Running the application

```bash
# install deps
npm install
# or
yarn

# run the app
yarn dev
# or
npm run dev

# open http://localhost:3000/
```
