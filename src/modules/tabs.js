const tabs = () => {
    const tabsContent = document.querySelectorAll('.service-tab');
    const tabsPanel = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');

    tabsPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) {
            const tabBtn = e.target.closest('.service-header-tab');
            tabs.forEach((tab, i) => {
                if (tab === tabBtn) {
                    tab.classList.add('active');
                    tabsContent[i].classList.remove('d-none');
                } else {
                    tab.classList.remove('active');
                    tabsContent[i].classList.add('d-none');
                }
            });
        }
    })

}

export default tabs;