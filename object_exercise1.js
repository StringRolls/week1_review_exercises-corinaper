const alphabet =  {
    a: '.-',
    b: '-...r',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
  };

  function encoding (alphabet, sentence){
      const encodedMessage = [];
      for (let i=0; i<sentence.length; i++){
          for (const [key, value] of Object.entries(alphabet)){
            if (sentence[i] === key){
                encodedMessage.push(value); 
            }
        }
      };
      return encodedMessage.join(" ")
  };
  
  function decoding (alphabet, morseCode){
    const morseArray = morseCode.split(" ");
    const decodedMessage = [];
    for (let i=0; i<morseArray.length; i++){
        for (const [key, value] of Object.entries(alphabet)){
          if (morseArray[i] === value){
              decodedMessage.push(key); 
          } 
  
    }};
    
    return decodedMessage.join(" ")
};


  console.log(encoding(alphabet, "I love javascript"))