//product js
const likeImg = document.querySelectorAll('.like img')
const itemImg = document.querySelectorAll('.item_img')
const itemHover = document.querySelectorAll('.item_hover')
const link = document.querySelectorAll('.link')
const box = document.querySelectorAll('.box')
console.log(likeImg, itemImg, link, itemHover)
// 관심상품
for(let i of likeImg){
    i.addEventListener('mouseover', function(){
        i.src = "./images/glasses_img/favorite_fill.png"
    })
    i.addEventListener('mouseout', function(){
        i.src = "./images/glasses_img/favorite.png"
    })
}
for(i of itemHover){
    i.style.display = 'none'
}
box.forEach(function(target, index, array){
    target.addEventListener('mouseover', function(){
        console.log(index)
        itemImg[index].style.display = 'none'
        itemHover[index].style.display = 'block'
    })
    target.addEventListener('mouseout', function(){
        console.log(index)
        itemImg[index].style.display = 'block'
        itemHover[index].style.display = 'none'
    })

})