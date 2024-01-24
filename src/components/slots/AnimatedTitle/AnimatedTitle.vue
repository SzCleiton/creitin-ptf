<template>
<div class="animated-title-container">
    <div class="first-line">
        <span v-for="(word, index) in firstSequence" :key="index" :class="{'animated-item': true,hidden: !wordVisible[index],show: wordVisible[index],}">{{ word }}</span>
    </div>
    <div v-if="secondLine !== ''" class="second-line">
        <span v-for="(word, index) in secondSequence" :key="index" :class="{'animated-item': true,hidden: !wordVisible[index],show: wordVisible[index],}">{{ word }}</span>
    </div>
</div>
</template>
<script>
export default {
    props: {
        firstLine: {
            type: String,
            required: true,
        },
        secondLine: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            firstSequence: [],
            secondSequence: [],
            wordVisible: [],
        };
    },
    computed: {
        allWords() {
            return this.firstSequence.concat(this.secondSequence);
        },
    },
    mounted() {
        this.populateArrays();
        this.animateWords();
    },
    methods: {
        populateArrays() {
            this.firstSequence = this.firstLine.split(' ');
            this.secondSequence = this.secondLine.split(' ');
            this.wordVisible = new Array(this.allWords.length).fill(false);
        },
        animateWords() {
            let index = 0;
            const interval = setInterval(() => {
                this.wordVisible[index] = true;
                index++;
                if (index === this.allWords.length) {
                    clearInterval(interval);
                }
            }, 100);
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'AnimatedTitle.scss';
</style>
