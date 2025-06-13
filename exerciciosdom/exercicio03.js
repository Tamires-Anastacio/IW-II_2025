    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');
    let count = 0;
    let liked = false;

    likeButton.addEventListener('click', () => {
      liked = !liked;
      likeButton.classList.toggle('liked', liked);
      count += liked ? 1 : -1;
      likeCount.textContent = count;
    });
