
document.addEventListener('DOMContentLoaded',()=>{

document.querySelectorAll('.shopify-section').forEach(el=>{
el.classList.add('fehmi-reveal');
});

const sectionObserver = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('fehmi-visible');
}
});
},{threshold:.15});

document.querySelectorAll('.shopify-section').forEach(el=>{
sectionObserver.observe(el);
});

document.querySelectorAll('.product-grid .grid__item').forEach((el,index)=>{
const productObserver = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
setTimeout(()=>{
entry.target.classList.add('fehmi-show');
}, index * 180);
}
});
},{threshold:.2});

productObserver.observe(el);
});

document.querySelectorAll('.card').forEach(card=>{
card.addEventListener('mousemove',e=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x/rect.width)-0.5)*16;
const rotateX = ((y/rect.height)-0.5)*-16;

card.style.transform = `
perspective(1400px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-18px)
scale(1.02)
`;
});

card.addEventListener('mouseleave',()=>{
card.style.transform='';
});
});

window.addEventListener('scroll',()=>{
const scrollY = window.scrollY;

document.querySelectorAll('.banner,.image-with-text,.multicolumn,.rich-text').forEach((el,index)=>{
const speed = 0.04 + (index * 0.01);
const x = Math.sin(scrollY * 0.001 + index) * 20;
const y = scrollY * speed;

el.style.transform = `
translate3d(${x}px,${y*-0.08}px,0)
`;
});
},{passive:true});

});
