# Image Gallery App

This is a simple React app that displays an image gallery fetched from an API and allows users to view individual images in a larger view.

## Features

- Fetches a collection of images from the API.
- Displays a loading spinner while fetching data.
- Allows users to click on a thumbnail to view a single image in larger view with its title and description.

## Image

![Main Page](https://drive.google.com/file/d/1CknwdCPdig3rkQNHauDTwMPCJ977u6MF/view?usp=drivesdk)
![Single Page](https://drive.google.com/file/d/1ClEQPL7Hoa4NPygzYWHobSNuLVe3qryn/view?usp=drivesdk)


## Components

* Gallery Component
The Gallery component fetches and displays a collection of images from the API. It uses the react-infinite-scroll-component for infinite scrolling.

* SinglePage Component
The SinglePage component displays a single image along with its title and description in a larger view. It fetches the image data based on the provided ID from the URL.

* Spinner Component
The Spinner component displays a loading spinner while data is being fetched.

- Dependencies
  - axios: For making API requests.
  - react-router-dom: For handling routing within the app.