# KromHR

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Recommended version: 20+)
- [Docker](https://www.docker.com/) & Docker Compose

---

### Video Demo Local

For a visual guide, watch the [video demo]https://drive.google.com/file/d/1jTGgvFqKNDDpXhZcPCZ386tO_e87rb04/view?usp=sharing) to see the setup and running of the project.

## Running the Project Locally

### 1. Clone the Repository

```sh
git clone https://github.com/ariefardi/krom-fe.git
cd KromHR
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

### 4. Running Tests (Optional)

```sh
npm run test
```

### 5. Build the Project for Production

```sh
npm run build
```

---

## Running the Project with Docker

### 1. Build and Start the Containers

```sh
npm run docker
```

### 2. Stop and Remove Containers

```sh
docker compose down
```

### 3. Reset Docker Volumes (Optional)

If you need to delete all database data and start fresh:

```sh
docker compose down -v
```
