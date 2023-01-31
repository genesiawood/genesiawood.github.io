Editing design Steps

1. go to [source](https://play.teleporthq.io/projects/up-start-finance-m0u69r/editor/6cf2581f-04ba-445f-8175-8e2810a2e03a)
2. export `designer` + `next js`
3. delete tsx files inside `components` in repo. ( leave `posts` folder )
4. copy files inside inside `components` from downloaded zip to `components` of repo.
5. overwrite `pages/style.css`
6. run `rename_jsx_to_tsx.sh`

Deploy steps
1. Test docker build and run
docker build -t app-runner-nextjs .
docker run  -p 3000:3000 app-runner-nextjs
2. open localhost:3000
3. follow `view push command` in [here](https://ap-northeast-1.console.aws.amazon.com/ecr/repositories/private/974382770131/homepage?region=ap-northeast-1)
  login with `corp-site@genesiawood.com`