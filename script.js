function randMessage(){
    const messageAdjectives = ['Smiling', 'Dancing', 'Crying', 'Drunk', 'Sleeping', 'Walking']
    const messageSubject = ['me', 'mom', 'dog', 'pope', 'horse', 'kid']
    const messageAction = ['talking to', 'singing with', 'robbing', 'praying to', 'having a bad trip with']
    const messageObject = ['frog', 'beggar', 'flower', 'computer', 'pedophile', 'alien', 'Elon Musk']
    
    let randAdjective = messageAdjectives[Math.floor(Math.random()*messageAdjectives.length)]
    
   // console.log("test");
    console.log(randAdjective);     

}

randMessage()