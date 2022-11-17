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
    <div data-tab-value="#tomi_marx_release">
        <span class="tab-title">Release party Tomi Marx</span>
        <span class="tab-info">13 novembre 2021 - Chapêlmêle (Alençon)</span>
    </div>
    <div data-tab-value="#maison_gasseau">
        <span class="tab-title">Oye Oye !</span>
        <span class="tab-info">22 mai 2022 - Maison du Gasseau (Saint-Léonard-des-Bois)</span>
    </div>
    <div data-tab-value="#fete_musique">
        <span class="tab-title">Fête de la musique</span>
        <span class="tab-info">21 juin 2022 - Alençon</span>
    </div>
</div>

<div class="tab-content">
    <div class="tabs__tab active" id="tomi_marx_release" data-tab-info>
        <span class="mobile-info">13 novembre 2021 - Chapêlmêle (Alençon)</span>
        {{< gallery dir="/images/tomi_marx/" />}}
        <a style="color: #333333; font-size: 0.8rem; margin-left: 3rem" 
           href={{<ref "/news/tomi-marx-ep" >}}> 
            Lien vers l'évènement
        </a>
    </div>
    <div class="tabs__tab" id="maison_gasseau" data-tab-info>
         <span class="mobile-info">22 mai 2022 - Maison du Gasseau (Saint-Léonard-des-Bois)</span>
        {{< gallery dir="/images/oye_oye/" />}}
        <a style="color: #333333; font-size: 0.8rem; margin-left: 3rem" 
           href={{<ref "/news/oye-oye" >}}> 
            Lien vers l'évènement
        </a>
    </div>
      <div class="tabs__tab" id="fete_musique" data-tab-info>
        <span class="mobile-info">21 juin 2022 - Alençon</span>
        {{< gallery dir="/images/fete_musique/" />}}
        <a style="color: #333333; font-size: 0.8rem; margin-left: 3rem" 
           href={{<ref "/news/origamie-fête-la-musique" >}}> 
            Lien vers l'évènement
        </a>
    </div>
</div>


{{< load-photoswipe >}}