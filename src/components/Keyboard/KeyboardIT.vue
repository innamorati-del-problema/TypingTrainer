<template>

    <div class="keyboard">
        <div class="firstRow row">
            <DoubleKey firstLetter="\" secondLetter="|" />
            <DoubleKey firstLetter="1" secondLetter="!" />
            <DoubleKey firstLetter="2" secondLetter='"' />
            <DoubleKey firstLetter="3" secondLetter="￡" />
            <DoubleKey firstLetter="4" secondLetter="$" />
            <DoubleKey firstLetter="5" secondLetter="%" />
            <DoubleKey firstLetter="6" secondLetter="&" />
            <DoubleKey firstLetter="7" secondLetter="/" />
            <DoubleKey firstLetter="8" secondLetter="(" />
            <DoubleKey firstLetter="9" secondLetter=")" />
            <DoubleKey firstLetter="0" secondLetter="=" />
            <DoubleKey firstLetter="'" secondLetter="?" />
            <DoubleKey firstLetter="ì" secondLetter="^" />
            <br>
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
            <DoubleKey firstLetter="è" secondLetter="é"  />
            <DoubleKey firstLetter="+" secondLetter="*"  />
            <DoubleKey firstLetter="ù" secondLetter="§"  />
            <br>
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
            <DoubleKey firstLetter="ò" secondLetter="ç"  />
            <DoubleKey firstLetter="à" secondLetter='°'  />
            <br>
        </div>
        <div class="fourthRow row">
            <DoubleKey firstLetter="<" secondLetter=">"  />
            <Key letter="Z" />
            <Key letter="X" />
            <Key letter="C" />
            <Key letter="V" />
            <Key letter="B" />
            <Key letter="N" />
            <Key letter="M" />
            <DoubleKey firstLetter="," secondLetter=";"  />
            <DoubleKey firstLetter="." secondLetter=":"  />
            <DoubleKey firstLetter="-" secondLetter="_"  />

            <br>
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
    width: 6%;
    display: inline-block;
    margin: 5px;
    box-sizing: content-box;
    padding: 0;
}

.spacebar {
    width: 35%;
    display: inline-block;
    margin: 5px;
    box-sizing: content-box;
    padding: 0;
}
@media (max-width: 1100px) 
{
    .key {
        width: 6%;
        margin: 2px;
    }
    .spacebar {
        width: 30%;
        margin: 2px;
    }

    .row {
        width: 100%;
    }
}


</style>