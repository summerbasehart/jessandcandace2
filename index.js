const toggleChecked = () => document.querySelectorAll('.navigation__checkbox')
    .forEach(function(element){
    element.removeAttribute("checked");
});

const listItems = document.getElementsByClassName("navigation__item");

listItems.forEach(i => {
    i.addEventListener('click', toggleChecked)
});
