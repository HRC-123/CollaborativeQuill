# Collaborative Quill

Collaborative Quill is a project  developed to efficiently share documents in real time

Website : [CollaborativeQuill](https://collaborativequill.onrender.com)

## Technologies Used
- Reactjs
- Tailwind
- Quilljs
- Socket-io
- Uuid
- Mongo DB

## Features

- Real-time Collaboration
- Document Sharing
- Interactive Content
- Dynamic Loading
- Customizable Document Names
- Code Integration
- Multimedia Support

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Collaborative Quill.

```bash
# Clone the repo
git clone https://github.com/HRC-123/CollaborativeQuill.git

# Navigate to client and install the packages required in terminal 1
cd client
npm install

# Navigate to client and install the packages required in terminal 2
cd server
npm install

# Prerequisites before using the app

# Go to client/src/Components/Editor.jsx
# Replace the socketServer with - const socketServer = io("http://localhost:9000");

# Go to server/index.js
# Replace the origin with -  origin: "http://localhost:3000",
```

## Usage

```bash
# In terminal 1 i.e client
npm start

# In terminal 2 i.e server
npm start
```

## Contributing

Pull requests are welcome. 

For major changes, please open an issue first to discuss what you would like to change.

Only genuine pull requests are merged.

## Hosted
The website is hosted on [Render](https://render.com/)

## Authors
- [@hrc-123](https://github.com/HRC-123)
