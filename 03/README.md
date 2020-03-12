# Assignment 3:

Implement a message board using typescript

- Navigation with "Add new message" and "Messages" links
  - The "Messages" links also shows the number of unread messages
  - If more than 5 it should show "5+"
- "Messages" shows all messages
  - A message consists of a subject and a body
  - Special styling for unread messages
  - Clicking a message should mark them as read
  - Red text at the very top tells how many messages are unread, if any
- "Add messages" should open a form to add a new message
  - Form must accept a subject and a body
  - Use a button to send the message
  - Form should be empty when switching back and forth

# Available commands:

```bash
npm install # Install dependencies

npm run lint # Run eslint

npm start # Start webpack in watch/development mode

npm run build # Build main.js for production
```

To check the result of the build just open the `public/index.html` file in your
browser.
