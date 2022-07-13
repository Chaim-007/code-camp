console.log('connected')

function Pal(wo){
    const w = wo.split('');
    const rev= w.reverse();
    const  w2= rev.join('');
    if(wo == w2) {
        console.log('It is a pallindrome');
    }
        console.log('It is not a pallindrome');
    }
}
const wo = prompt('Enter a word: ');

Pal(wo);