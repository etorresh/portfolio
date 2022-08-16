ng build --prod --base-href ./
echo "www.etorresh.com" >> dist/portfolio-simplified/CNAME
npx angular-cli-ghpages --dir=dist/portfolio-simplified

