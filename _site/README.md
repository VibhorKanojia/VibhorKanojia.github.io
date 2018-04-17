This blog is created using Jekyll to prepare for technical interview questions.

Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites, written in Ruby.

Each directory in the root folder is treated as a category. Each directory should have a "\_posts" directory which will contain the posts

Each post should have a name format as YYYY-MM-DD-title.MARKDOWN to be recognized by jekyll

Each post should have a front matter to specify the title, layout to use, category, tags, and other variables

"\_config" file mentions the Jekyll theme to be used in the project. Currently using 'Cayman' theme

"content" category/directory has the list of categories to be shown in the side bar.

stylesheets directory contains "style.scss" css file which compiles and becomes "style.css". This scss file should also include front matter, and should import the base site theme.
Any rules added into this file will override the rules mentioned in base site theme.

Bundle is being used to preview the site locally. The command to start the local server:
$bundle exec jekyll serve
