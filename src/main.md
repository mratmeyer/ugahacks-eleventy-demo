---
permalink: "index.html"
---
# Welcome to UGAHacks!
This is the main site!

{%- for post in collections.posts -%}
    <a href="{{ post.url | url }}">
        {{ post.data.title or title }}
    </a>
{%- endfor -%}