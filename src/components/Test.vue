<script setup>
import { ref } from "vue";

function test() {
    alert("a");
}

window.addEventListener('keydown', (e) => {
    if ( e.key == 'a') { a.value = "a__pressed"};
    if ( e.key == 'b') { b.value = "b__pressed"};
    if ( e.key == 'c') { c.value = "c__pressed"};
    if ( e.key == 'd') { d.value = "d__pressed"};
});

window.addEventListener('keyup', (e) => {
    if ( e.key == 'a') { a.value = "a"};
    if ( e.key == 'b') { b.value = "b"};
    if ( e.key == 'c') { c.value = "c"};
    if ( e.key == 'd') { d.value = "d"};
});

let a = ref("a");
let b = ref("b");
let c = ref("c");
let d = ref("d");

</script>


<template>
    <h1>Test</h1>
    <svg width="40.249741mm" height="40.811462mm" viewBox="0 0 40.249741 40.811462" version="1.1" id="svg5"
        sodipodi:docname="drawing.svg" inkscape:version="1.1.2 (0a00cf5339, 2022-02-04)"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-61.395218,-21.433836)">
            <rect :class="[a]" @click="test" id="rect328-3" width="18.520834" height="18.520834" x="61.395218"
                y="-40.020294" transform="scale(1,-1)" ry="3.5853109" />
            <rect :class="[b]" id="rect328-3-9" width="18.520834" height="18.520834" x="83.124123" y="-39.95467"
                transform="scale(1,-1)" ry="3.5853109" />
            <rect :class="[c]" id="rect328-3-9-3" width="18.520834" height="18.520834" x="61.395218" y="-62.245296"
                transform="scale(1,-1)" ry="3.5853109" />
            <rect :class="[d]" id="rect328-3-9-3-1" width="18.520834" height="18.520834" x="83.091057" y="-62.2453"
                transform="scale(1,-1)" ry="3.5853109" />
            <text xml:space="preserve" transform="matrix(0.26458333,0,0,0.26458333,61.395218,21.433836)" id="text30493"
                style="font-size:29.3333px;line-height:1.25;font-family:sans-serif;white-space:pre;shape-inside:url(#rect30495)">
                <tspan x="23.119141" y="43.879095" id="tspan93786">A</tspan>
            </text>
            <text xml:space="preserve" transform="matrix(0.26458333,0,0,0.26458333,83.68949,21.49331)" id="text30493-4"
                style="font-size:29.3333px;line-height:1.25;font-family:sans-serif;white-space:pre;shape-inside:url(#rect30495-9)">
                <tspan x="23.119141" y="43.879095" id="tspan93788">B</tspan>
            </text>
            <text xml:space="preserve"
                style="font-size:3.52777px;line-height:1.25;font-family:sans-serif;stroke-width:0.264583" x="88.900002"
                y="27.362673" id="text67563">
                <tspan sodipodi:role="line" id="tspan67561" style="stroke-width:0.264583"></tspan>
            </text>
            <text xml:space="preserve" transform="matrix(0.26458333,0,0,0.26458333,61.444337,43.880833)"
                id="text30493-8"
                style="font-size:29.3333px;line-height:1.25;font-family:sans-serif;white-space:pre;shape-inside:url(#rect30495-7)">
                <tspan x="23.119141" y="43.879095" id="tspan93790">C
                </tspan>
            </text>
            <text xml:space="preserve" transform="matrix(0.26458333,0,0,0.26458333,83.662102,43.842592)"
                id="text30493-8-5"
                style="font-size:29.3333px;line-height:1.25;font-family:sans-serif;white-space:pre;shape-inside:url(#rect30495-7-4)">
                <tspan x="23.119141" y="43.879095" id="tspan93792">D</tspan>
            </text>
        </g>
    </svg>
</template>

<style lang="scss" scoped>
.a {
    fill: red;

    &__pressed {
        fill: blue;
    }
}

.b {
    fill: red;

    &__pressed {
        fill: blue;
    }
}

.c {
    fill: red;

    &__pressed {
        fill: blue;
    }
}

.d {
    fill: red;

    &__pressed {
        fill: blue;
    }
}
</style>