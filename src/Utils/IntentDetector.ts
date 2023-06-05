function intent(data:string){
    const words = data.split(' ') ;
    console.log(words) ;

    const target : string[] = [ 
        'OAC' , 
        'FoodCourt',
        'Breakfast' ,
        'Lunch' ,
        'Dinner' ,
        'Now'
    ]

    words.forEach( word => {
        if(target.includes(word)) {
            return word ;
        }
    })
}