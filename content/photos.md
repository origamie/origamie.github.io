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
    <span data-tab-value="#tomi_marx_release">Tomi Marx RP</span>
    <span data-tab-value="#maison_gasseau">Oye Oye !</span>
    <span data-tab-value="#fete_musique">Fête de la musique</span>
</div>

<div class="tab-content">
    <div class="tabs__tab" id="tomi_marx_release" data-tab-info>
        {{< gallery dir="/images/tomi_marx/" />}}
        <a style="color: #333333; font-size: 0.8rem; margin-left: 3rem" 
           href={{<ref "/news/tomi-marx-ep" >}}> 
            Lien vers l'évènement
        </a>
    </div>
    <div class="tabs__tab" id="maison_gasseau" data-tab-info>
        {{< gallery dir="/images/oye_oye/" />}}
        <a style="color: #333333; font-size: 0.8rem; margin-left: 3rem" 
           href={{<ref "/news/oye-oye" >}}> 
            Lien vers l'évènement
        </a>
    </div>
      <div class="tabs__tab active" id="fete_musique" data-tab-info>
        {{< gallery dir="/images/fete_musique/" />}}
        <a style="color: #333333; font-size: 0.8rem; margin-left: 3rem" 
           href={{<ref "/news/origamie-fête-la-musique" >}}> 
            Lien vers l'évènement
        </a>
    </div>
</div>

{{< load-photoswipe >}}