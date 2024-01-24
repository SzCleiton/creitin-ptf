<template>
<div v-if="!isTouchScreen" class="ball" ref="ball"></div>
</template>

<script>
import {
    gsap
} from 'gsap';
export default {
    data() {
        return {
            ballPosition: {
                x: null,
                y: null,
            },
            isMoving: false,
            isTouchScreen: false,
            canInteract: false,
            animationLimiter: true,
            lastInteractionState: null,
        };
    },

    mounted() {
        this.isTouchScreen = window.matchMedia('(pointer: coarse)').matches;
        if (!this.isTouchScreen) {
            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mousedown', this.onMouseDown)
            window.addEventListener('mouseup', this.onMouseUp)
            this.updateBallPosition();
        }
    },

    beforeMount() {
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mouseup', this.onMouseUp);
    },

    methods: {
        onMouseUp() {
            if (!this.canInteract) {
                const ball = this.$refs.ball;
                gsap.to(ball, {
                    scale: 1,
                    duration: 0.3,
                })
            }
        },
        onMouseDown() {
            if (!this.canInteract) {
                const ball = this.$refs.ball;
                gsap.to(ball, {
                    scale: .6,
                    duration: 0.3,
                })
            }

        },
        onMouseMove(event) {
            this.ballPosition.x = event.clientX - 10;
            this.ballPosition.y = event.clientY - 10;

            this.canInteract = event.target.classList.contains(this.interactionClass);
            if (this.canInteract) {
                this.setInteraction();
            } else {
                this.canInteract = false;
                this.setInteraction();
            }
            this.updateBallPosition();
        },

        updateBallPosition() {
            if (!this.isMoving) {
                this.isMoving = true;
                const {
                    x,
                    y
                } = this.ballPosition;

                if (x !== null && y !== null) {
                    const ball = this.$refs.ball;
                    requestAnimationFrame(() => {
                        gsap.to(ball, {
                            x: x,
                            y: y,
                            delay: 0,
                            duration: 0,
                        });
                    });
                    this.isMoving = false;
                } else {
                    this.isMoving = false;
                }
            }
        },

        setInteraction() {
            const newInteractionState = this.canInteract;
            if (newInteractionState !== this.lastInteractionState) {
                const ball = this.$refs.ball;
                const scale = newInteractionState ? 2.5 : 1;
                gsap.to(ball, {
                    scale: scale,
                    delay: 0,
                    duration: 0.3,
                });

                this.lastInteractionState = newInteractionState;
            }
        },
    },

    computed: {
        interactionClass() {
            return 'interact-cursor';
        },
    },
};
</script>

<style lang="scss" scoped>
@import './CustomCursor.scss';
</style>
