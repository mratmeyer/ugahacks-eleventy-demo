---
title: Welcome to UGAHacks 7!
layout: main
permalink: "index.html"
description: A demo of static site generation for UGAHacks.
---

Thanks for coming! This is a demo of static site generation.

## Latest posts

Read the latest posts.

{%- for post in collections.posts -%}
    <div>
        <a href="{{ post.url | url }}">
            {{ post.data.title or title }}
        </a>
    </div>
{%- endfor -%}