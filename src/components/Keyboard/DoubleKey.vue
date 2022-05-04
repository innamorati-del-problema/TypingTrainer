<template>
  <div class="key">
    <svg viewBox="0 0 100 100">
      <linearGradient id="gradient" x2="1" y2="1">
        <stop offset="0%" stop-color="#72C53F" />
        <stop offset="100%" stop-color="#5A9D31" />
      </linearGradient>

      <rect
        :class="{ pressedRec: pressed }"
        class="rect"
        width="100"
        height="100"
      />
      <text
        :class="{ pressedTxt: pressed }"
        class="text"
        dominant-baseline="middle"
        text-anchor="middle"
        x="50%"
        y="70%"
      >
        {{ firstLetter }}
      </text>
      <text
        :class="{ pressedTxt: pressed }"
        class="text"
        dominant-baseline="middle"
        text-anchor="middle"
        x="50%"
        y="35%"
      >
        {{ secondLetter }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  firstLetter: {
    type: String,
    required: true,
  },
  secondLetter: {
    type: String,
    required: true,
  },
});

let pressed = ref(false);

window.addEventListener("keydown", (ev) => {
  if (
    ev.key.toLowerCase() == props.firstLetter ||
    ev.key.toLowerCase() == props.secondLetter
  ) {
    pressed.value = true;
  }
});

window.addEventListener("keyup", (ev) => {
  if (
    ev.key.toLowerCase() == props.firstLetter ||
    ev.key.toLowerCase() == props.secondLetter
  ) {
    pressed.value = false;
  }
});
</script>

<style lang="scss" scoped>
$big-letter: 2em;
$small-letter: 2.3em;

svg {
  filter: drop-shadow(0px 0px 5px #7d7d7d68);
  width: 100%;
}

@keyframes pressed {
  from {
    font-size: $small-letter;
    fill: black;
  }
  to {
    font-size: $big-letter;
    fill: white;
  }
}

@keyframes unpressed {
  from {
    font-size: $big-letter;
  }
  to {
    font-size: $small-letter;
  }
}
.rect {
  fill: var(--alt-background-color);
  ry: 8px;
}

.text {
  fill: var(--paragraph-text-color);
  animation: unpressed 100ms ease forwards;
}

.pressedRec {
  fill: url(#gradient);
}

.pressedTxt {
  fill: white;
  animation: pressed 100ms ease forwards;
}
</style>
