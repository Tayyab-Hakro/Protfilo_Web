export const fadein = (direction , delay) =>{
return {
    hidden:{
        y: direction === 'up' ? 20 : direction === 'down' ? -60 :0,
        x: direction === 'left' ? 100 : direction === 'right' ? -100 :0,

    },

    show:{
        y:0,
        x:0,
        opacity:1,
        transition:{
            type:'tween',
            duration:0.3,
            delay: delay,
            ease: [0.4,0.5,0.5,0.4,]
        }

    }
}
}