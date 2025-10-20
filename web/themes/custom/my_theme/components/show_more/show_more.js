((Drupal, once) => {
  /**
   * Attach behaviour to each accordion.
   * @param {Element} show_more The show_more element.
   */
  const init_show_more = (show_more) => {
    const containerSelector = show_more.getAttribute("data-show-more-container");
    const targetSelector = show_more.getAttribute("data-show-more-target");
    const link = show_more.querySelector(".show-more-link");
    const linkTextMore = show_more.getAttribute("data-show-more-link-more");
    const linkTextLess = show_more.getAttribute("data-show-more-link-less");
    const num = parseInt(show_more.getAttribute("data-show-more-num-display"));
    const container = document.querySelector(containerSelector);
    const targets = container.querySelectorAll(
      `${targetSelector}:nth-child(n+${num + 1})`
    );
    targets.forEach((target) => {
      target.classList.add("show-more-hidden");
      target.classList.add("show-more-target");
      target.setAttribute("aria-hidden", "true");
    });

    let counter = null;
    let counterTextOpen = "";
    let counterTextClosed = "";

    show_more.addEventListener("click", (event) => {
      event.preventDefault();
      targets.forEach((target) => {
        target.classList.toggle("show-more-hidden");
        target.toggleAttribute("aria-hidden");
      });

      // Scroll to the container top - 120px.
      window.scrollTo({top: container.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth'});

      link.innerHTML = link.innerHTML === linkTextMore ? linkTextLess : linkTextMore;
      link.classList.toggle("rotate");

      if (counter) {
        counter.innerHTML =
          counter.innerHTML === counterTextOpen
            ? counterTextClosed
            : counterTextOpen;
      }
    });
  };

  Drupal.behaviors.show_moreArrowComponent = {
    attach(context) {
      const show_more = once("show_more", ".show-more", context);
      show_more.forEach(init_show_more);
    },
  };
})(Drupal, once);
