# SOCKETIO-AGAR-IO-CLONE

A multiplayer real-time game inspired by **Agar.io** built with **Socket.IO** and **Express**. Players control a cell that grows by consuming smaller cells, with the objective of becoming the largest cell while avoiding being consumed by larger players.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Theory - How It Works](#theory---how-it-works)
- [Installation](#installation)
- [Usage](#usage)

## Overview

**SOCKETIO-AGAR-IO-CLONE** is a browser-based multiplayer game that uses **Socket.IO** to handle real-time communication between the game server and multiple clients. Each player controls a single cell in a dynamic game world where the goal is to grow by absorbing smaller cells and avoiding larger ones.

The server broadcasts the game state to all connected clients, ensuring that movements, collisions, and interactions are synchronized in real time. Players can join or leave the game at any time, making for a fast-paced and competitive environment.

## Features

- Real-time multiplayer gameplay with live updates on player movements.
- Players can grow by consuming smaller cells.
- Dynamic and responsive game world where players can join or leave at any time.
- Collision detection for interactions between player cells.
- Simple, clean, and responsive user interface built with **Bootstrap**.
- Smooth gameplay mechanics with fast client-server communication.

## Tech Stack

- **JavaScript**: Core game logic and client-server communication.
- **HTML/CSS**: For structuring and styling the game interface.
- **Bootstrap**: For responsive UI layout and design.
- **Socket.IO**: Real-time, bidirectional event-based communication.
- **Express**: Lightweight web framework to serve the game client and manage server-side logic.

## Theory - How It Works

The game is built on the client-server architecture. Here’s a quick breakdown of how it works:

- **Client-side**: Each player controls their cell through the browser. The player's movements are captured and sent to the server using **Socket.IO** events. The client also receives updates from the server about the positions and sizes of other players.
- **Server-side**: The server, built with **Express** and **Socket.IO**, manages all player connections and maintains the game state. It processes the movements of each player, detects collisions, and broadcasts updates to all connected clients. This ensures that all players have a consistent view of the game world.

- **Real-time communication**: **Socket.IO** allows for low-latency, event-driven communication between the server and clients. Each time a player moves, the server immediately broadcasts the movement to all other players. Likewise, if a player is eaten or leaves the game, the server updates all clients in real-time.

## Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bohdanadev/socketio-agar-io-clone.git
   ```

2. Install dependencies:

   ```bash
   cd socketio-agar-io-clone
   npm install
   ```

3. Start the server:

   ```bash
   npm run start
   ```

4. Open your browser and navigate to:
   ```bash
   http://localhost:3030
   ```

## Usage

- Use the arrow keys or mouse to control your cell.
- Grow by eating smaller cells and avoid larger ones.
- The game will automatically update as other players join, leave, or grow.
