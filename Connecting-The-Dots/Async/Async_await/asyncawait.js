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

// Async await waits to execute everything before the function which has await labeled to run 

async function init() {

    await createPost(
     {title: 'Post three', body: 'This is post three'}
     );

     getPosts();

}

init();