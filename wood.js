const projects = document.getElementsByClassName('outline-2');

// Trim out keywords
for (let i=0; i<projects.length; i++) {
    projects[i].innerHTML = projects[i].innerHTML
        .replace(/Date: (.*)/, "<div id='projdate'>$1</div>");

    projects[i].innerHTML = projects[i].innerHTML
        .replace(/Desc: (.*)/, "<div id='projdesc'>$1</div>");

    projects[i].innerHTML = projects[i].innerHTML
        .replace(/<p>\n<\/p>/g, "")
        .replace(/<p><\/p>/g, "");
}

// Remove outline-2 parent
const outline2s = document.getElementsByClassName('outline-text-2');
[...outline2s].map(o => o.replaceWith(...o.childNodes));
