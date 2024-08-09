# Todos App

A modern, feature-rich todo list application built with Vue.js.

## Features

- User authentication (login/logout)
- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Edit todos with a popup interface
- Pagination for better performance with large lists
- Responsive design for mobile and desktop

## Technologies Used

- Vue.js 3
- Vuex for state management
- Vue Router for navigation
- Axios for API requests
- Modern CSS with transitions and animations

## Project Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/todos-app.git
   cd todos-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API base URL:
   ```
   VUE_APP_API_BASE_URL=https://your-api-base-url.com
   ```

## Available Scripts

In the project directory, you can run:

### Compile and Hot-Reload for Development

```
npm run serve
```

This runs the app in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The page will reload if you make edits.

### Compile and Minify for Production

```
npm run build
```

This builds the app for production to the `dist` folder. It correctly bundles Vue in production mode and optimizes the build for the best performance.

### Lint and Fix Files

```
npm run lint
```

This will lint your files and fix any auto-fixable issues.


## Customization

You can customize various aspects of the application:

- Modify the color scheme in the CSS variables
- Adjust the pagination limit in the TodoList component
- Change the API endpoints in the `api` folder

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## Acknowledgments

- Vue.js team for the excellent framework
- All open-source contributors whose libraries are used in this project
