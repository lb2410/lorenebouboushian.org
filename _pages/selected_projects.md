---
layout: page
name: SELECTED PROJECTS
position: 3
---

<div class="projectsGrid">
{%- assign pages = site.pages | where_exp:"page", "page.path contains '/projects/'" | sort: 'position' -%}
{%- for page in pages -%}
  {%- assign active = nil -%}
  {%- if page.url == page.url -%}
    {%- assign active = 'active' -%}
  {%- endif -%}
  <div>
    <a class="{{active}}" href="{{ page.url | relative_url }}">
      <img src="{{page.image}}" alt="" />
      <div class="name">{{ page.name | escape }}</div>
    </a>
  </div>
{%- endfor -%}
</div>
