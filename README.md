#HoverState.js

A handy jQuery plugin that preloads your images hover state, then displays it "onHover".

##Requirements:
* jQuery 1.*

##Usage:

Apply .hoverState() to your image. The default behaviour will switch out your image to (image name)-on.(extension). "-on" can be overridden by using the "hoverExt" option.

```
<p><img class="hover_state" src="/images/springload.png" alt="Springload" /></p>

<script type="text/javascript">
    $('.hover_state').hoverState();
</script>
```

##Options:

* **hoverExt** String Define the extra text that gets added to the image's file name on hover Default '-on'
