<template>
  <v-layout>
    <v-flex text-xs-center>

    </v-flex>
  </v-layout>
</template>
<script>
export default {
    data(){
        return {
            deck1:null,
            deck2:null,
            round:0,
            winner:null
        }
    },
    methods:{
        playRound() {
            const warBuffer = [[], []];
            let pair = [deck1.shift(), deck2.shift()];
            let roundWinner;
            while ((roundWinner = decideRoundWinner(pair)) === null) {
                if (deck1.length < 4 || + deck2.length < 4) return 0;
                warBuffer[0].push(pair[0], ...deck1.splice(0, 3));
                warBuffer[1].push(pair[1], ...deck2.splice(0, 3));
                pair = [deck1.shift(), deck2.shift()];
            }
            decks[roundWinner].push(...warBuffer[0], pair[0], ...warBuffer[1], pair[1]);

            return deck1.length === 0 ? 2 : deck2.length === 0 ? 1 : null;
        },
        decideRoundWinner(pair) {
            if (pair[0] === pair[1]) return null;
            else return pair[0] > pair[1] ? 0 : 1;
        }
    },
    created(){

    }

}
</script>