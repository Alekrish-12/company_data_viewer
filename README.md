# Company Chart Viewer

## Overview
This project is a simple web application that displays a list of companies and visualizes company-specific data in a chart. It uses data from a CSV file and features a responsive design with Bootstrap. The chart is rendered using Chart.js.

## Features
- Displays a list of companies on the left-hand side.
- Shows a chart with company data when a company is selected.
- Data is fetched from a CSV file and visualized using Chart.js.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (for backend server, if needed)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver) for VS Code (for local development)

### Steps to Run the Project

1. **Clone the Repository**
   
   git [clone https://github.com/your-username/company_chart_viewer.git](https://github.com/Alekrish-12/company_data_viewer)
   cd company_chart_viewer
Install Dependencies

If using the Node.js backend:
npm install
Run the Project

Using Live Server in VS Code:
Open the index.html file in VS Code.
Right-click and select "Open with Live Server".
Manually in Browser:
Open index.html directly from your file system in your web browser.
Start Node.js Server (if using backend):

node server.js
Visit [http://localhost:3000](http://localhost:3000/).
Usage
Open the Webpage:

The webpage displays a list of companies on the left.
Click on a company name to view its data in a chart on the right.
Data Interaction:

Clicking a company name will dynamically update the chart to show the relevant metrics.
File Descriptions
index.html: The main HTML file that sets up the webpage structure.
app.js: JavaScript file for handling data fetching and chart rendering.
style.css: Optional CSS file for custom styles.
dump.csv: CSV file containing company data (used for demonstration purposes).
Notes
Ensure that the CSV file is correctly formatted and accessible.
If any issues arise, check the browser console for errors.
Contributing
Feel free to fork this repository and submit pull requests with improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.



### Summary:
- **Overview**: Brief description of what the project does.
- **Features**: Key functionalities.
- **Installation**: Steps to get the project up and running.
- **Usage**: How to interact with the project.
- **File Descriptions**: Overview of project files.
- **Notes**: Additional information.
- **Contributing**: Information for contributors.
- **License**: Licensing information.

