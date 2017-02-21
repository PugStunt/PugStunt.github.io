# Pug Stunt blog

This is the repo for [Pug Stunt blog](https://PugStunt.github.io/).

You can find more information about us [here](https://PugStunt.github.io/about/).

## The engine
This blog is made using [Hugo](http://gohugo.io).
In order to add a new post **and see it locally** you'll need to download and install it in your computer. However, you don't need it just to add a new post.

You can download Hugo [here](https://github.com/spf13/hugo/releases).

## How it works
As a post author, you can create a new posting just by adding a new file in the correct place.

After creating a post, you can commit your new file in a custom branch and create a  pull request to merge it into master branch. Add some reviewers to check it.

After merged, we need to "release" the post.

## Add a new post
There is a simple `hugo new folder/title.md` command that create a new empty post. The only weird here is the folder name.  It must be `portfolio` because it's defined inside the blog theme.

For convention, the file extension should be `.md` and use `_` instead of spaces. Try to use only letter and numbers.

In the command line go to the project folder and run this:
```
hugo new portfolio/title_of_my_new_post.md
```

It'll create a new file:
```
+++
date = "2017-02-21T15:02:15-03:00"
title = "title_of_my_new_post"
showonlyimage = false
image = ""
draft = true

+++
```

The file can also be created manually, without Hugo.

You can safely remove the `draft` line.

Add the post content after the last `+++`

### Post Image

Please, consider adding an nice image to your post.
General rules:
* The image must have 300px width.
* The height may have from 200px to 450px. If >= 400px, the `showonlyimage` must be `true`.
* Make sure you (and we) have the rights to use the image.
* Don't use external images. The image must be added in our server. Images go to `static/img/` folder. To avoid having too much images in the same folder, please use a year folder, like: `/static/img/2017/title_of_my_new_post.jpg`

### Check my changes

After creating your post you can run it locally to check how it looks like.
From the project folder, run:
```
hugo server -w
```

And then access: [http://localhost:1313](http://localhost:1313). If you change the post content and save it the browser will refresh the page with your changes.

### Release
After merged all new posts to master branch. You need to check it out locally, and run `hugo` (with no params). Hugo will create the static html files in the `/docs` folder.

Push the change to Github (it should change the folder `/docs` only)

Done.

Github will check and update the server with the most recent content.
