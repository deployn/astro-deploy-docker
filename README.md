# Astro Deploy Docker

# ... (existing content) ...

## 🐳 Docker Support

This project includes Dockerfiles for containerization.

### Static Site (SSG - default)

1.  **Build the image:**

    ```sh
    docker build -t my-astro-static-app -f Dockerfile.static .
    ```

2.  **Run the container:**
    ```sh
    docker run -p 8080:80 my-astro-static-app
    ```
    Access the site at `http://localhost:8080`.

### Server-Side Rendering (SSR - requires Node adapter)

Ensure you have configured Astro for SSR with the Node adapter first (`pnpm astro add node`).

1. **Build the image:**

   ```sh
   docker build -t my-astro-ssr-app -f Dockerfile.ssr .
   ```

2. **Run the container:**
   ```sh
   docker run -p 4321:4321 my-astro-ssr-app
   ```
   Access the site at `http://localhost:4321`.
