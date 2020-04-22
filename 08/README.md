# Assignment 8:

- Implement a viewer for the Giphy API with the following menu items
  - Search field allows to search gifs
    - Include a pagination
      - Previous and Next link
      - Editable text field holding the current value
      - Avoid passing non-existing pages
      - Show number of pages
        - Giphy API seems to have an error and does not load with high but allowed offset
  - Show trending gifs
    - Include a pagination
- Make sure that the right amount of requests is sent
- Show loaders when something is loading

# Available commands:

```bash
npm install # Install dependencies

npm run lint # Run eslint

npm start # Start webpack in watch/development mode

npm run build # Build main.js for production
```

To check the result of the build just open the `public/index.html` file in your
browser.
