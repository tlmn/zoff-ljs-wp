<?php

function page_allowed_block_types_all($allowed_blocks, $post)
{
    global $BLOCKS;
    global $typenow;

    $allowed_blocks = [
        "core/button",
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
    
    if ($typenow == "beschluss") {
        array_push($allowed_blocks, "core/freeform");
    }

    return $allowed_blocks;
}
