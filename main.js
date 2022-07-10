const submitCommentBtn = document.querySelector('#submit-comment-btn')

submitCommentBtn.addEventListener('click', async e => {
    try {
        const reponse = await fetch('/community', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name: document.querySelector('input[name="name"]'), 
                email: document.querySelector('input[name="email"]'), 
                text: document.querySelector('input[name="text"]'),
                notificationPreference: document.querySelector('input[name="notifyMe"]')
            })
        })
        if (response.ok) {
            const json = await response.json()
            console.log(json)
            return json
        }
    } catch(err) {
        console.log(err)
    }
})