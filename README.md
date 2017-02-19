YouTube videos in your book
==============

### How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["youtube"]
}
```

You can now add YouTube videos to your book using this tag:

```markdown
Take a look at this video:

{% youtube src="https://www.youtube.com/watch?v=9bZkp7q19f0" %}{% endyoutube %}
```

The video will be replaced by the embed iframe in the website, and by a link in the ebook version.
