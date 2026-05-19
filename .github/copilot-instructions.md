# Copilot Instructions for AI Agents

## Project Overview
- This is a minimal Node.js project (`percy-demo`) using CommonJS modules.
- The entry point is `index.js` (not present yet).
- No source files or custom scripts are present as of now.

## Key Files
- `package.json`: Defines project metadata and scripts. Only a placeholder `test` script exists.
- `.github/copilot-instructions.md`: (this file) Guidance for AI agents.

## Workflows
- **Install dependencies:** Use `npm install`.
- **Run tests:** No real tests are defined. The default `npm test` script will always fail.
- **Start application:** No start script or main file is present. Create `index.js` to define entry logic.

## Conventions
- Uses CommonJS (`type: commonjs` in `package.json`).
- No custom project structure or conventions yet. Follow standard Node.js/JavaScript practices.

## Recommendations for AI Agents
- If adding new code, create `index.js` as the main entry point.
- Add real test scripts and source files as needed.
- Update this file as the project evolves to document new conventions, workflows, or architecture.

## Example: Adding a Main File
```js
// index.js
console.log('Percy demo app running');
```

## Integration & Dependencies
- No external dependencies are defined yet.
- Add dependencies via `npm install <package>` and update `package.json` accordingly.

---
Update these instructions as the project grows. If you add new workflows, scripts, or conventions, document them here for future AI agents.