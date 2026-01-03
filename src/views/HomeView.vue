<script setup lang="ts">
import logo from '@ogmatechnologies/assets/media/logo_flag.svg';
import old from '@ogmatechnologies/assets/media/home/old.png';
import milo from '@ogmatechnologies/assets/media/home/MiloV1.png';
import objectives from '@ogmatechnologies/assets/media/home/objectives.png';
import unis from '@ogmatechnologies/assets/media/home/unis.png';

import PartnersComponent from '@ogmatechnologies/components/PartnersComponent.vue';
import DescriptiveContentComponent from '@ogmatechnologies/components/DescriptiveContentComponent.vue';
import i18n from '@ogmatechnologies/plugins/i18n';
</script>

<template>
  <section>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        <span>
          {{ $t('our') }}
          <span class="text-primary-500">
            {{ $t('mission') }}
          </span>
        </span>
      </template>
      <template #content1>
        {{ $t('mission_content') }}
      </template>
      <template #image>
        <img :src="logo" alt="GéniAle logo" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="false">
      <template #title>
        <span v-if="i18n.global.locale.value === 'fr'">
          {{ $t('ingredients') }}
          <span class="text-primary-500">
            {{ $t('local') }}
          </span>
        </span>
        <span v-else>
          <span class="text-primary-500">
            {{ $t('local') }}
          </span>
          {{ $t('ingredients') }}
        </span>
      </template>
      <template #content1>
        {{ $t('ingredients_content') }}
      </template>
      <template #image>
        <img :src="old" alt="houblon" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        <span v-if="i18n.global.locale.value === 'fr'">
          {{ $t('beer_quality_title') }}
          <span class="text-primary-500">
            {{ $t('quality') }}
          </span>
        </span>
        <span v-else>
          <span class="text-primary-500">
            {{ $t('quality') }}
          </span>
          {{ $t('beer_quality_title') }}
        </span>
      </template>
      <template #content1>
        {{ $t('beer_quality_content') }}
      </template>
      <template #image>
        <img :src="milo" alt="quality" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="false">
      <template #title>
        {{ $t('brewing_title') }}
      </template>
      <template #content1>
        {{ $t('brewing_content') }}
      </template>
      <template #image>
        <img :src="objectives" alt="production" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        {{ $t('join_our_team_title') }}
      </template>
      <template #content1>
        {{ $t('join_our_team_content') }}
      </template>
      <template #image>
        <img :src="unis" alt="team" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
  </section>
</template>
