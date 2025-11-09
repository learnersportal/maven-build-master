# node-sample-app

A minimal Node.js sample application added to learnersportal/maven-build-master for demonstration and local testing.

## Files

- `index.js` — tiny HTTP server with `/health` endpoint and default text response.
- `test.js` — small smoke test that calls `/health`.
- `package.json` — project metadata and npm scripts.
- `.gitignore` — ignores node_modules and common files.

## Run locally

1. Install dependencies (none required for this sample):
   ```bash
   npm install
   ```

2. Start server:
   ```bash
   npm start
   ```

3. In another terminal, run the smoke test:
   ```bash
   npm test
   ```

4. Open http://localhost:3000/ and http://localhost:3000/health

## Notes

- This is intentionally dependency-free (uses built-in `http`) so it's easy to run in many environments.
- If you prefer an Express-based sample, I can replace `index.js` and add `express` to `package.json`. 
