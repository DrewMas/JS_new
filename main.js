// HOME WORK
//
//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const post of value) {
//             const postEl = document.createElement('div');
//             document.body.append(postEl);
//             postEl.innerText = `${post.id} - ${post.title}`;
//         }
//     })
//
//
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         for (const comment of value) {
//             const comEl = document.createElement('div');
//             document.body.append(comEl);
//             comEl.innerText = `${comment.id} - ${comment.name}`;
//         }
//     });

// CLASS WORK
//
//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
//
// const wrap = document.createElement('div');
// document.body.append(wrap);
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const post of value) {
//             const postDiv = document.createElement('div');
//             const pEl = document.createElement('p');
//             const btn1 = document.createElement('button');
//             pEl.innerText = `${post.id} - ${post.title}`;
//             btn1.innerText = `comments`;
//
//             wrap.append(postDiv);
//             postDiv.append(pEl);
//             postDiv.append(btn1);
//
//             btn1.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(value1 => value1.json())
//                     .then(value1 => {
//                         for (const comment of value1) {
//                             console.log(comment);
//                             const comEl = document.createElement('li');
//                             postDiv.append(comEl);
//                             comEl.innerText = `${comment.name}`;
//                         }
//                     })
//             }
//
//         }
//     });
//
// const flex = document.getElementsByClassName('wrapper')[0];
// flex.style.display = 'flex';
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//     const postBox = document.getElementsByClassName('post-box')[0];
//         for (const post of value) {
//             const postText = document.createElement('p');
//             const btn = document.createElement('button');
//
//             postText.innerText = `${post.id} - ${post.title}`;
//             btn.innerText = `comments`;
//
//             btn.onclick = () =>{
//
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(value1 => value1.json())
//                     .then(value1 => {
//                         const commentBox = document.getElementsByClassName('comments')[0];
//                         commentBox.innerText = ' ';
//                         for (const comment of value1) {
//                             let liComment = document.createElement('li');
//                             liComment.innerText = `${comment.name}`;
//                             commentBox.append(liComment);
//                         }
//                     })
//             }
//             postBox.append(postText);
//             postBox.append(btn);
//         }
//
//     });

// ADDITIONAL
//
//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        let userBox = document.getElementById('wrapper');

        for (const user of value) {
            const oneUser = document.createElement('p');
            userBox.append(oneUser);
            oneUser.innerText = `${user.id} - ${user.name}`;

            const btn = document.createElement('button');
            userBox.append(btn);
            btn.innerText = `Post details`;
            btn.style.height = '20px';

            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(posts => posts.json())
                    .then(posts => {

                        let postBox = document.getElementsByClassName('post-box')[0];
                        postBox.innerHTML = '';

                        for (const post of posts) {
                            const onePost = document.createElement('p');
                            postBox.append(onePost);
                            onePost.innerText = `${post.id} - ${post.title}`;

                            const btn2 = document.createElement('button');
                            btn2.innerText = `Post's comments`;
                            onePost.append(btn2);

                            btn2.onclick = () =>{

                                const commentBox = document.getElementsByClassName('comment-box')[0];
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                    .then(value3 => value3.json())
                                    .then(comments => {
                                        let commentBox = document.getElementsByClassName('comment-box')[0];
                                        commentBox.innerHTML = '';

                                        for (const comment of comments) {
                                            const oneComment = document.createElement('p');
                                            commentBox.append(oneComment);
                                            oneComment.innerText = `${comment.id} - ${comment.name}`;
                                        }
                                    })
                            }
                        }
                    })
            }
        }
    })