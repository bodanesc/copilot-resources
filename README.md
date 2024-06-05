# Introduction

This is a refactorization of the Copilot Partner Readiness GitHub project, using [Ruby](https://rubyinstaller.org/) and [Jekyll](https://jekyllrb.com/).
In order to run the project, you need to have Ruby installed and the Jekyll Gem added.

The project is deployed using GitHub Actions and published as a static website. 
To debug locally, you have to run the following commands:

```
$env:BUNDLE_GEMFILE = "Gemfile.dev"
bundle exec jekyll serve
```