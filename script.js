function randMessage(){
    const messageAdjectives = ['smiling', 'dancing', 'crying', 'drunk', 'sleeping', 'walking']
    const messageSubjects = ['me', 'mom', 'dog', 'pope', 'horse', 'kid']
    const messageActions = ['talking to', 'singing with', 'robbing', 'praying to', 'having a bad trip with']
    const messageObjects = ['frog', 'beggar', 'flower', 'computer', 'pedophile', 'alien', 'Elon Musk']
    
    let randAdjective = messageAdjectives[Math.floor(Math.random()*messageAdjectives.length)]
    let randSubject = messageSubjects[Math.floor(Math.random()*messageSubjects.length)]
    let randAction = messageActions[Math.floor(Math.random()*messageActions.length)]
    let randObject = messageObjects[Math.floor(Math.random()*messageObjects.length)]
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let finalMessage = `One shiny day a ${randAdjective} ${randSubject} was ${randAction} ${vowels.includes(randObject.slice(0,1).toLowerCase()) ? 'an' : 'a'} ${randObject}`

    //console.log(messageObjects.slice(0,1))
    console.log(vowels.includes(messageObjects.slice(0,1)) ? 'an' : 'a');
    console.log(finalMessage);     

}

randMessage()