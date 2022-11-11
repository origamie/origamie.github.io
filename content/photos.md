---
description: ""
title: "Photos"
draft: flase
layout: photos

type: page
menu:
    main:
        weight: 5
---
<div class="tabs">
    <span data-tab-value="#fete_musique">Fête de la musique</span>
    <span data-tab-value="#tomi_marx_release">Tomi Marx RP</span>
    <span data-tab-value="#maison_gasseau">Oye Oye !</span>
</div>

<div class="tab-content">
    <div class="tabs__tab active" id="fete_musique" data-tab-info>
        {{< gallery dir="/images/fete_musique/" />}}
    </div>
    <div class="tabs__tab" id="tomi_marx_release" data-tab-info>
        <p style="font-size: 14px">Les photos arrivent..</p>
    </div>
    <div class="tabs__tab" id="maison_gasseau" data-tab-info>
        <p style="font-size: 14px">Les photos arrivent..</p>
    </div>
</div>

{{< load-photoswipe >}}