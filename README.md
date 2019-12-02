## local development set up
1. yarn install
2. yarn start

### This site is built with Gatsbyjs, please check  https://www.gatsbyjs.org/docs/ for reference

## submodule - master branch must be the newest verison
add new version doc (branch in repo)
1. cn version
```
    git submodule add -b your-version-branch https://github.com/zilliztech/doc_cn.git src/pages/doc_cn/versions/your-version-branch
```

2. en verion
```
    git submodule add -b your-version-branch https://github.com/zilliztech/doc_en.git src/pages/doc_en/versions/your-version-branch
```