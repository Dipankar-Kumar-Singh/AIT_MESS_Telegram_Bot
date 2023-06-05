function intent(data:string){
    const words = data.toLowerCase().split(' ') ;
    console.log(words) ;

    const target : string[] = [ 
        'OAC' , 
        'FoodCourt',
        'Breakfast' ,
        'Lunch' ,
        'Dinner' ,
        'Now'
    ]

    let forwordMapped : Map<string,string[]> = new Map<string,string[]> ;
    
    target.forEach( word => {
        let alias:string[] = [word , word.toLowerCase()] ;
        forwordMapped.set(word,alias) ;
    })

    let fc_alies= forwordMapped.get('FoodCourt') ;
    if(fc_alies) fc_alies.push('fc')

    if(fc_alies)
        forwordMapped.set( 'FoodCourt' , fc_alies) ;

    let backwordMapping : Map<string,string> = new Map<string,string> ;

    forwordMapped.forEach( (alies_list,parent_word)=>{
        alies_list.forEach(child_word => {
            backwordMapping.set(child_word,parent_word) ;
        })
    })

    // now for each word --> we know its' mapping [ it's parent ]
    // simialr to DSU ( Disjoin set union ) 
    // similar approach is used in ELASTIC SEARCH ..

    words.forEach( word => {
        // if(target.includes(word)) {
        //     return word ;
        // }

        if(backwordMapping.has(word)){
            const parent_word:string =  backwordMapping.get(word)!
            return parent_word ;
        }
    })


    // advance indent .. 

}

export { intent } ;