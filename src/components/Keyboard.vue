<template>

    <div class="keyboard">
        <div class="firstRow row">
            <DoubleKey firstLetter="`" secondLetter="~" />
            <DoubleKey firstLetter="1" secondLetter="!" />
            <DoubleKey firstLetter="2" secondLetter="@" />
            <DoubleKey firstLetter="3" secondLetter="#" />
            <DoubleKey firstLetter="4" secondLetter="$" />
            <DoubleKey firstLetter="5" secondLetter="%" />
            <DoubleKey firstLetter="6" secondLetter="^" />
            <DoubleKey firstLetter="7" secondLetter="&" />
            <DoubleKey firstLetter="8" secondLetter="*" />
            <DoubleKey firstLetter="9" secondLetter="(" />
            <DoubleKey firstLetter="0" secondLetter=")" />
            <DoubleKey firstLetter="-" secondLetter="_" />
            <DoubleKey firstLetter="=" secondLetter="+" />
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
            <DoubleKey firstLetter="[" secondLetter="{"  />
            <DoubleKey firstLetter="]" secondLetter="}"  />
            <DoubleKey firstLetter="\" secondLetter="|"  />
        </div>
        <div class="thirdRow row">
            <Key letter="A"  />
            <Key letter="S"  />
            <Key letter="D"  />
            <Key letter="F"  />
            <Key letter="G"  />
            <Key letter="H"  />
            <Key letter="J"  />
            <Key letter="K"  />
            <Key letter="L"  />
            <DoubleKey firstLetter=";" secondLetter=":"  />
            <DoubleKey firstLetter="'" secondLetter='"'  />
        </div>
        <div class="fourthRow row">
            <Key letter="Z" />
            <Key letter="X" />
            <Key letter="C" />
            <Key letter="V" />
            <Key letter="B" />
            <Key letter="N" />
            <Key letter="M" />
            <DoubleKey firstLetter="," secondLetter="<"  />
            <DoubleKey firstLetter="." secondLetter=">"  />
            <DoubleKey firstLetter="/" secondLetter="?"  />
        </div>
        <div class="fifthRow row">
            <Spacebar />
        </div>
    </div>
    
    
    <br>

</template>

<script setup>
import Key from "./Other/Key.vue";
import DoubleKey from "./Other/DoubleKey.vue";
import Spacebar from "./Other/Spacebar.vue";
</script>

<style lang="scss" scoped>

.keyboard {
    padding: 10px;
    scale: 1;
    display: inline-block;
}




</style>