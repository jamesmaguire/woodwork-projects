const projects = document.getElementsByClassName('outline-2');

// Trim out keywords
for (let i=0; i<projects.length; i++) {
    projects[i].innerHTML = projects[i].innerHTML
        .replace(/Date: (.*)/, "<div class='projdate'>$1</div>");

    projects[i].innerHTML = projects[i].innerHTML
        .replace(/Desc: (.*)/, "<div class='projdesc'>$1</div>");

    projects[i].innerHTML = projects[i].innerHTML
        .replace(/<p>\n<\/p>/g, "")
        .replace(/<p><\/p>/g, "");
}

// Remove outline-2 parent
const outlinetext2s = document.getElementsByClassName('outline-text-2');
[...outlinetext2s].map(o => o.replaceWith(...o.childNodes));

// Organise elements
const outline2s = document.getElementsByClassName('outline-2');
for (let i=0; i<outline2s.length; i++) {
    let wrapper = document.createElement('div');
    wrapper.classList = "descwrapper";
    outline2s[i].appendChild(wrapper);

    let projname = outline2s[i].getElementsByTagName('h2')[0];
    let projdate = outline2s[i].getElementsByClassName('projdate')[0];
    let projdesc = outline2s[i].getElementsByClassName('projdesc')[0];
    projname ? wrapper.appendChild(projname) : null;
    projdate ? wrapper.appendChild(projdate) : null;
    projdesc ? wrapper.appendChild(projdesc) : null;
}

// Table of contents
// Give all h2s an id of "Balance board => Balance-board"
[...document.getElementsByClassName('descwrapper')]
    .map(w => w.getElementsByTagName('h2')[0])
    .map(h => h.id = h.innerText.replace(/ /g, '-'));
// Same for toc entries
[...document.getElementById('text-table-of-contents').getElementsByTagName('ul')[0].children]
    .map(l => l.getElementsByTagName('a')[0].href = `#${l.innerText.replace(/ /g, '-')}`);

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#text-table-of-contents ul li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`#text-table-of-contents ul li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });
  // Track all h2s that have an `id` applied
  document.querySelectorAll('h2[id]').forEach((section) => {
    observer.observe(section);
  });
});
