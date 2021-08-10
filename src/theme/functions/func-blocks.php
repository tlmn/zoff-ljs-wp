<?php

function page_allowed_block_types_all($allowed_blocks, $post)
{
    global $BLOCKS;
    $allowed_blocks = [
        "ljs/accordion-container",
        "ljs/accordion-item",
        "ljs/bio",
        "ljs/breaker",
        "ljs/button",
        "ljs/contact-bar-container",
        "ljs/contact-bar-item",
        "ljs/container",
        "ljs/content-teaser-column-body",
        "ljs/content-teaser-column-title",
        "ljs/content-teaser",
        "ljs/cover",
        "ljs/form",
        "ljs/hero",
        "ljs/image",
        "ljs/intro-text",
        "ljs/latest-event",
        "ljs/list",
        "ljs/quote",
        "ljs/tiles-container",
        "ljs/tiles-single",
    ];

    return $allowed_blocks;
}
