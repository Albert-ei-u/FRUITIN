function myFunction(){
   const Name = document.getElementById('Name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pnumber = document.getElementById('pnumber').value.trim();
    const residence = document.getElementById('residence').value.trim();
    const message = document.getElementById("notify")
    if(email === "" || pnumber === "" || residence === "" || Name === "" ){
        message.innerHTML ="Please fill in the missing fields";
        message.style.color = "red";
    }
    else{
        message.innerHTML ="Thank you";
        message.style.color = "green";
    }
}

document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function openVideo() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = 'https://www.youtube.com/embed/ZCVS3-6Q-oQ?autoplay=1';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

const testimonials = [
    { name: "Alex Michael", image: "https://www.shutterstock.com/image-photo/seller-suggests-buy-ripe-fruits-260nw-523448344.jpg" },
    { name: "Sarah Johnson", image: "https://tangacommunity.org/wp-content/uploads/2025/04/sarah_mutesi_spectra.jpg" },
    { name: "David Brown", image: "https://mpd-biblio-authors.imgix.net/200068559.jpg?fit=crop&crop=faces&w=290&h=290" },
    { name: "Emma Wilson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uYEb-tjG9d10u6_T6diOO1zZ6WgTqUQpig&s" }
];
let currentIndex = 0;

function showTestimonial(index) {
    const items = document.querySelectorAll('.testimonial-item');
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
    document.getElementById('customerImg').src = testimonials[index].image;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

function scrollBlog(direction) {
    const container = document.getElementById('blogCards');
    const scrollAmount = 380;
    container.scrollLeft += direction * scrollAmount;
}
