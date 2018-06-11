
const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      stats: {
        likes: 6,
        dislikes: 2,
        fav: 3
      }
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      stats: {
        likes: 124,
        dislikes: 8,
        fav: 36
      }
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      stats: {
        likes: 800,
        dislikes: 36,
        fav: 147
      }
    }
  ];

const wrapper = document.querySelector('div');

const postsCard = createCards(posts);

wrapper.innerHTML = postsCard;

function createPostCard(newPost) {
    return `
    <div class="post">
        <img class="post__image" src=${newPost.img} alt="post image">
        <h2 class="post__title">${newPost.title}</h2>
        <p class="post__text">${newPost.text}</p>   
        <ul class="actions post__actions">
            <li class="actions__item">
                <button class="actions__btn ">
                    <span class="actions__icon actions__icon--like"></span>
                    <span class="actions__count">${newPost.stats.likes}</span>
                </button>
            </li>
            <li class="actions__item">
                <button class="actions__btn ">
                    <span class="actions__icon actions__icon--dislike"></span>
                    <span class="actions__count">${newPost.stats.dislikes}</span>
                </button>
            </li>
            <li class="actions__item">
                <button class="actions__btn ">
                    <span class="actions__icon actions__icon--fav"></span>
                    <span class="actions__count">${newPost.stats.fav}</span>
                </button>
            </li>
        </ul>
    </div>`;
};

function createCards(posts) {
    return posts.reduce(
        (acc, obj) => acc + createPostCard(obj),
        ''
    )
};
