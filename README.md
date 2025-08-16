# sarah-coyne.github.io

## For Deployment

```bash
cd sarahcoyne
npm install
ng build --configuration=production --base-href=/ 
npx angular-cli-ghpages --dir=dist/sarahcoyne/browser
```