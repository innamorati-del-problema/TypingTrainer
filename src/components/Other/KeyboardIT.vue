<script setup>
import { ref } from "vue";

window.addEventListener('keydown', (ev) => {
    if (ev.key == "Escape")  Escape.value = "Escape__pressed";
    if (ev.key == "1" || ev.key == "!")  one.value = "one__pressed";
    if (ev.key == "2" || ev.key == "@")  two.value = "two__pressed";
    if (ev.key == "3" || ev.key == "#")  three.value = "three__pressed";
    if (ev.key == "4" || ev.key == "$")  four.value = "four__pressed";
    if (ev.key == "5" || ev.key == "%")  five.value = "five__pressed";
    if (ev.key == "6" || ev.key == "^")  six.value = "six__pressed";
    if (ev.key == "7" || ev.key == "&")  seven.value = "seven__pressed";
    if (ev.key == "8" || ev.key == "*")  eight.value = "eight__pressed";
    if (ev.key == "9" || ev.key == "(")  nine.value = "nine__pressed";
    if (ev.key == "0" || ev.key == ")")  zero.value = "zero__pressed";
    if (ev.key == "a" || ev.key == "A")  a.value = "a__pressed";
    if (ev.key == "b" || ev.key == "B")  b.value = "b__pressed";
    if (ev.key == "c" || ev.key == "C")  c.value = "c__pressed";
    if (ev.key == "d" || ev.key == "D")  d.value = "d__pressed";
    if (ev.key == "e" || ev.key == "E")  e.value = "e__pressed";
    if (ev.key == "f" || ev.key == "F")  f.value = "f__pressed";
    if (ev.key == "g" || ev.key == "G")  g.value = "g__pressed";
    if (ev.key == "h" || ev.key == "H")  h.value = "h__pressed";
    if (ev.key == "i" || ev.key == "I")  i.value = "i__pressed";
    if (ev.key == "j" || ev.key == "J")  j.value = "j__pressed";
    if (ev.key == "k" || ev.key == "K")  k.value = "k__pressed";
    if (ev.key == "l" || ev.key == "L")  l.value = "l__pressed";
    if (ev.key == "m" || ev.key == "M")  m.value = "m__pressed";
    if (ev.key == "n" || ev.key == "N")  n.value = "n__pressed";
    if (ev.key == "o" || ev.key == "O")  o.value = "o__pressed";
    if (ev.key == "p" || ev.key == "P")  p.value = "p__pressed";
    if (ev.key == "q" || ev.key == "Q")  q.value = "q__pressed";
    if (ev.key == "r" || ev.key == "R")  r.value = "r__pressed";
    if (ev.key == "s" || ev.key == "S")  s.value = "s__pressed";
    if (ev.key == "t" || ev.key == "T")  t.value = "t__pressed";
    if (ev.key == "u" || ev.key == "U")  u.value = "u__pressed";
    if (ev.key == "v" || ev.key == "V")  v.value = "v__pressed";
    if (ev.key == "w" || ev.key == "W")  w.value = "w__pressed";
    if (ev.key == "x" || ev.key == "X")  x.value = "x__pressed";
    if (ev.key == "y" || ev.key == "Y")  y.value = "y__pressed";
    if (ev.key == "z" || ev.key == "Z")  z.value = "z__pressed";
    if (ev.key == "-" || ev.key == "_")  dash.value = "dash__pressed";
    if (ev.key == "=" || ev.key == "+")  equal.value = "equal__pressed";
    if (ev.key == 'Backspace')  backspace.value = "backspace__pressed";
    if (ev.key == "Tab")  tab.value = "tab__pressed";
    if (ev.key == "CapsLock")  caps.value = "caps__pressed";
    if (ev.key == "Shift")  lshift.value = "lshift__pressed";
    if (ev.key == "Control")  lctrl.value = "lctrl__pressed";
    if (ev.key == "OS")  lwin.value = "lwin__pressed";
    if (ev.key == "Alt")  lalt.value = "lalt__pressed";
    if (ev.key == " ")  space.value = "space__pressed";
    if (ev.key == "Alt")  ralt.value = "ralt__pressed";
    if (ev.key == "OS")  menu.value = "menu__pressed";
    if (ev.key == "Control")  rctrl.value = "rctrl__pressed";
    if (ev.key == "")  fn.value = "fn__pressed";
    if (ev.key == "[" || ev.key == "{")  osqbr.value = "osqbr__pressed";
    if (ev.key == "]" || ev.key == "}")  csqbr.value = "csqbr__pressed";
    if (ev.key == "\\" || ev.key == "|")  backslash.value = "backslash__pressed";
    if (ev.key == ";" || ev.key == ":")  semicolon.value = "semicolon__pressed";
    if (ev.key == "'" || ev.key == '"')  quote.value = "quote__pressed";
    if (ev.key == "Enter")  enter.value = "enter__pressed";
    if (ev.key == "," || ev.key == "<")  colon.value = "colon__pressed";
    if (ev.key == "." || ev.key == ">")  period.value = "period__pressed";
    if (ev.key == "/" || ev.key == "?")  slash.value = "slash__pressed";
    if (ev.key == "Shift")  rshift.value = "rshift__pressed";

});






window.addEventListener('keyup', (ev) => {
    if (ev.key == "Escape")  Escape.value = "Escape";
    if (ev.key == "1" || ev.key == "!")  one.value = "one";
    if (ev.key == "2" || ev.key == "@")  two.value = "two";
    if (ev.key == "3" || ev.key == "#")  three.value = "three";
    if (ev.key == "4" || ev.key == "$")  four.value = "four";
    if (ev.key == "5" || ev.key == "%")  five.value = "five";
    if (ev.key == "6" || ev.key == "^")  six.value = "six";
    if (ev.key == "7" || ev.key == "&")  seven.value = "seven";
    if (ev.key == "8" || ev.key == "*")  eight.value = "eight";
    if (ev.key == "9" || ev.key == "(")  nine.value = "nine";
    if (ev.key == "0" || ev.key == ")")  zero.value = "zero";
    if (ev.key == "a" || ev.key == "A")  a.value = "zero";
    if (ev.key == "b" || ev.key == "B")  b.value = "zero";
    if (ev.key == "c" || ev.key == "C")  c.value = "zero";
    if (ev.key == "d" || ev.key == "D")  d.value = "zero";
    if (ev.key == "e" || ev.key == "E")  e.value = "zero";
    if (ev.key == "f" || ev.key == "F")  f.value = "zero";
    if (ev.key == "g" || ev.key == "G")  g.value = "zero";
    if (ev.key == "h" || ev.key == "H")  h.value = "zero";
    if (ev.key == "i" || ev.key == "I")  i.value = "zero";
    if (ev.key == "j" || ev.key == "J")  j.value = "zero";
    if (ev.key == "k" || ev.key == "K")  k.value = "zero";
    if (ev.key == "l" || ev.key == "L")  l.value = "zero";
    if (ev.key == "m" || ev.key == "M")  m.value = "zero";
    if (ev.key == "n" || ev.key == "N")  n.value = "zero";
    if (ev.key == "o" || ev.key == "O")  o.value = "zero";
    if (ev.key == "p" || ev.key == "P")  p.value = "zero";
    if (ev.key == "q" || ev.key == "Q")  q.value = "zero";
    if (ev.key == "r" || ev.key == "R")  r.value = "zero";
    if (ev.key == "s" || ev.key == "S")  s.value = "zero";
    if (ev.key == "t" || ev.key == "T")  t.value = "zero";
    if (ev.key == "u" || ev.key == "U")  u.value = "zero";
    if (ev.key == "v" || ev.key == "V")  v.value = "zero";
    if (ev.key == "w" || ev.key == "W")  w.value = "zero";
    if (ev.key == "x" || ev.key == "X")  x.value = "zero";
    if (ev.key == "y" || ev.key == "Y")  y.value = "zero";
    if (ev.key == "z" || ev.key == "Z")  z.value = "zero";
    if (ev.key == "-" || ev.key == "_")  dash.value = "dash";
    if (ev.key == "=" || ev.key == "+")  equal.value = "equal";
    if (ev.key == 'Backspace')  backspace.value = "backspace";
    if (ev.key == "Tab")  tab.value = "tab";
    if (ev.key == "CapsLock")  caps.value = "caps";
    if (ev.key == "Shift")  lshift.value = "lshift";
    if (ev.key == "Control")  lctrl.value = "lctrl";
    if (ev.key == "OS")  lwin.value = "lwin";
    if (ev.key == "Alt")  lalt.value = "lalt";
    if (ev.key == " ")  space.value = "space";
    if (ev.key == "Alt")  ralt.value = "ralt";
    if (ev.key == "OS")  menu.value = "menu";
    if (ev.key == "Control")  rctrl.value = "rctrl";
    if (ev.key == "")  fn.value = "fn";
    if (ev.key == "[" || ev.key == "{")  osqbr.value = "osqbr";
    if (ev.key == "]" || ev.key == "}")  csqbr.value = "csqbr";
    if (ev.key == "\\" || ev.key == "|")  backslash.value = "backslash";
    if (ev.key == ";" || ev.key == ":")  semicolon.value = "semicolon";
    if (ev.key == "'" || ev.key == '"')  quote.value = "quote";
    if (ev.key == "Enter")  enter.value = "enter";
    if (ev.key == "," || ev.key == "<")  colon.value = "colon";
    if (ev.key == "." || ev.key == ">")  period.value = "period";
    if (ev.key == "/" || ev.key == "?")  slash.value = "slash";
    if (ev.key == "Shift")  rshift.value = "rshift";
});

let Escape = ref("Escape");
let one = ref('one');
let two = ref('two');
let three = ref('three');
let four = ref('four');
let five = ref('five');
let six = ref('six');
let seven = ref('seven');
let eight = ref('eight');
let nine = ref('nine');
let zero = ref('zero');
let a = ref("a");
let b = ref("b");
let c = ref("c");
let d = ref("d");
let e = ref("e");
let f = ref("f");
let g = ref("g");
let h = ref("h");
let i = ref("i");
let j = ref("j");
let k = ref("k");
let l = ref("l");
let m = ref("m");
let n = ref("n");
let o = ref("o");
let p = ref("p");
let q = ref("q");
let r = ref("r");
let s = ref("s");
let t = ref("t");
let u = ref("u");
let v = ref("v");
let w = ref("w");
let x = ref("x");
let y = ref("y");
let z = ref("z");
let dash = ref("dash");
let equal = ref("equal");
let backspace = ref("backspace");
let tab = ref('tab');
let caps = ref('caps');
let lshift = ref('lshift');
let lctrl = ref('lctrl');
let lwin = ref('lwin');
let lalt = ref("lalt");
let space = ref("space");
let ralt = ref("ralt");
let menu = ref("menu");
let rctrl = ref("rctrl");
let fn = ref("fn");
let osqbr = ref("osqbr");
let csqbr = ref("csqbr");
let backslash = ref("backslash");
let semicolon = ref("semicolon");
let quote = ref("quote");
let enter = ref("enter");
let colon = ref("colon");
let period = ref("period");
let slash = ref("slash");
let rshift = ref("rshift");
let larr = ref("larr");

</script>


<template>
<svg
   width="1250"
   height="460"
   viewBox="0 0 330.72916 121.70833"
   id="keyboard">
   <linearGradient id="gradient" x2="1" y2="1">
    <stop offset="0%" stop-color="#72C53F" />
    <stop offset="100%" stop-color="#5A9D31" />
  </linearGradient>
  <g>
    <rect
       :class="[Escape]"
       id="rect3369"
       width="17.57206"
       height="17.572062"
       x="9.7348022"
       y="9.7348022"
       ry="3.4016497" 
       />    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,0.29674823,5.3649942)"
       id="text10885"
       style="line-height:1.25;font-family:'IBM Plex Mono';font-size:19.7574px;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887);stroke-width:0.988076;-inkscape-font-specification:'IBM Plex Mono';font-weight:normal;font-style:normal;font-stretch:normal;font-variant:normal"
       x="10.726636"
       y="0"><tspan
         x="51.797647"
         y="54.677126"
         id="tspan91876"><tspan
           style="text-align:center;"
           id="tspan91874">ESC</tspan></tspan></text> 
    <rect
       id="rect3396-7"
       width="17.57206"
       height="17.572062"
       :class="[one]"
       x="30.901468"
       y="9.7348022"
       ry="3.4016497" />
    <rect
       :class="[two]"
       id="rect3396-7-0"
       width="17.57206"
       height="17.572062"
       x="52.068134"
       y="9.7348022"
       ry="3.4016497" />
    <rect
    :class="[three]"
       id="rect3396-7-0-9"
       width="17.57206"
       height="17.572062"
       x="73.234802"
       y="9.7348013"
       ry="3.4016497" />
    <rect
        :class="[four]"
       id="rect3396-3"
       width="17.57206"
       height="17.572062"
       x="94.401466"
       y="9.7348013"
       ry="3.4016497" />
    <rect
    :class="[five]"
       id="rect3396-7-6"
       width="17.57206"
       height="17.572062"
       x="115.56813"
       y="9.7348013"
       ry="3.4016497" />
    <rect
    :class="[six]"
       id="rect3396-7-0-0"
       width="17.57206"
       height="17.572062"
       x="136.7348"
       y="9.7348022"
       ry="3.4016497" />
    <rect
    :class="[seven]"
       id="rect3396-7-0-9-6"
       width="17.57206"
       height="17.572062"
       x="157.90146"
       y="9.7348022"
       ry="3.4016497" />
    <rect
    :class="[eight]"
       id="rect3396-3-2"
       width="17.57206"
       height="17.572062"
       x="179.06813"
       y="9.7348022"
       ry="3.4016497" />
    <rect
    :class="[nine]"
       id="rect3396-7-6-6"
       width="17.57206"
       height="17.572062"
       x="200.2348"
       y="9.7348022"
       ry="3.4016497" />
    <rect
    :class="[zero]"
       id="rect3396-7-0-0-1"
       width="17.57206"
       height="17.572062"
       x="221.40146"
       y="9.7348022"
       ry="3.4016497" />
    <rect
       :class="[dash]"
       id="rect3396-7-0-9-6-8"
       width="17.57206"
       height="17.572062"
       x="242.56813"
       y="9.7348022"
       ry="3.4016497" />
    <rect
       :class="[q]"
       id="rect3396-2"
       width="17.57206"
       height="17.572062"
       x="42.80772"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[tab]"
       id="rect3396-2-3"
       width="29.213036"
       height="17.306786"
       x="9.8674402"
       y="31.034105"
       ry="3.350297" />
    <rect
       :class="[caps]"
       id="rect3396-2-3-9"
       width="34.405022"
       height="17.207109"
       x="9.9172792"
       y="52.250614"
       ry="3.3310013" />
    <rect
       :class="[lshift]"
       id="rect3396-2-3-9-2"
       width="23.643871"
       height="17.029316"
       x="10.006177"
       y="73.50618"
       ry="3.2965837" />
    <rect
       :class="[w]"
       id="rect3396-7-02"
       width="17.57206"
       height="17.572062"
       x="63.974396"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[e]"
       id="rect3396-7-0-3"
       width="17.57206"
       height="17.572062"
       x="85.141068"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[r]"
       id="rect3396-7-0-9-7"
       width="17.57206"
       height="17.572062"
       x="106.30769"
       y="30.901468"
       ry="3.4016497" />
    <rect
       :class="[t]"
       id="rect3396-3-5"
       width="17.57206"
       height="17.572062"
       x="127.47437"
       y="30.901468"
       ry="3.4016497" />
    <rect
       :class="[y]"
       id="rect3396-7-6-9"
       width="17.57206"
       height="17.572062"
       x="148.64079"
       y="30.901468"
       ry="3.4016497" />
    <rect
       :class="[u]"
       id="rect3396-7-0-0-2"
       width="17.57206"
       height="17.572062"
       x="169.80731"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[i]"
       id="rect3396-7-0-9-6-2"
       width="17.57206"
       height="17.572062"
       x="190.97398"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[o]"
       id="rect3396-3-2-8"
       width="17.57206"
       height="17.572062"
       x="212.14064"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[p]"
       id="rect3396-7-6-6-9"
       width="17.57206"
       height="17.572062"
       x="233.30733"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[osqbr]"
       id="rect3396-7-0-0-1-7"
       width="17.57206"
       height="17.572062"
       x="254.47398"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[a]"
       id="rect3396-2-7"
       width="17.57206"
       height="17.572062"
       x="48.099384"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[s]"
       id="rect3396-7-02-5"
       width="17.57206"
       height="17.572062"
       x="69.26606"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[d]"
       id="rect3396-7-0-3-3"
       width="17.57206"
       height="17.572062"
       x="90.432724"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[f]"
       id="rect3396-7-0-9-7-5"
       width="17.57206"
       height="17.572062"
       x="111.59936"
       y="52.068134"
       ry="3.4016497" />
    <rect
       :class="[g]"
       id="rect3396-3-5-6"
       width="17.57206"
       height="17.572062"
       x="132.76604"
       y="52.068134"
       ry="3.4016497" />
    <rect
       :class="[h]"
       id="rect3396-7-6-9-2"
       width="17.57206"
       height="17.572062"
       x="153.93271"
       y="52.068134"
       ry="3.4016497" />
    <rect
       :class="[j]"
       id="rect3396-7-0-0-2-9"
       width="17.57206"
       height="17.572062"
       x="175.09938"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[k]"
       id="rect3396-7-0-9-6-2-1"
       width="17.57206"
       height="17.572062"
       x="196.26604"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[l]"
       id="rect3396-3-2-8-2"
       width="17.57206"
       height="17.572062"
       x="217.43271"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[semicolon]"
       id="rect3396-7-6-6-9-7"
       width="17.57206"
       height="17.572062"
       x="238.59938"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[larr]"
       id="rect3396-2-7-0"
       width="17.57206"
       height="17.572062"
       x="37.516029"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[z]"
       id="rect3396-2-7-0"
       width="17.57206"
       height="17.572062"
       x="58.682716"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[rctrl]"
       id="rect3396-2-7-0-5"
       width="25.509562"
       height="17.572062"
       x="9.7348022"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[lwin]"
       id="rect3396-2-7-0-5-9"
       width="25.509562"
       height="17.572062"
       x="38.83897"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[ralt]"
       id="rect3396-2-7-0-5-9-2"
       width="25.509562"
       height="17.572062"
       x="67.943138"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[lctrl]"
       id="rect3396-2-7-0-5-9-2-8"
       width="25.509562"
       height="17.572062"
       x="266.38062"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[menu]"
       id="rect3396-2-7-0-5-9-2-8-9"
       width="25.509562"
       height="17.572062"
       x="237.27646"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[lalt]"
       id="rect3396-2-7-0-5-9-2-8-9-7"
       width="25.509562"
       height="17.572062"
       x="208.1723"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[fn]"
       id="rect3396-2-7-0-5-9-2-2"
       width="25.509562"
       height="17.572062"
       x="295.4848"
       y="94.401466"
       ry="3.4016497"
       rx="3.4016497" />
    <rect
       :class="[x]"
       id="rect3396-7-02-5-6"
       width="17.57206"
       height="17.572062"
       x="79.849403"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[c]"
       id="rect3396-7-0-3-3-2"
       width="17.57206"
       height="17.572062"
       x="101.01606"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[v]"
       id="rect3396-7-0-9-7-5-6"
       width="17.57206"
       height="17.572062"
       x="122.18268"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[b]"
       id="rect3396-3-5-6-1"
       width="17.57206"
       height="17.572062"
       x="143.34929"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[space]"
       id="rect3396-3-5-6-1-7"
       width="107.53039"
       height="17.572062"
       x="97.047302"
       y="94.401459"
       ry="3.4016497"
       rx="3.4016495" />
    <rect
       :class="[n]"
       id="rect3396-7-6-9-2-8"
       width="17.57206"
       height="17.572062"
       x="164.51596"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[m]"
       id="rect3396-7-0-0-2-9-7"
       width="17.57206"
       height="17.572062"
       x="185.68265"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[colon]"
       id="rect3396-7-0-9-6-2-1-9"
       width="17.57206"
       height="17.572062"
       x="206.84929"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[period]"
       id="rect3396-3-2-8-2-2"
       width="17.57206"
       height="17.572062"
       x="228.01595"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[slash]"
       id="rect3396-7-6-6-9-7-0"
       width="17.57206"
       height="17.572062"
       x="249.18263"
       y="73.234802"
       ry="3.4016497" />
    <rect
       :class="[quote]"
       id="rect3396-7-0-0-1-7-0"
       width="17.57206"
       height="17.572062"
       x="259.76605"
       y="52.068138"
       ry="3.4016497" />
    <rect
       :class="[csqbr]"
       id="rect3396-7-0-9-6-8-3"
       width="17.57206"
       height="17.572062"
       x="275.64111"
       y="30.90147"
       ry="3.4016497" />
    <rect
       :class="[backslash]"
       id="rect3396-7-0-9-6-8-3-6"
       width="24.030827"
       height="17.416246"
       x="296.88562"
       y="30.97938"
       ry="3.3714859" />
    <rect
       :class="[equal]"
       id="rect3396-7-0-9-6-8-7"
       width="17.57206"
       height="17.572062"
       x="263.7348"
       y="9.7348022"
       ry="3.4016497" />
    <rect
       :class="[backspace]"
       id="rect3396-7-0-9-6-8-7-9"
       width="35.704285"
       height="17.183455"
       x="285.09576"
       y="9.9291058"
       ry="3.326422" />
    <rect
       :class="[enter]"
       id="rect3396-2-3-9-6"
       width="39.604683"
       height="17.115103"
       x="281.16119"
       y="52.296619"
       ry="3.3131902" />
    <rect
       :class="[rshift]"
       id="rect3396-2-3-9-6-3"
       width="50.021626"
       height="16.948711"
       x="270.66104"
       y="73.774956"
       ry="3.2809796" />
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,6.1175814,26.53166)"
       id="text10885-7"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36);stroke-width:0.988076"
       x="27.701771"
       y="0"><tspan
         x="51.797647"
         y="54.677126"
         id="tspan91880"><tspan
           style="text-align:center;"
           id="tspan91878">TAB</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,11.1182,47.698327)"
       id="text10885-7-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5);stroke-width:0.988076"
       x="10.726636"
       y="0"><tspan
         x="36.792969"
         y="54.677126"
         id="tspan91882">CAPS</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608901,0,0,0.27484418,14.756277,68.864993)"
       id="text10885-7-3-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5);stroke-width:0.988076"
       x="10.726636"
       y="0"><tspan
         x="-1"
         y="54.677126"
         id="tspan91884">SHIFT</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,4.3231576,90.031659)"
       id="text10885-7-3-6-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2);stroke-width:0.988076"
       x="33.106544"
       y="0"><tspan
         x="45.869193"
         y="54.677126"
         id="tspan91888"><tspan
           style="text-align:center;"
           id="tspan91886">CTRL</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,33.427267,90.031659)"
       id="text10885-7-3-6-9-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2-9);stroke-width:0.988076"
       x="49.755615"
       y="0"><tspan
         x="51.797647"
         y="54.677126"
         id="tspan91892"><tspan
           style="text-align:center;"
           id="tspan91890">WIN</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,62.531418,90.031659)"
       id="text10885-7-3-6-9-3-0"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2-9-6);stroke-width:0.988076"
       x="66.987648"
       y="0"><tspan
         x="51.797647"
         y="54.677126"
         id="tspan91896"><tspan
           style="text-align:center;"
           id="tspan91894">ALT</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,202.76058,90.031659)"
       id="text10885-7-3-6-9-3-0-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2-9-6-6);stroke-width:0.988076"
       x="66.987648"
       y="0"><tspan
         x="51.797647"
         y="54.677126"
         id="tspan91900"><tspan
           style="text-align:center;"
           id="tspan91898">ALT</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,231.86475,90.031659)"
       id="text10885-7-3-6-9-3-0-2-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2-9-6-6-6);stroke-width:0.988076;text-align:center"
       x="89.239105"
       y="0"><tspan
         x="45.869193"
         y="54.677126"
         id="tspan91902">MENU</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,260.96891,90.031659)"
       id="text10885-7-3-6-9-3-0-2-1-7"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2-9-6-6-6-8);stroke-width:0.988076"
       x="134.12738"
       y="0"><tspan
         x="45.869193"
         y="54.677126"
         id="tspan91906"><tspan
           style="text-align:center;"
           id="tspan91904">CTRL</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.2608906,0,0,0.27484418,290.07308,90.031659)"
       id="text10885-7-3-6-9-3-0-2-1-7-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7615px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-36-5-5-2-9-6-6-6-8-9);stroke-width:0.988076;text-align:center"
       x="77.164825"
       y="0"><tspan
         x="57.726101"
         y="54.677126"
         id="tspan91908">FN</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,21.335407,1.8879652)"
       id="text10885-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91912"><tspan
           style="text-align:center;"
           id="tspan91910">!
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91916"><tspan
           style="text-align:center;"
           id="tspan91914">1</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,42.502073,1.8879652)"
       id="text10885-6-7"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91920"><tspan
           style="text-align:center;"
           id="tspan91918">"
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91924"><tspan
           style="text-align:center;"
           id="tspan91922">2</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,63.66874,1.8879652)"
       id="text10885-6-7-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91928"><tspan
           style="text-align:center;"
           id="tspan91926">£
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91932"><tspan
           style="text-align:center;"
           id="tspan91930">3</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,84.835406,1.8879652)"
       id="text10885-6-7-3-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91936"><tspan
           style="text-align:center;"
           id="tspan91934">$
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91940"><tspan
           style="text-align:center;"
           id="tspan91938">4</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,106.00207,1.8879652)"
       id="text10885-6-7-3-9-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91944"><tspan
           style="text-align:center;"
           id="tspan91942">%
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91948"><tspan
           style="text-align:center;"
           id="tspan91946">5</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,127.16874,1.8879652)"
       id="text10885-6-7-3-9-2-0"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91952"><tspan
           style="text-align:center;"
           id="tspan91950">&
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91956"><tspan
           style="text-align:center;"
           id="tspan91954">6</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,148.3354,1.8879652)"
       id="text10885-6-7-3-9-2-0-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7-9);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91960"><tspan
           style="text-align:center;"
           id="tspan91958">/
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91964"><tspan
           style="text-align:center;"
           id="tspan91962">7</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,169.50207,1.8879652)"
       id="text10885-6-7-3-9-2-0-3-0"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7-9-6);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91968"><tspan
           style="text-align:center;"
           id="tspan91966">(
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91972"><tspan
           style="text-align:center;"
           id="tspan91970">8</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,190.66874,1.8879652)"
       id="text10885-6-7-3-9-2-0-3-0-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7-9-6-6);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91976"><tspan
           style="text-align:center;"
           id="tspan91974">)
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91980"><tspan
           style="text-align:center;"
           id="tspan91978">9</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,211.8354,1.8879652)"
       id="text10885-6-7-3-9-2-0-3-0-2-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7-9-6-6-6);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91984"><tspan
           style="text-align:center;"
           id="tspan91982">=
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91988"><tspan
           style="text-align:center;"
           id="tspan91986">0</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,233.00207,1.8879652)"
       id="text10885-6-7-3-9-2-0-3-0-2-1-7"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7-9-6-6-6-8);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan91992"><tspan
           style="text-align:center;"
           id="tspan91990">?
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan91996"><tspan
           style="text-align:center;"
           id="tspan91994">'</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,254.16874,1.8879652)"
       id="text10885-6-7-3-9-2-0-3-0-2-1-7-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-36-5-2-1-7-9-6-6-6-8-9);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92000"><tspan
           style="text-align:center;"
           id="tspan91998">^
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92004"><tspan
           style="text-align:center;"
           id="tspan92002">ì</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,33.540446,25.842377)"
       id="text10885-6-0"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7);stroke-width:0.98787;text-align:center"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92006">Q</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,54.707236,25.842377)"
       id="text10885-6-0-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92008">W</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,75.873902,25.842377)"
       id="text10885-6-0-9-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92010">E</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,97.040568,25.842377)"
       id="text10885-6-0-9-2-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92012">R</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,118.20723,25.842377)"
       id="text10885-6-0-9-2-9-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92014">T</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,139.40036,25.842377)"
       id="text10885-6-0-9-2-9-3-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7-6);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92016">Y</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,160.56702,25.842377)"
       id="text10885-6-0-9-2-9-3-1-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7-6-2);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92018">U</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,181.73369,25.842377)"
       id="text10885-6-0-9-2-9-3-1-9-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7-6-2-3);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92020">I</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,202.90036,25.842377)"
       id="text10885-6-0-9-2-9-3-1-9-1-4"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7-6-2-3-9);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92022">O</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,224.06702,25.842377)"
       id="text10885-6-0-9-2-9-3-1-9-1-4-8"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7-6-2-3-9-7);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92024">P</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,290.87431,25.842377)"
       id="text10885-6-0-9-2-9-3-1-9-1-4-8-5-3-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-5-2-8-7-6-2-3-9-7-4-0-3);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92026">ù</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,38.780378,47.009111)"
       id="text10885-6-0-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92028">A</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,59.946984,47.009111)"
       id="text10885-6-0-2-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92030">S</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,81.11365,47.009111)"
       id="text10885-6-0-2-1-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92032">D</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,102.28032,47.009111)"
       id="text10885-6-0-2-1-6-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92034">F</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,123.44698,47.009111)"
       id="text10885-6-0-2-1-6-2-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3-0);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92036">G</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,144.61365,47.009111)"
       id="text10885-6-0-2-1-6-2-6-5"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3-0-1);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92038">H</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,165.78031,47.009111)"
       id="text10885-6-0-2-1-6-2-6-5-4"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3-0-1-5);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92040">J</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,186.94698,47.009111)"
       id="text10885-6-0-2-1-6-2-6-5-4-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3-0-1-5-7);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92042">K</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,208.11365,47.009111)"
       id="text10885-6-0-2-1-6-2-6-5-4-6-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3-0-1-5-7-5);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92044">L</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,280.8826,47.009111)"
       id="text10885-6-0-2-1-6-2-6-5-4-6-6-4-2-5"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-6-0-3-0-1-5-7-5-7-5-7);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="40.979469"
         y="58.512969"
         id="tspan92046">ENTER</tspan></text>

    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,28.273102,65.387964)"
       id="text10885-6-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92072"><tspan
           style="text-align:center;"
           id="tspan92070">&gt;
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92076"><tspan
           style="text-align:center;"
           id="tspan92074">&lt</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,49.439851,68.175709)"
       id="text10885-6-0-2-7"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92048">Z</tspan></text>

    
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,70.6066,68.175709)"
       id="text10885-6-0-2-7-4"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92050">X</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,91.773266,68.175709)"
       id="text10885-6-0-2-7-4-4"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5-7);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92052">C</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,112.93993,68.175709)"
       id="text10885-6-0-2-7-4-4-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5-7-4);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92054">V</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,134.1066,68.175709)"
       id="text10885-6-0-2-7-4-4-3-7"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5-7-4-0);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92056">B</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,155.27326,68.175709)"
       id="text10885-6-0-2-7-4-4-3-7-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5-7-4-0-8);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92058">N</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,176.43993,68.175709)"
       id="text10885-6-0-2-7-4-4-3-7-6-8"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5-7-4-0-8-8);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="62.383003"
         y="58.512969"
         id="tspan92060">M</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,276.13825,68.175709)"
       id="text10885-6-0-2-7-4-4-3-7-6-8-3-4-2-5"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-7-0-3-5-7-4-0-8-8-4-1-9-3);stroke-width:0.98787"
       x="24.238636"
       y="0"><tspan
         x="39.123024"
         y="58.512969"
         id="tspan92062">SHIFT</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,275.31277,5.3239981)"
       id="text10885-6-2-1-7-9-6-6-6-8-9-0-3-3"
       style="font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';text-align:center;letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-6-9-2-0-3-0-2-1-7-2-2-97);stroke-width:0.98787;-inkscape-font-specification:'IBM Plex Mono';font-weight:normal;font-style:normal;font-stretch:normal;font-variant:normal"
       x="29.686634"
       y="0"><tspan
         x="53.663774"
         y="54.673416"
         id="tspan92064">BACKSPACE</tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,197.32565,65.387964)"
       id="text10885-6-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92072"><tspan
           style="text-align:center;"
           id="tspan92070">;
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92076"><tspan
           style="text-align:center;"
           id="tspan92074">,</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,218.49232,65.387964)"
       id="text10885-6-2-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0-5);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92080"><tspan
           style="text-align:center;"
           id="tspan92078">:
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92084"><tspan
           style="text-align:center;"
           id="tspan92082">.</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,229.07743,44.194839)"
       id="text10885-6-2-9-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0-5-8);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92088"><tspan
           style="text-align:center;"
           id="tspan92086">ç
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92092"><tspan
           style="text-align:center;"
           id="tspan92090">ò</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,250.24417,44.194839)"
       id="text10885-6-2-9-9-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0-5-8-6);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92096"><tspan
           style="text-align:center;"
           id="tspan92094">°
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92100"><tspan
           style="text-align:center;"
           id="tspan92098">à</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,244.95216,23.028173)"
       id="text10885-6-2-9-9-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0-5-8-7);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92104"><tspan
           style="text-align:center;"
           id="tspan92102">é
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92108"><tspan
           style="text-align:center;"
           id="tspan92106">è</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,266.11891,23.028173)"
       id="text10885-6-2-9-9-3-9"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0-5-8-7-2);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92112"><tspan
           style="text-align:center;"
           id="tspan92110">*
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92116"><tspan
           style="text-align:center;"
           id="tspan92114">+</tspan></tspan></text>
    <text
       xml:space="preserve"
       transform="matrix(0.25919213,0,0,0.2767608,239.65899,65.387964)"
       id="text10885-6-2-9-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.7574px;line-height:1.25;font-family:'IBM Plex Mono';-inkscape-font-specification:'IBM Plex Mono';letter-spacing:0px;white-space:pre;shape-inside:url(#rect10887-3-0-5-2);stroke-width:0.98787"
       x="18.382635"
       y="0"><tspan
         x="64.653831"
         y="54.673416"
         id="tspan92120"><tspan
           style="text-align:center;"
           id="tspan92118">_
</tspan></tspan><tspan
         x="64.653831"
         y="79.370167"
         id="tspan92124"><tspan
           style="text-align:center;"
           id="tspan92122">-</tspan></tspan></text>
  </g>
</svg>




</template>

<style lang="scss" scoped>
.a, .b, .c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p, .q, .r, .s, .t, .u, .v, .w, .x, .y, .z, 
.Escape, .enter, .space, .tab, .caps, .lshift, .lctrl, .lwin, .lalt, .ralt, .rwin, .fn, .rctrl, .rshift, .backspace, .backslash, .menu,
.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero,

.colon, .semicolon, .period, .dash, .equal, .osqbr, .csqbr, .quote, .slash, .larr{
    fill: white;
    filter: drop-shadow(0px 0px 3px #7d7d7d68);
    ry: 4px;
    transition: 0.1s ease-in;
    -webkit-transition: 0.1s ease-in;
    -moz-transition: 0.1s ease-in;
    -o-transition: 0.1s ease-in;
    

    &__pressed {
        fill: url(#gradient);
        filter: drop-shadow(0px 0px 3px #71fb8d68);
        
    };
};

#keyboard {
    scale: 1;
}

</style>