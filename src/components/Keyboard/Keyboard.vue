<template>
  <div class="keyboard">
    <div class="firstRow row">
      <DoubleKey v-if="lang === 'it'" firstLetter="\" secondLetter="|" />
      <DoubleKey v-if="lang === 'it'" firstLetter="1" secondLetter="!" />
      <DoubleKey v-if="lang === 'it'" firstLetter="2" secondLetter='"' />
      <DoubleKey v-if="lang === 'it'" firstLetter="3" secondLetter="￡" />
      <DoubleKey v-if="lang === 'it'" firstLetter="4" secondLetter="$" />
      <DoubleKey v-if="lang === 'it'" firstLetter="5" secondLetter="%" />
      <DoubleKey v-if="lang === 'it'" firstLetter="6" secondLetter="&" />
      <DoubleKey v-if="lang === 'it'" firstLetter="7" secondLetter="/" />
      <DoubleKey v-if="lang === 'it'" firstLetter="8" secondLetter="(" />
      <DoubleKey v-if="lang === 'it'" firstLetter="9" secondLetter=")" />
      <DoubleKey v-if="lang === 'it'" firstLetter="0" secondLetter="=" />
      <DoubleKey v-if="lang === 'it'" firstLetter="'" secondLetter="?" />
      <DoubleKey v-if="lang === 'it'" firstLetter="ì" secondLetter="^" />

      <DoubleKey v-if="lang === 'us'" firstLetter="`" secondLetter="~" />
      <DoubleKey v-if="lang === 'us'" firstLetter="1" secondLetter="!" />
      <DoubleKey v-if="lang === 'us'" firstLetter="2" secondLetter="@" />
      <DoubleKey v-if="lang === 'us'" firstLetter="3" secondLetter="#" />
      <DoubleKey v-if="lang === 'us'" firstLetter="4" secondLetter="$" />
      <DoubleKey v-if="lang === 'us'" firstLetter="5" secondLetter="%" />
      <DoubleKey v-if="lang === 'us'" firstLetter="6" secondLetter="^" />
      <DoubleKey v-if="lang === 'us'" firstLetter="7" secondLetter="&" />
      <DoubleKey v-if="lang === 'us'" firstLetter="8" secondLetter="*" />
      <DoubleKey v-if="lang === 'us'" firstLetter="9" secondLetter="(" />
      <DoubleKey v-if="lang === 'us'" firstLetter="0" secondLetter=")" />
      <DoubleKey v-if="lang === 'us'" firstLetter="-" secondLetter="_" />
      <DoubleKey v-if="lang === 'us'" firstLetter="=" secondLetter="+" />
      <br />
    </div>
    <div class="secondRow row">
      <Key letter="Q" />
      <Key letter="W" />
      <Key letter="E" />
      <Key letter="R" />
      <Key letter="T" />
      <Key letter="Y" />
      <Key letter="U" />
      <Key letter="I" />
      <Key letter="O" />
      <Key letter="P" />

      <DoubleKey v-if="lang === 'it'" firstLetter="è" secondLetter="é" />
      <DoubleKey v-if="lang === 'it'" firstLetter="+" secondLetter="*" />
      <DoubleKey v-if="lang === 'it'" firstLetter="ù" secondLetter="§" />

      <DoubleKey v-if="lang === 'us'" firstLetter="[" secondLetter="{" />
      <DoubleKey v-if="lang === 'us'" firstLetter="]" secondLetter="}" />
      <DoubleKey v-if="lang === 'us'" firstLetter="\" secondLetter="|" />
      <br />
    </div>
    <div class="thirdRow row">
      <Key letter="A" />
      <Key letter="S" />
      <Key letter="D" />
      <Key letter="F" />
      <Key letter="G" />
      <Key letter="H" />
      <Key letter="J" />
      <Key letter="K" />
      <Key letter="L" />
      <DoubleKey v-if="lang === 'it'" firstLetter="ò" secondLetter="ç" />
      <DoubleKey v-if="lang === 'it'" firstLetter="à" secondLetter="°" />

      <DoubleKey v-if="lang === 'us'" firstLetter=";" secondLetter=":" />
      <DoubleKey v-if="lang === 'us'" firstLetter="'" secondLetter='"' />
      <br />
    </div>
    <div class="fourthRow row">
      <DoubleKey v-if="lang === 'it'" firstLetter="<" secondLetter=">" />
      <Key letter="Z" />
      <Key letter="X" />
      <Key letter="C" />
      <Key letter="V" />
      <Key letter="B" />
      <Key letter="N" />
      <Key letter="M" />
      <DoubleKey v-if="lang === 'it'" firstLetter="," secondLetter=";" />
      <DoubleKey v-if="lang === 'it'" firstLetter="." secondLetter=":" />
      <DoubleKey v-if="lang === 'it'" firstLetter="-" secondLetter="_" />

      <DoubleKey v-if="lang === 'us'" firstLetter="," secondLetter="<" />
      <DoubleKey v-if="lang === 'us'" firstLetter="." secondLetter=">" />
      <DoubleKey v-if="lang === 'us'" firstLetter="/" secondLetter="?" />

      <br />
    </div>
    <div class="fifthRow row">
      <Spacebar />
    </div>
  </div>
</template>

<script setup>
import Key from "./Key.vue";
import DoubleKey from "./DoubleKey.vue";
import Spacebar from "./Spacebar.vue";

defineProps({
  lang: {
    type: String,
    required: true,
    default: "it",
  },
});
</script>

<style lang="scss" scoped>
.keyboard {
  display: contents;
}
.row {
  width: 60%;
  height: 10%;
  display: inline-block;
}

.key {
  width: 4.69%;
  display: inline-block;
  margin: 4px;
  box-sizing: content-box;
  padding: 0;
}

.spacebar {
  width: 25%;
  display: inline-block;
  margin: 4px;
  box-sizing: content-box;
  padding: 0;
}
@media (max-width: 1100px) {
  .key {
    width: 5%;
    margin: 2px;
  }
  .spacebar {
    width: 20%;
    margin: 2px;
  }

  .row {
    width: 100%;
  }
}
</style>
