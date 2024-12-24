<script setup lang="ts">

</script>
<template>
    <div class="divide-y-2  py-8 px-4 text-center">
        <p class="text-orange-500 font-semibold text-lg pb-2">
            <slot name="english-version"></slot>
        </p>
        <h1 class="text-4xl font-bold pt-4 text-slate-800">
            <slot name="indonesian-version"></slot>
        </h1>
    </div>
</template>

<style scoped></style>