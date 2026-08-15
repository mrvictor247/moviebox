# moviebox

## Deploy to GitHub Pages

1. In `package.json` set the `homepage` field to `https://<your-github-username>.github.io/<repo-name>`.
2. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

3. Commit and push your code to GitHub (ensure the repo name matches the `homepage` path).

```bash
git add .
git commit -m "prepare deploy"
git push origin main
```

4. Deploy:

```bash
npm run deploy
```

Your site will be published at the `homepage` URL (it may take a minute to become available).

If your default branch is not `main`, replace `main` in the commands above with your branch name.
