  // [].slice.call => converts HTMLCollection to Array
  const classFilters = [].slice.call(document.querySelectorAll('[group="blah"]'));
  const roleFilters = [].slice.call(document.querySelectorAll('[group="role"]'));
  //const rarityFilters = [].slice.call(document.querySelectorAll('[group="rarity"]'));
  const allFilters = classFilters.concat(roleFilters);
  const filterContents = [].slice.call(document.querySelectorAll('.buildsFeed'));

  // add click event to all filters
  allFilters.forEach((filter) => {
    filter.addEventListener('click', filterToggle);
  });
    
  function filterToggle() {
    const filter = this.getAttribute('filter');
    const group = this.getAttribute('group');

    //toggle buttons inactive if pressed whilst active
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      applyFilter();
      return;
    } else resetButtons(group);

    this.classList.add('active');
    applyFilter();
  }

  //remove active status from buttons
  function resetButtons(name) {
   const groupName = [].slice.call(document.querySelectorAll('[group=' + name + ']'));
   groupName.forEach(filter => filter.classList.remove('active'));
  }
  
  //hide inactive herocards
  function resetFilterContent() {
    filterContents.forEach(content => content.classList.remove('show'));
  }

  function applyFilter() {
    let selectedFilters = [].slice.call(document.querySelectorAll('[filter].active')).map(filter => filter.getAttribute('filter'));
    console.log(selectedFilters)
    const selector = ["buildsFeed"].concat(selectedFilters).map(filter => '[class~="'+ filter +'"]').join('');
//    filterText();
    resetFilterContent();
    document.querySelectorAll(selector).forEach(content => content.classList.add('show'));
  }
  
  applyFilter();

  //change text to list selected filters
  function filterText () {
    let selectedFilters = [].slice.call(document.querySelectorAll('[filter].active')).map(filter => filter.getAttribute('filter'));
    if (selectedFilters.length === 0) { document.getElementById("filterList").textContent = 'ALL HEROES';
    } else { document.getElementById("filterList").textContent = selectedFilters.join(', ') + ' HEROES';
    }
    resetFilterContent();
  }