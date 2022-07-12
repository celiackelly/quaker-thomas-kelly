const submitCommentBtn = document.querySelector('#submit-comment-btn')

submitCommentBtn.addEventListener('click', async e => {
    try {
        const response = await fetch('/community', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name: document.querySelector('input[name="name"]').value, 
                email: document.querySelector('input[name="email"]').value, 
                text: document.querySelector('textarea[name="text"]').value,
                //not sure why this is going into the db as "on" instead of "true"
                notificationPreference: document.querySelector('input[name="notifyMe"]').value,
                //add date/time collection 
                date: Date()
            })
        })
        if (response.ok) {
            const json = await response.json()
            console.log(e)
            console.log(json)
            return json
        }
    } catch(err) {
        console.log(err)
    }
})