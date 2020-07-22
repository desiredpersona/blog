---
title: How to add Disqus Comments to your Jekyll blog
description: Learn how to setup Disqus comments plug-in on your Jekyll blog.
date: 2016-05-11T22:30:00Z
lastModified: 2019-07-14T14:52:00Z
tags: 
  - Jekyll
  - Disqus
---

Ah so you want to learn how to add Disqus comments to your Jekyll blog. Look no further, this guide will attempt to keep the code clutter free and as reusable as possible.

Let's get started!

First sign up for a [Disqus account](https://disqus.com){rel="nofollow"} if you haven't already.

Next register your Jekyll website with Disqus by creating a unique [Disqus shortname](https://help.disqus.com/installation/whats-a-shortname){rel="nofollow"}.

Open your Jekyll sites `config.yml` file and add the following code. Remember to change `my_disqus_shortname` below which is just a placeholder for your own websites unique Disqus shortname that you created earlier.

```yaml
# Disqus Comments
disqus:
    # Leave shortname blank to disable comments site-wide.
    # Disable comments for any post by adding `comments: false` to that post's YAML Front Matter.
    shortname: my_disqus_shortname
```

Create a file called `disqus_comments.html` in Jekyll’s `_includes` folder and add the following code and save the file.

```js
{% raw %}{% if page.comments != false and jekyll.environment == "production" %}{% endraw %}

  <div id="disqus_thread"></div>
  <script>
    var disqus_config = function () {
      this.page.url = '{% raw %}{{ page.url | absolute_url }}{% endraw %}';
      this.page.identifier = '{% raw %}{{ page.url | absolute_url }}{% endraw %}';
    };
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://{% raw %}{{ site.disqus.shortname }}{% endraw %}.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% raw %}{% endif %}{% endraw %}
```

The above codeblock includes your [ Disqus Universal Embed Code](https://disqus.com/admin/universalcode/){rel="nofollow"}. You may have noticed that i wrapped the code between `{% raw %}{% if page.comments != false and jekyll.environment == "production" %}{% endraw %}` and `{% raw %}{% endif %}{% endraw %}` liquid if statement. This included if statement will allow you to disable Disqus comments on any blog post. You simply add `comments: false` in that posts [YAML front-matter](https://jekyllrb.com/docs/frontmatter/). As an added bonus it will also prevent Disqus loading when Jekyll's environment is set to development.

Finally, open your posts layout file normally called `post.html` which is located in your `_layouts` folder and add the following liquid include tag just after the end `</article>` tag. This will load Disqus comments right underneath your blog posts when Jekyll's environment is set to production.

```liquid
{% raw %}{% if site.disqus.shortname %}
  {% include disqus_comments.html %}
{% endif %}{% endraw %}
```

To build your Jekyll site in production environment use the following command.

```shell
JEKYLL_ENV=production bundle exec jekyll build
```

Done!

Your Disqus comment system should now be working correctly after you push these changes to your live website.
