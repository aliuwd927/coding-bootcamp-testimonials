const testimonial = document.getElementById('testimonial');
const studentName = document.getElementById('student_name');
const profilePic = document.getElementById('prof_pic');
const previous = document.getElementById('prev');
const next = document.getElementById('next');

previous.addEventListener('click', function(){
    testimonial.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`;
    studentName.innerHTML = `Tanya Sinclair <span class="student_type">UX Engineer</span>`;
    profilePic.style.backgroundImage = `url(/images/image-tanya.jpg)`;
});

next.addEventListener('click', function(){
    testimonial.innerHTML = `&nbsp;“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`;
    studentName.innerHTML = `John Tarkpor <span class="student_type">Junior Front-end Developer</span>`;
    profilePic.style.backgroundImage = `url(/images/image-john.jpg)`;
});

