---
title: What's new in Jekyll 3.4
permalink: "/what-s-new-in-jekyll-3-4/"
description: Jekyll 3.4.0 was released with some noteworthy enhancements.
date: 2017-02-20T09:00:00Z
tags:
  - Jekyll
---

*This was originally a guest post written for the [Forestry.io blog](https://tina.io)*

Jekyll 3.4.0 was release on the 27th of January 2017 with some noteworthy enhancements that I'd like to share with you.

So what's new?

## Add connector param to ‘array_to_sentence_string’ filter

- **array** - The list of strings to join.
- **string** - A string can be any text inside quotes. In this example I will use Jekyll tags.
- **connector** - The word placed before the last word in the array. The default connector Jekyll uses is the word “and”.

Still with me?

Here is a real world example. Our post has the following tags.

```yaml
tags:
	- one
	- two
	- three
```

We can then create an `_include` file for our post tags using

```liquid
{% raw %}
{{ page.tags | array_to_sentence_string }}
{% endraw %}
```

This will output our tags

```
one, two, and three
```

Easy right?

Now Jekyll 3.4.0 allows you to change the default connector to use other terms such as "or” like so.

```liquid
{% raw %}
{{ page.tags | array_to_sentence_string: 'or' }}
{% endraw %}
```

This will output

```
one, two, or three
```

## Group an array's items using a Liquid expression filter

Jekyll previously allowed you to group your content by a given property using the `group_by` filter. As an example let’s group all site members working for each company.

Our Jekyll site’s `_config.yml` includes the following members.

```yaml
members:
  - name: "Scott"
    company: "Forestry"
  - name: "Jordan"
    company: "Forestry"
  - name: "Parker"
    company: "GitHub"
```

Jekyll can apply the `group_by` filter with company as the parameter using

```liquid
{% raw %}
{{ site.members | group_by:"company" }}
{% endraw %}
```

Site members names are collected into an array which outputs the following information

```ruby
{"name"=>"Forestry", "items"=>[{"name"=>"Scott", "company"=>"Forestry"},{"name"=>"Jordan", "company"=>"Forestry"}], "size"=>2}
{"name"=>"Github", "items"=>[{"name"=>"Parker", "company"=>"Github"}], "size"=>1}
```

To make this information more useful, we can now create a list of members grouped by their company name

```liquid
{% raw %}
{% assign groups = site.members | group_by: "company" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>
    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
{% endraw %}
```

This will output the following list of site members organised by the company they work for.

```html
<h3>Forestry</h3>
<ul>
  <li>Scott</li>
  <li>Jordan</li>
</ul>
<h3>Github</h3>
<ul>
  <li>Parker</li>
</ul>
```

Jekyll 3.4.0 introduced the `group_by_exp` filter which allows you to group an array of items using a Liquid expression.

Now, we have the following data about our company software.

```yaml
software:
  - name: "New shiny software"
    version: "0.4"
  - name: "ABC software"
    version: "1.2"
  - name: "XYZ software"
    version: "1.9"
```

We can apply the `group_by_exp` filter to group our software by *major* version number. For major version we are not concerned with the decimal places (just 1.x, 2.x, 3.x, etc).  So our expression will use the **slice** filter. Like so:

```liquid
{% raw %}
{{ page.software | group_by_exp:"item", "item.version | slice: 0" }}
{% endraw %}
```

This outputs the following information

```ruby
{"name"=>"0", "items"=>[{"name"=>"New shiny software", "version"=>"0.4"}], "size"=>1}
{"name"=>"1", "items"=>[{"name"=>"ABC software", "version"=>"1.2"},{"name"=>"XYZ software", "version"=>"1.9"}], "size"=>2}
```

We will group our software by version

```liquid
{% raw %}
{% assign groups = page.software | group_by_exp:"item", "item.version" | slice: 0" %}
{% for group in groups %}
  <h3>Major version number {{ group.name }}</h3>
    <ul>
    {% for item in group.items %}
      <li>{{item.name}}</li>
    {% endfo r%}
    </ul>
{% endfor %}
{% endraw %}
```

This gives us the following output

```html
<h3>Major version number 0</h3>
<ul>
  <li>New shiny software</li>
</ul>

<h3>Major version number 1</h3>
<ul>
  <li>ABC software</li>
  <li>XYZ software</li>
</ul>
```

In conclusion we can also use the `group_by_exp` filter to output different information such as site members names by changing the Liquid expression.

```liquid
{% raw %}
{{ site.members | group_by_exp:"item", "item.name" }}
{% endraw %}
```

This will output

```ruby
{"name"=>"Scott", "items"=>[{"name"=>"Scott", "company"=>"Forestry"}], "size"=>1}
{"name"=>"Jordan", "items"=>[{"name"=>"Jordan", "company"=>"Forestry"}], "size"=>1}
{"name"=>"Parker", "items"=>[{"name"=>"Parker", "company"=>"Github"}], "size"=>1}
```

We can create a list of site members names like so

```liquid
{% raw %}
{% assign groups = site.members | group_by_exp: "item", "item.name" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>
{%endfor%}
{% endraw %}
```

Output:

```html
<h3>Scott</h3>
<h3>Jordan</h3>
<h3>Parker</h3>
```

## Documentation updates

- Jekyll’s plugin page now showcases the most [popular plugins](http://jekyllrb.com/docs/plugins/#available-plugins/) .

- The quick-start guide was updated so there’s never been a better time to [try Jekyll](https://jekyllrb.com/).

## Jekyll warnings

- Jekyll now notifies you when you have an error in an `_include` file. This should save you some time tracking down bugs.

- Jekyll now prevents double forward slash errors. In this case Jekyll will not append a forward slash to `url:` because the `baseurl:` input already contains ‘/‘.

    ```yaml
    url: "http://example.com"
    baseurl: "/blog"
    ```

- Jekyll docs recommend ruby version 2.0 or above. If you have updated to ruby 2.4.0 you may have noticed the warnings “Bignum is deprecated” and “Fixnum is deprecated”. These warning come from the activesupport gem which is a Jekyll dependancy and will be fixed in an upcoming release. For now you can just ignore those warnings. You haven't done anything wrong.

Let me know if you found these tutorials helpful. Happy Jekylling!
