<script setup lang="ts">
import FeatureItemLeft from './FeatureItemLeft.vue';
import FeatureItemRight from './FeatureItemRight.vue';
import IconSecurity from './icons/IconSecurity.vue';
import IconTrasparency from './icons/IconTrasparency.vue';
import IconTrustworthy from './icons/IconTrustworthy.vue';
</script>

<template>
    <!-- 1. Security -->

    <FeatureItemLeft>
        <template #icon>
            <IconSecurity />
        </template>
        <template #heading>Built in security</template>

        <p class="text-sm text-muted-foreground">
            Patents Malawi is powered by the <span class="font-light underline text-primary">blockchain</span>
            technology, which
            means data is secure from the word go!
        </p>
    </FeatureItemLeft>

    <!-- 2. Transparency -->
    <FeatureItemRight>
        <template #icon>
            <IconTrasparency />
        </template>

        <template #heading>Transparent</template>

        <p class="text-sm text-muted-foreground">Every record transaction can be viewed by anyone in it's enterity as
            data
            on the <span class="font-light underline text-primary">blockchain</span> is public including the technology
            managing the data.</p>
    </FeatureItemRight>

    <!-- 3. Trustworthy -->

    <FeatureItemLeft>
        <template #icon>
            <IconTrustworthy />
        </template>

        <template #heading>Trustworthy</template>

        <p class="text-sm text-muted-foreground">Not only every record transanction can be seen, each single transaction
            can
            never be changed forever, only
            new
            ones can be created, meaning no one has the ability to invalidate the integrity of your data.</p>
    </FeatureItemLeft>

</template>
