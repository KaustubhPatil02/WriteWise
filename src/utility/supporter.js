export const secretMail = (email) =>{
    // logic for making secret of email{user} basically split the email and join it with the secret

    const[username, domain] = email.split('@');
    // const secret = username.slice(0, 3) + '...@' + domain;
    const secret = username.substring(0, 2) + "*".repeat(username.length - 2) + '@' + domain;
    // console.log(secret);
    // console.log(email)
    return `${secret}`
}

export const readTime = (desc) =>{
    const avgReadTime = 200;

    const div = document.createElement('div');
    div.innerHTML = desc.__html;

    const textContext = div.textContent || div.innerHTML;
    const words = textContext.trim().split(/\s+/).length;
    return Math.ceil(words / avgReadTime);
}