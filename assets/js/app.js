const postParent = document.querySelector('.appeal')

const post = document.createElement('article');
post.classList.add('feedback')
post.innerHTML = `<div>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
</p>
</div>

<div class="date__author">
<div class="date">10.10.2021, 20:33</div>
<div class="author">
    <a href="https://headsmanc0de.com/" target="_blank">headsmanc0de</a>
</div>
</div>`;

postParent.appendChild(post);