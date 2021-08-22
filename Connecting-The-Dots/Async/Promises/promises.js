const posts = [
    {
        title: 'Post One',
        body: 'This is Post One',
    },

    {
        title: 'Post Two',
        body: 'This is Post Two',
    }
];

function getPosts() {

    // Mimicking the respond-time for the data in real life with a setTimeout function
    setTimeout(() => {
        let output = '';

        // Looping through the posts
        posts.forEach((post, index) => {
            // Adding the content to the output in the literal for each time we loop
            output += `<li>${post.title}</li>`;
        });
 
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            posts.push(post);
       
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }

        }, 2000);

    });
}

// createPost(
//     {title: 'Post three', body: 'This is post three'}
//     ).then(getPosts).catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));