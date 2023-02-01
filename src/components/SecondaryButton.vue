<template>
<button>
    <slot>
    </slot>
</button>
</template>

<style scoped>
    button {
        width: 10rem;
        height: 3rem;
        margin: 0.5rem;
        background-image: linear-gradient(to right, #3d2fc4 0%, #003fa8 51%, #002e48 100%);
        background-size: 200% auto;
        color: #f4f1f1;
        font-size: 1.2rem;
        border: none;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }

@media screen and (max-width: 1080px) {
    button {
        width: 10rem;
        height: 2rem;
    }
}
</style>