# Box Manager App

This React application allows users to manage boxes with custom dimensions and colors. Users can add new boxes, view a list of existing boxes, and remove boxes from the list.

## Features

- Add a new box with custom width, height, and color.
- View a list of existing boxes with their dimensions and colors.
- Remove boxes from the list.

## Components

### NewBoxForm

The `NewBoxForm` component allows users to input the width, height, and color of a new box. Upon submission, this data is sent to the `BoxList` component for addition to the list of boxes.

### BoxList

The `BoxList` component manages the list of boxes. It renders the `NewBoxForm` component for adding new boxes and displays the list of existing boxes using the `Box` component. Users can also view the total number of boxes added.

### Box

The `Box` component represents an individual box with a specified width, height, and color. It renders a colored box with dimensions based on the provided width and height. Users can remove a box by clicking the ❇️X button.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Enter the desired width, height, and color for a new box in the form fields.
2. Click the "Add box" button to add the box to the list.
3. View the list of added boxes.
4. To remove a box, click the ❇️X button next to the box.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Credits

This project was created by Samuel Abinsinguza.
