(() => {
  const ALL_LAYERS = ["application", "framework", "hal", "kernel"];

  const railLayers = Array.from(document.querySelectorAll(".stack-layer"));
  const chips = Array.from(document.querySelectorAll(".chip"));

  function setActive(layers) {
    const active = new Set(layers.length ? layers : ["application"]);
    railLayers.forEach((el) => {
      el.classList.toggle("active", active.has(el.dataset.layer));
    });
    chips.forEach((el) => {
      el.classList.toggle("active", active.has(el.dataset.layer));
    });
  }

  // Elements that declare which layer(s) they belong to.
  const targets = Array.from(
    document.querySelectorAll("[data-layer], [data-layers]")
  ).filter((el) => !el.classList.contains("stack-layer") && !el.classList.contains("chip") && !el.classList.contains("tag"));

  function layersOf(el) {
    if (el.dataset.layers) return el.dataset.layers.split(",");
    if (el.dataset.layer) return [el.dataset.layer];
    return [];
  }

  let current = ["application"];

  if ("IntersectionObserver" in window && targets.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most centered in the viewport among intersecting ones.
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => {
          const da = Math.abs(a.boundingClientRect.top);
          const db = Math.abs(b.boundingClientRect.top);
          return da - db;
        });

        current = layersOf(visible[0].target);
        setActive(current);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // Mobile chips: tapping jumps to the first section for that layer.
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const layer = chip.dataset.layer;
      const target = targets.find((el) => layersOf(el).includes(layer));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  setActive(current);
})();
