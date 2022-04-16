const bg = document.querySelector('body');
const btn = document.querySelector('.btn')
bg.style.background = 'LightSeaGreen'
const colors = ['red','blue','aqua','purple','green','yellow','orange','LightSeaGreen','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','OrangeRed','RosyBrown','SlateBlue',]
Array.prototype.random = function(){
    return this[Math.floor((Math.random() * this.length))]
}
btn.addEventListener('click', () => {
    bg.style.background = colors.random()
})