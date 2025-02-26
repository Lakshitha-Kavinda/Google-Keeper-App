import react from 'react';

//footer to show a copyright message in <p> which dynamically updates the year
function Footer() {
    const year = new Date().getFullYear();

    return (<footer><div>
        <p>Copyright © {year}</p>
    </div></footer>);
}

export default Footer;