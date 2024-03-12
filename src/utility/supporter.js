export const secretMail = (email) =>{
    // logic for making secret of email{user} basically split the email and join it with the secret

    const[username, domain] = email.split('@');
    // const secret = username.slice(0, 3) + '...@' + domain;
    const secret = username.substring(0, 2) + "*".repeat(username.length - 2) + '@' + domain;
    console.log(secret);
    // console.log(email)
    return `${secret}`
}