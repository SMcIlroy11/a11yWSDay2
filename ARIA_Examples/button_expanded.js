function expandButton(event) {
    console.log('running');
    let trigger = document.getElementById('trigger');
    let content = document.getElementById('button_content')
    switch (trigger.getAttribute('aria-expanded')) {
        case "true":
            trigger.setAttribute('aria-expanded', "false");
            break;
        case "false":
            trigger.setAttribute('aria-expanded', "true");
            break;
    }
    switch (content.getAttribute('aria-hidden')) {
        case "true":
            content.setAttribute('aria-hidden', "false");
            content.setAttribute('style', 'display:inherit')
            break;
        case "false":
            content.setAttribute('aria-hidden', "true")
            content.setAttribute('style', 'display:none')
    }
}