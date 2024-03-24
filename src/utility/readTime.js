export const readTime = (desc) =>{
    const avgReadTime = 200;

    const div = document.createElement('div');
    div.innerHTML = desc.__html;

    const textContext = div.textContent || div.innerHTML;
    const words = textContext.trim().split(/\s+/).length;
    return Math.ceil(words / avgReadTime);
}