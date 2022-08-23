<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>personal profile</template>
    <h4>
      (pendidikan)
      <br>
      SMPIT 20 MEI 2017-2020
      <br>
      Smk taruna bhakti 2020-2023
      <br>
      (keterampilan)
      <br>
      Backand devloper
      <br>
      (pengalaman)
      <br>
      laravel,API,html,css

    </h4>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>education</template>
    <h4>
      SMK Taruna bhakti
      <br>
      2020-2023
      <br>
      web devloper
    </h4>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Experience</template>
    <ul>
      <li>gaming landing page 1</li>
      <li>food delivery</li>
      <li>pemesanan hotel</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>language</template>
    <ul>
      <li>English</li>
      <li>Indonesia</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Contact</template>
    (+62) 813-1546-1680
    <br>
    suryahaidar12345@gmail.com
    <br>
    <a target="_blank" href="https://github.com/surahaidar">Surya haidar</a>.
  </WelcomeItem>
</template>
